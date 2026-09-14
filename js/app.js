// Digital SAT Math 2026 Master Study Workspace Controller
// Manages State, Routing, Module Renderers, Bluebook Simulator, and Desmos Tools

const app = {
  // Application State
  currentView: "dashboard",
  activeTierFilter: "all",
  activeDomainFilter: "all",
  activeFormulaFilter: "all",
  activeModule4Tab: "keys",
  activeGlossaryFilter: "all",

  // Simulator State
  sim: {
    active: false,
    mode: "study", // "study" (instant check enabled) or "exam" (timed)
    questions: [],
    currentIndex: 0,
    answers: {},
    struckOptions: {}, // { [qId]: ['A', 'C'] }
    flagged: new Set(),
    timerSeconds: 35 * 60, // 35 minutes
    timerInterval: null,
    timerVisible: true,
    trHelpOpen: false
  },

  // User Local Storage Data
  userData: {
    bookmarks: new Set(),
    completedQuestions: new Set(),
    checklist: {}
  },

  // Initialize App
  init() {
    this.loadUserData();
    this.setupEventListeners();
    this.renderModule1();
    this.renderModule2();
    this.renderModule3();
    this.renderModule4();
    this.renderSectionTrDrawers();
    this.renderTrGlossary();
    this.loadNotes();
    this.loadDrawing();
    this.updateProgressIndicator();
    this.renderMath();
  },

  // Load from LocalStorage
  loadUserData() {
    try {
      const saved = localStorage.getItem("sat_2026_userdata");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.bookmarks) this.userData.bookmarks = new Set(parsed.bookmarks);
        if (parsed.completedQuestions) this.userData.completedQuestions = new Set(parsed.completedQuestions);
        if (parsed.checklist) this.userData.checklist = parsed.checklist;
      }
    } catch (e) {
      console.warn("Could not load local storage", e);
    }
  },

  saveUserData() {
    try {
      const toSave = {
        bookmarks: Array.from(this.userData.bookmarks),
        completedQuestions: Array.from(this.userData.completedQuestions),
        checklist: this.userData.checklist
      };
      localStorage.setItem("sat_2026_userdata", JSON.stringify(toSave));
    } catch (e) {
      console.warn("Could not save local storage", e);
    }
  },

  // Update Progress in Sidebar
  updateProgressIndicator() {
    const total = window.SAT_QUESTIONS ? window.SAT_QUESTIONS.length : 100;
    const completed = this.userData.completedQuestions.size;
    const pct = Math.round((completed / total) * 100);

    const txt = document.getElementById("sidebar-progress-text");
    const bar = document.getElementById("sidebar-progress-bar");
    if (txt) txt.textContent = `${completed} / ${total} (${pct}%)`;
    if (bar) bar.style.width = `${pct}%`;
  },

  // Event Listeners Setup
  setupEventListeners() {
    // Sidebar Navigation
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        const view = link.getAttribute("data-view");
        if (view) this.navigate(view);
      });
    });

    // Sublinks Navigation
    document.querySelectorAll(".nav-sublink").forEach(sublink => {
      sublink.addEventListener("click", (e) => {
        e.preventDefault();
        const view = sublink.getAttribute("data-view");
        const filter = sublink.getAttribute("data-filter");
        const tier = sublink.getAttribute("data-tier");
        const tab = sublink.getAttribute("data-tab");
        const sub = sublink.getAttribute("data-sub");

        if (view) this.navigate(view);

        if (view === "module-1" && filter) {
          this.setFormulaFilter(filter);
        } else if (view === "module-3" && tier) {
          this.setTierFilter(tier);
        } else if (view === "module-4" && tab) {
          this.switchModule4Tab(tab);
        } else if (view === "module-2" && sub) {
          const el = document.getElementById(`domain-card-${sub}`) || document.getElementById("weighting-overview");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Mobile Menu Button
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const sidebar = document.getElementById("sidebar");
    if (mobileBtn && sidebar) {
      mobileBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
      });
    }

    // Scratchpad Keyboard Shortcuts (Ctrl+Z Undo, Ctrl+Y Redo)
    window.addEventListener("keydown", (e) => {
      if (this.notesState.isOpen && this.notesState.activeTab === "draw") {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
          if (e.shiftKey) {
            e.preventDefault();
            this.redoDraw();
          } else {
            e.preventDefault();
            this.undoDraw();
          }
        } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
          e.preventDefault();
          this.redoDraw();
        }
      }
    });

    // Scratchpad Resize Listener
    window.addEventListener("resize", () => {
      if (this.notesState.isOpen && this.notesState.activeTab === "draw" && this.drawState.canvasInitialized) {
        this.setupCanvasResolution();
      }
    });

    // Modal Buttons in Header
    document.getElementById("btn-open-ref-sheet").addEventListener("click", () => this.openModal("modal-ref-sheet"));
    document.getElementById("btn-open-desmos").addEventListener("click", () => this.openModal("modal-desmos"));
    document.getElementById("btn-launch-sim").addEventListener("click", () => this.launchSimulator("all"));

    // Module 1 Search & Category Filter
    const fSearch = document.getElementById("formula-search");
    if (fSearch) {
      fSearch.addEventListener("input", () => this.renderModule1());
    }
    document.querySelectorAll("#view-module-1 .pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#view-module-1 .pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeFormulaFilter = btn.getAttribute("data-filter");
        this.renderModule1();
      });
    });

    // Module 3 Filters
    const qSearch = document.getElementById("q-search");
    if (qSearch) qSearch.addEventListener("input", () => this.renderModule3());
    const filterDomain = document.getElementById("filter-domain");
    if (filterDomain) filterDomain.addEventListener("change", () => this.renderModule3());
    const filterType = document.getElementById("filter-type");
    if (filterType) filterType.addEventListener("change", () => this.renderModule3());
    const filterDiff = document.getElementById("filter-difficulty");
    if (filterDiff) filterDiff.addEventListener("change", () => this.renderModule3());

    // Module 3 Tier Tabs
    document.querySelectorAll("#view-module-3 .tier-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tier = btn.getAttribute("data-tier");
        if (tier) this.setTierFilter(tier);
      });
    });

    // Module 4 Search & Filter
    const solSearch = document.getElementById("solution-search");
    if (solSearch) solSearch.addEventListener("input", () => this.renderSolutionsList());
    document.querySelectorAll("#subtab-solutions-key .pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#subtab-solutions-key .pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.solTierFilter = btn.getAttribute("data-sol-tier");
        this.renderSolutionsList();
      });
    });

    // Simulator Navigation Controls
    document.getElementById("sim-prev-btn").addEventListener("click", () => this.simPrev());
    document.getElementById("sim-next-btn").addEventListener("click", () => this.simNext());
    document.getElementById("sim-check-btn").addEventListener("click", () => this.simCheckCurrentAnswer());
    document.getElementById("sim-flag-btn").addEventListener("click", () => this.simToggleFlag());
    document.getElementById("sim-ref-btn").addEventListener("click", () => this.openModal("modal-ref-sheet"));
    document.getElementById("sim-desmos-btn").addEventListener("click", () => this.openModal("modal-desmos"));
    document.getElementById("sim-nav-grid-btn").addEventListener("click", () => this.openModal("modal-q-grid"));

    // Simulator Timer click to hide/show
    const timerDisplay = document.getElementById("sim-timer-display");
    if (timerDisplay) {
      timerDisplay.addEventListener("click", () => {
        this.sim.timerVisible = !this.sim.timerVisible;
        const txt = document.getElementById("sim-timer-text");
        if (txt) txt.style.visibility = this.sim.timerVisible ? "visible" : "hidden";
      });
    }
  },

  // Main View Router
  navigate(viewId) {
    this.currentView = viewId;

    // Update active nav-link
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("data-view") === viewId);
    });

    // Close mobile menu if open
    const sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.classList.remove("open");

    // Hide all sections, show active
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.remove("active");
    });
    const activeSec = document.getElementById(`view-${viewId}`);
    if (activeSec) activeSec.classList.add("active");

    // Update top header title
    const titles = {
      "dashboard": { title: "Dashboard Overview", sub: "Digital SAT Math 2026 Master Study Workspace" },
      "module-1": { title: "Module 1: Formula & Cheat Sheet", sub: "Official Reference, Algebra, Advanced Math, Statistics, and Trig" },
      "module-2": { title: "Module 2: Topic Map & Weights", sub: "Exact 2026 Domain Breakdown, Skill Frequencies & Roadmaps" },
      "module-3": { title: "Module 3: 100-Question Bank", sub: "Part A Foundational & Part B Adaptive Hard Tier" },
      "module-4": { title: "Module 4: Solutions & Desmos Hacks", sub: "Step-by-Step Proofs & 10–15 Second Calculator Speed Hacks" },
      "simulator": { title: "Digital SAT Bluebook Simulator", sub: "Authentic Practice Test Interface with Desmos & Reference Tools" }
    };

    const headerTitle = document.getElementById("top-header-title");
    const headerSub = document.getElementById("top-header-subtitle");
    if (headerTitle && titles[viewId]) headerTitle.textContent = titles[viewId].title;
    if (headerSub && titles[viewId]) headerSub.textContent = titles[viewId].sub;

    window.scrollTo({ top: 0, behavior: "smooth" });
    this.renderMath();
  },

  // Modal Control
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("open");
      if (modalId === "modal-q-grid") {
        this.renderSimGridModal();
      }
      this.renderMath();
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("open");
  },

  // KaTeX Math Rendering Helper
  renderMath() {
    if (window.renderMathInElement) {
      setTimeout(() => {
        window.renderMathInElement(document.body, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false,
          strict: false
        });
      }, 50);
    }
  },

  // ========================================================
  // MODULE 1: FORMULA SHEET CONTROLLER
  // ========================================================
  setFormulaFilter(filter) {
    this.activeFormulaFilter = filter;
    document.querySelectorAll("#view-module-1 .pill-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === filter);
    });
    this.renderModule1();
  },

  renderModule1() {
    const container = document.getElementById("formulas-container");
    if (!container || !window.SAT_FORMULAS) return;

    const searchTerm = (document.getElementById("formula-search")?.value || "").toLowerCase();
    const filter = this.activeFormulaFilter || "all";

    const filtered = window.SAT_FORMULAS.filter(f => {
      const matchesCategory = (filter === "all") || (f.category === filter);
      const matchesSearch = !searchTerm || 
        f.name.toLowerCase().includes(searchTerm) || 
        f.latex.toLowerCase().includes(searchTerm) ||
        f.traps.toLowerCase().includes(searchTerm) ||
        f.explanation.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: white; border-radius: 12px; border: 1px solid var(--border);">
          <p style="font-size: 16px; color: var(--text-muted);">No formulas matching your search criteria.</p>
          <button class="btn btn-outline btn-sm" style="margin-top: 10px;" onclick="app.setFormulaFilter('all')">Reset Filter</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(f => {
      const varsHtml = f.vars.map(v => `
        <div class="var-item">
          <span class="var-symbol">$${v.symbol}$</span>
          <span>: ${v.name}</span>
        </div>
      `).join("");

      return `
        <div class="formula-card">
          <div class="formula-card-top">
            <h4 style="font-size: 15px; font-weight: 700; color: var(--text-main);">${f.name}</h4>
            <span class="formula-cat-badge">${f.categoryName}</span>
          </div>
          <div class="formula-display">
            <div class="latex-formula">$$${f.latex}$$</div>
          </div>
          <div class="formula-content">
            <div class="formula-explanation">${f.explanation}</div>
            <div class="formula-vars-list">
              <strong style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 2px;">Variable Definitions:</strong>
              ${varsHtml}
            </div>
            <div class="trap-callout">
              <div class="trap-title">
                <span>⚠️</span>
                <span>Digital SAT Trap & Edge Case</span>
              </div>
              <div>${f.traps}</div>
            </div>
            <div class="desmos-callout">
              <div class="desmos-title">
                <span>⚡</span>
                <span>Desmos Shortcut Trick</span>
              </div>
              <div>${f.desmosTip}</div>
            </div>

            <!-- Turkish Formula Translation, Terminology & Traps Drawer -->
            ${this.getFormulaTrHtml(f.id)}
          </div>
        </div>
      `;
    }).join("");

    this.renderMath();
  },

  // ========================================================
  // MODULE 2: TOPIC MAP & WEIGHTING CONTROLLER
  // ========================================================
  renderModule2() {
    if (!window.SAT_TOPICS) return;

    // 1. Render Domain Overview Bars
    const overviewContainer = document.getElementById("domain-overview-cards");
    if (overviewContainer) {
      overviewContainer.innerHTML = window.SAT_TOPICS.domains.map(d => `
        <div class="domain-bar-card ${d.id}">
          <div class="domain-header">
            <span class="domain-name">${d.name}</span>
            <span class="domain-pct">${d.weightPercent}%</span>
          </div>
          <div class="domain-questions-count">~${d.questionCountPerTest} questions per full exam</div>
          <div class="meter-track">
            <div class="meter-fill" style="width: ${d.weightPercent}%; background-color: ${d.color};"></div>
          </div>
          <p style="font-size: 12.5px; color: var(--text-muted);">${d.description}</p>
        </div>
      `).join("");
    }

    // 2. Render Domain Accordions & Subtopics
    const detailsContainer = document.getElementById("domain-details-container");
    if (detailsContainer) {
      detailsContainer.innerHTML = window.SAT_TOPICS.domains.map(d => {
        const subtopicsHtml = d.subtopics.map((st, sIdx) => `
          <div class="subtopic-item">
            <div class="subtopic-item-header">
              <span class="subtopic-title">${st.name}</span>
              <span class="subtopic-freq">${st.frequency}</span>
            </div>
            <div class="subtopic-desc">${st.description}</div>
            <div class="subtopic-key-concept"><strong>Core Principle:</strong> ${st.keyConcept}</div>

            <!-- Turkish Subtopic Translation, Terminology & Trap Drawer -->
            ${this.getSubtopicTrHtml(st.name, `st-${d.id}-${sIdx}`)}
          </div>
        `).join("");

        return `
          <div class="domain-detail-card" id="domain-card-${d.id}">
            <div class="domain-detail-header">
              <div class="domain-detail-title">
                <span class="domain-color-pill" style="background-color: ${d.color};"></span>
                <span style="font-size: 16px; font-weight: 700; color: var(--text-main);">${d.name}</span>
                <span style="font-size: 13px; font-weight: 600; color: var(--text-muted);">(${d.weightPercent}% • ~${d.questionCountPerTest} Qs)</span>
              </div>
            </div>
            <div class="subtopics-list">
              <div style="background-color: var(--secondary-light); border-left: 3px solid ${d.color}; padding: 10px 14px; border-radius: var(--radius-sm); margin-bottom: 8px; font-size: 13px; color: var(--text-main);">
                <strong>⚡ Desmos Superpower for ${d.name}:</strong> ${d.desmosSuperpower}
              </div>
              ${subtopicsHtml}
            </div>
          </div>
        `;
      }).join("");
    }

    // 3. Render Score Roadmaps & Readiness Checklist
    const roadmapContainer = document.getElementById("roadmap-container");
    if (roadmapContainer) {
      roadmapContainer.innerHTML = window.SAT_TOPICS.scoreRoadmap.map((rm, rIdx) => {
        const itemsHtml = rm.priorities.map((item, pIdx) => {
          const key = `rm_${rIdx}_${pIdx}`;
          const checked = this.userData.checklist[key] ? "checked" : "";
          return `
            <li>
              <input type="checkbox" id="${key}" ${checked} onchange="app.toggleChecklist('${key}')">
              <label for="${key}" style="cursor: pointer;">${item}</label>
            </li>
          `;
        }).join("");

        return `
          <div class="roadmap-card">
            <div class="roadmap-target">
              <span>Target ${rm.targetScore}</span>
              <span style="font-size: 12px; font-weight: 600; color: var(--text-muted);">${rm.estimatedTime}</span>
            </div>
            <div class="roadmap-focus">${rm.focus}</div>
            <ul class="roadmap-list">
              ${itemsHtml}
            </ul>
          </div>
        `;
      }).join("");
    }
  },

  toggleChecklist(key) {
    this.userData.checklist[key] = !this.userData.checklist[key];
    this.saveUserData();
  },

  // ========================================================
  // MODULE 3: 100-QUESTION BANK CONTROLLER
  // ========================================================
  setTierFilter(tier) {
    this.activeTierFilter = tier;
    document.querySelectorAll("#view-module-3 .tier-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tier") === tier);
    });
    this.renderModule3();
  },

  renderModule3() {
    const container = document.getElementById("questions-container");
    if (!container || !window.SAT_QUESTIONS) return;

    const searchTerm = (document.getElementById("q-search")?.value || "").toLowerCase();
    const domainFilter = document.getElementById("filter-domain")?.value || "all";
    const typeFilter = document.getElementById("filter-type")?.value || "all";
    const diffFilter = document.getElementById("filter-difficulty")?.value || "all";
    const tierFilter = this.activeTierFilter || "all";

    const filtered = window.SAT_QUESTIONS.filter(q => {
      const matchesTier = (tierFilter === "all") || (q.part === tierFilter);
      const matchesDomain = (domainFilter === "all") || (q.domainId === domainFilter);
      const matchesType = (typeFilter === "all") || (q.type === typeFilter);
      const matchesDiff = (diffFilter === "all") || (q.difficulty === diffFilter);
      const matchesSearch = !searchTerm || 
        q.question.toLowerCase().includes(searchTerm) ||
        q.topic.toLowerCase().includes(searchTerm) ||
        `#${q.number}`.includes(searchTerm);

      return matchesTier && matchesDomain && matchesType && matchesDiff && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 50px; background: white; border-radius: 12px; border: 1px solid var(--border);">
          <p style="font-size: 16px; color: var(--text-muted);">No questions match the selected filters.</p>
          <button class="btn btn-outline btn-sm" style="margin-top: 12px;" onclick="app.resetQFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(q => {
      const isBookmarked = this.userData.bookmarks.has(q.id);
      const isCompleted = this.userData.completedQuestions.has(q.id);

      // Render MCQ or SPR preview
      let optionsHtml = "";
      if (q.type === "mcq" && q.options) {
        optionsHtml = `
          <div class="qcard-options">
            ${q.options.map(opt => `
              <div class="q-opt-btn" onclick="app.toggleCardAnswer(${q.id}, '${opt.letter}')" id="card-opt-${q.id}-${opt.letter}">
                <span class="opt-letter">${opt.letter}</span>
                <span>$${opt.text}$</span>
              </div>
            `).join("")}
          </div>
        `;
      } else {
        optionsHtml = `
          <div class="qcard-spr-wrap">
            <div class="spr-input-preview">
              <span>✍️ Student-Produced Response:</span>
              <input type="text" id="card-spr-${q.id}" placeholder="Enter number or a/b..." 
                style="border: 1px solid var(--border); border-radius: 4px; padding: 4px 8px; font-size: 13px;"
                onchange="app.checkCardSpr(${q.id})">
            </div>
          </div>
        `;
      }

      // Solution and Desmos
      const sol = window.SAT_SOLUTIONS ? window.SAT_SOLUTIONS.find(s => s.id === q.id) : null;
      const solContent = sol ? `
        <div style="margin-bottom: 12px;">
          <strong style="color: var(--primary-dark); font-size: 14px;">Correct Answer: ${sol.correctAnswer}</strong>
        </div>
        <div style="margin-bottom: 12px; font-size: 13.5px; line-height: 1.6;">
          <strong style="display:block; margin-bottom: 4px; color: var(--text-main);">Standard Step-by-Step Algebraic Solution:</strong>
          <div style="white-space: pre-line;">${sol.algebraicSolution}</div>
        </div>
        <div class="desmos-callout" style="margin-top: 10px;">
          <div class="desmos-title">
            <span>⚡</span>
            <span>Desmos 10-15s Speed Shortcut</span>
          </div>
          <div style="font-size: 13px; line-height: 1.5;">${sol.desmosShortcut}</div>
        </div>
      ` : "Solution loading...";

      return `
        <div class="question-card" id="qcard-${q.id}">
          <div class="qcard-header">
            <div class="qcard-badges">
              <span class="q-num-badge">Q${q.number}</span>
              <span class="q-domain-badge ${q.domainId}">${q.domain}</span>
              <span class="q-diff-badge ${q.difficulty.toLowerCase()}">${q.difficulty}</span>
              <span class="q-type-badge">${q.type.toUpperCase()}</span>
              <span style="font-size: 12px; color: var(--text-muted); margin-left: 4px;">Part ${q.part}</span>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-outline btn-sm" onclick="app.toggleBookmark(${q.id})" title="Bookmark question">
                ${isBookmarked ? "★ Bookmarked" : "☆ Bookmark"}
              </button>
              <button class="btn btn-outline btn-sm" onclick="app.launchSimulatorSingle(${q.id})" title="Solve in Bluebook simulator">
                ⚡ Simulate
              </button>
            </div>
          </div>

          <div class="qcard-text">${q.question}</div>

          ${optionsHtml}

          <!-- Turkish Question Translation & Vocabulary Drawer -->
          ${this.getQuestionTrHtml(q.id, "bank")}

          <div class="qcard-drawer">
            <button class="drawer-toggle-btn" onclick="app.toggleDrawer('drawer-${q.id}')">
              <span>💡 Reveal Step-by-Step Solution & Desmos Trick</span>
              <span id="drawer-arrow-${q.id}">▼</span>
            </button>
            <div class="drawer-content" id="drawer-${q.id}">
              ${solContent}
            </div>
          </div>
        </div>
      `;
    }).join("");

    this.renderMath();
  },

  resetQFilters() {
    document.getElementById("q-search").value = "";
    document.getElementById("filter-domain").value = "all";
    document.getElementById("filter-type").value = "all";
    document.getElementById("filter-difficulty").value = "all";
    this.setTierFilter("all");
  },

  toggleDrawer(drawerId) {
    const el = document.getElementById(drawerId);
    if (!el) return;
    el.classList.toggle("open");
    const arrow = document.getElementById(drawerId.replace("drawer-", "drawer-arrow-"));
    if (arrow) arrow.textContent = el.classList.contains("open") ? "▲" : "▼";
    this.renderMath();
  },

  toggleBookmark(qId) {
    if (this.userData.bookmarks.has(qId)) {
      this.userData.bookmarks.delete(qId);
    } else {
      this.userData.bookmarks.add(qId);
    }
    this.saveUserData();
    this.renderModule3();
  },

  toggleCardAnswer(qId, letter) {
    const sol = window.SAT_SOLUTIONS.find(s => s.id === qId);
    if (!sol) return;

    // Highlight chosen
    const btn = document.getElementById(`card-opt-${qId}-${letter}`);
    if (letter === sol.correctAnswer) {
      btn.style.backgroundColor = "var(--primary-light)";
      btn.style.borderColor = "var(--primary)";
      this.userData.completedQuestions.add(qId);
    } else {
      btn.style.backgroundColor = "#FEF2F2";
      btn.style.borderColor = "#EF4444";
    }
    this.saveUserData();
    this.updateProgressIndicator();
  },

  checkCardSpr(qId) {
    const input = document.getElementById(`card-spr-${qId}`);
    if (!input) return;
    const sol = window.SAT_SOLUTIONS.find(s => s.id === qId);
    if (!sol) return;

    const val = input.value.trim();
    if (val === sol.correctAnswer || parseFloat(val) === parseFloat(sol.correctAnswer)) {
      input.style.borderColor = "var(--primary)";
      input.style.backgroundColor = "var(--primary-light)";
      this.userData.completedQuestions.add(qId);
    } else {
      input.style.borderColor = "#EF4444";
      input.style.backgroundColor = "#FEF2F2";
    }
    this.saveUserData();
    this.updateProgressIndicator();
  },

  // ========================================================
  // MODULE 4: SOLUTIONS & DESMOS MASTERCLASS CONTROLLER
  // ========================================================
  switchModule4Tab(tabName) {
    this.activeModule4Tab = tabName;
    document.getElementById("tab-btn-keys")?.classList.toggle("active", tabName === "keys");
    document.getElementById("tab-btn-desmos")?.classList.toggle("active", tabName === "desmos");

    const secKeys = document.getElementById("subtab-solutions-key");
    const secDesmos = document.getElementById("subtab-desmos-guide");
    if (secKeys) secKeys.style.display = tabName === "keys" ? "block" : "none";
    if (secDesmos) secDesmos.style.display = tabName === "desmos" ? "block" : "none";

    if (tabName === "keys") this.renderSolutionsList();
    if (tabName === "desmos") this.renderDesmosHacks();
  },

  renderModule4() {
    this.renderSolutionsList();
    this.renderDesmosHacks();
  },

  renderSolutionsList() {
    const container = document.getElementById("solutions-container");
    if (!container || !window.SAT_SOLUTIONS || !window.SAT_QUESTIONS) return;

    const searchTerm = (document.getElementById("solution-search")?.value || "").toLowerCase();
    const solTier = this.solTierFilter || "all";

    const filtered = window.SAT_SOLUTIONS.filter(s => {
      const q = window.SAT_QUESTIONS.find(item => item.id === s.id);
      if (!q) return false;
      const matchesTier = (solTier === "all") || (q.part === solTier);
      const matchesSearch = !searchTerm || 
        `q${s.number}`.includes(searchTerm) ||
        s.algebraicSolution.toLowerCase().includes(searchTerm) ||
        s.desmosShortcut.toLowerCase().includes(searchTerm) ||
        q.question.toLowerCase().includes(searchTerm);
      return matchesTier && matchesSearch;
    });

    container.innerHTML = filtered.map(s => {
      const q = window.SAT_QUESTIONS.find(item => item.id === s.id);
      return `
        <div class="question-card">
          <div class="qcard-header">
            <div class="qcard-badges">
              <span class="q-num-badge">Question ${s.number}</span>
              <span class="q-domain-badge ${q.domainId}">${q.domain}</span>
              <span class="q-diff-badge ${q.difficulty.toLowerCase()}">${q.difficulty}</span>
              <span style="font-size: 13px; font-weight: 700; color: var(--primary-dark); margin-left: 8px;">
                Correct Answer: <span style="background: var(--primary-light); padding: 3px 8px; border-radius: 4px; border: 1px solid var(--primary-subtle);">${s.correctAnswer}</span>
              </span>
            </div>
            <button class="btn btn-outline btn-sm" onclick="app.launchSimulatorSingle(${s.id})">Solve in Simulator</button>
          </div>

          <div style="font-size: 14px; color: var(--text-muted); margin-bottom: 14px; background: var(--surface-alt); padding: 10px 14px; border-radius: var(--radius-sm);">
            ${q.question}
          </div>

          <!-- Turkish Translation & Vocabulary in Solutions -->
          ${this.getQuestionTrHtml(s.id, "sol")}

          <div style="margin-bottom: 14px; font-size: 14px; line-height: 1.6;">
            <strong style="color: var(--text-main); display: block; margin-bottom: 6px;">Worked Step-by-Step Algebraic Proof:</strong>
            <div style="white-space: pre-line; color: var(--text-body);">${s.algebraicSolution}</div>
          </div>

          <div class="desmos-callout">
            <div class="desmos-title">
              <span>⚡</span>
              <span>Desmos 10-15s Calculator Shortcut:</span>
            </div>
            <div style="font-size: 13px; line-height: 1.5;">${s.desmosShortcut}</div>
          </div>
        </div>
      `;
    }).join("");

    this.renderMath();
  },

  renderDesmosHacks() {
    const container = document.getElementById("desmos-hacks-container");
    if (!container || !window.DESMOS_GUIDE) return;

    container.innerHTML = window.DESMOS_GUIDE.hacks.map(h => `
      <div class="hack-card">
        <div class="hack-header">
          <h4 class="hack-title">${h.title}</h4>
          <span class="hack-saved-badge">Saves ${h.timeSaved}</span>
        </div>
        <div class="hack-formula-box">${h.formula}</div>
        <p style="font-size: 13.5px; color: var(--text-body); margin-bottom: 14px;">${h.explanation}</p>
        <div class="hack-example-box">
          <div class="hack-example-label">SAT Example & Desmos Action</div>
          <div style="margin-bottom: 6px;"><strong>Problem:</strong> ${h.example.problem}</div>
          <div style="font-family: var(--font-mono); font-size: 12px; background: rgba(0,0,0,0.04); padding: 6px 10px; border-radius: 4px; margin-bottom: 6px; white-space: pre-line;">${h.example.input}</div>
          <div><strong>Action:</strong> ${h.example.action}</div>
          <div style="margin-top: 4px; color: var(--secondary-dark); font-weight: 700;">Result: ${h.example.result}</div>
        </div>
      </div>
    `).join("");

    this.renderMath();
  },

  // ========================================================
  // VIEW 5: DIGITAL SAT BLUEBOOK SIMULATOR CONTROLLER
  // ========================================================
  launchSimulator(tier) {
    if (!window.SAT_QUESTIONS) return;

    if (tier === "A") {
      this.sim.questions = window.SAT_QUESTIONS.filter(q => q.part === "A");
      document.getElementById("sim-module-name").textContent = "SAT Math: Part A Foundational (50 Questions)";
    } else if (tier === "B") {
      this.sim.questions = window.SAT_QUESTIONS.filter(q => q.part === "B");
      document.getElementById("sim-module-name").textContent = "SAT Math: Part B Adaptive Hard Tier (50 Questions)";
    } else {
      this.sim.questions = window.SAT_QUESTIONS;
      document.getElementById("sim-module-name").textContent = "Digital SAT Math 2026 Master Simulation (100 Questions)";
    }

    this.sim.currentIndex = 0;
    this.sim.answers = {};
    this.sim.struckOptions = {};
    this.sim.flagged = new Set();
    this.sim.timerSeconds = 35 * 60;
    this.startSimTimer();

    this.navigate("simulator");
    this.renderSimQuestion();
  },

  launchSimulatorSingle(qId) {
    const qIndex = window.SAT_QUESTIONS.findIndex(q => q.id === qId);
    if (qIndex === -1) return;

    this.sim.questions = window.SAT_QUESTIONS;
    this.sim.currentIndex = qIndex;
    this.startSimTimer();
    this.navigate("simulator");
    this.renderSimQuestion();
  },

  startSimTimer() {
    if (this.sim.timerInterval) clearInterval(this.sim.timerInterval);
    this.updateTimerDisplay();

    this.sim.timerInterval = setInterval(() => {
      if (this.sim.timerSeconds > 0) {
        this.sim.timerSeconds--;
        this.updateTimerDisplay();
      } else {
        clearInterval(this.sim.timerInterval);
        alert("Time is up! Submitting your test.");
        this.submitSimulator();
      }
    }, 1000);
  },

  updateTimerDisplay() {
    const m = Math.floor(this.sim.timerSeconds / 60);
    const s = this.sim.timerSeconds % 60;
    const txt = document.getElementById("sim-timer-text");
    if (txt) {
      txt.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
  },

  renderSimQuestion() {
    const q = this.sim.questions[this.sim.currentIndex];
    if (!q) return;

    // Update Question Counter
    const counter = document.getElementById("sim-q-counter");
    if (counter) counter.textContent = `Question ${this.sim.currentIndex + 1} of ${this.sim.questions.length}`;

    // Update Flag state
    const flagBtn = document.getElementById("sim-flag-btn");
    const isFlagged = this.sim.flagged.has(q.id);
    if (flagBtn) {
      flagBtn.classList.toggle("active", isFlagged);
      flagBtn.innerHTML = isFlagged ? "<span>🚩</span><span>Flagged</span>" : "<span>⚐</span><span>Flag for Review</span>";
    }

    // Update Turkish Help button active state
    const simTrBtn = document.getElementById("sim-tr-btn");
    if (simTrBtn) simTrBtn.classList.toggle("active", !!this.sim.trHelpOpen);

    // Left Pane (Question Text)
    const qPane = document.getElementById("sim-question-pane");
    if (qPane) {
      const tr = window.SAT_TURKISH_QUESTIONS ? window.SAT_TURKISH_QUESTIONS[q.id] : null;
      qPane.innerHTML = `
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <span class="q-domain-badge ${q.domainId}">${q.domain}</span>
          <span class="q-diff-badge ${q.difficulty.toLowerCase()}">${q.difficulty}</span>
          <span class="q-type-badge">${q.type.toUpperCase()}</span>
        </div>
        <div style="font-size: 16.5px; line-height: 1.8; color: var(--text-main); margin-bottom: 24px;">
          ${q.question}
        </div>

        <!-- Simulator Turkish Help Drawer -->
        <div class="sim-tr-drawer ${this.sim.trHelpOpen ? 'open' : ''}" id="sim-tr-drawer" style="border-radius: var(--radius-md); margin-top: 20px;">
          ${tr ? `
            <div style="font-weight: 800; color: #0284C7; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
              <span>🇹🇷</span><span>Türkçe Soru Çevirisi & Matematiksel Terimler</span>
            </div>
            <div style="margin-bottom: 12px; color: #0F172A; font-size: 15px; line-height: 1.7;">${tr.translation}</div>
            ${tr.vocabulary && tr.vocabulary.length ? `
              <div class="tr-vocab-chips-wrap" style="margin-bottom: 12px;">
                ${tr.vocabulary.map(v => `<span class="tr-vocab-chip"><span class="vocab-en">${v.en}</span><span class="vocab-arrow">➔</span><span class="vocab-tr">${v.tr}</span></span>`).join('')}
              </div>
            ` : ''}
            ${tr.tip ? `<div style="background:#FEF3C7; border-left:3px solid #F59E0B; padding:10px 14px; border-radius:4px; font-size:13px; color:#92400E;"><strong>⚠️ Sınav İpucu:</strong> ${tr.tip}</div>` : ''}
          ` : '<p>Bu soru için Türkçe veri bulunamadı.</p>'}
        </div>
      `;
    }

    // Right Pane (Answer Input)
    const aPane = document.getElementById("sim-answer-pane");
    if (aPane) {
      const selectedAnswer = this.sim.answers[q.id];
      const struckList = this.sim.struckOptions[q.id] || [];

      if (q.type === "mcq" && q.options) {
        const optionsHtml = q.options.map(opt => {
          const isSelected = selectedAnswer === opt.letter;
          const isStruck = struckList.includes(opt.letter);

          return `
            <div class="sim-option-item ${isSelected ? 'selected' : ''} ${isStruck ? 'struck' : ''}" 
                 onclick="app.simSelectOption('${opt.letter}')" id="sim-opt-${opt.letter}">
              <div class="sim-opt-circle">${opt.letter}</div>
              <div style="flex: 1;">$${opt.text}$</div>
              <button class="sim-opt-strike-btn" onclick="event.stopPropagation(); app.simToggleStrike('${opt.letter}')" title="Cross out option">
                ${isStruck ? "✕" : "ABC"}
              </button>
            </div>
          `;
        }).join("");

        aPane.innerHTML = `
          <div class="sim-answer-title">
            <span>Select One Answer</span>
            <span style="font-size: 11px; text-transform: none; color: var(--text-light);">Use 'ABC' to cross out</span>
          </div>
          <div class="sim-options-list">
            ${optionsHtml}
          </div>
          <div class="sim-feedback-box" id="sim-feedback-box"></div>
        `;
      } else {
        // SPR Grid-In
        const currentVal = selectedAnswer || "";
        aPane.innerHTML = `
          <div class="sim-answer-title">
            <span>Student-Produced Response</span>
            <span style="font-size: 11px; text-transform: none; color: var(--text-light);">Fraction or Decimal</span>
          </div>
          <div class="sim-spr-container">
            <input type="text" class="sim-spr-input-box" id="sim-spr-input" value="${currentVal}" 
                   placeholder="Answer..." maxlength="6" oninput="app.simInputSpr(this.value)">
            
            <div class="sim-spr-keypad">
              <button class="keypad-btn" onclick="app.simKeypadAppend('7')">7</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('8')">8</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('9')">9</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('4')">4</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('5')">5</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('6')">6</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('1')">1</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('2')">2</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('3')">3</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('0')">0</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('.')">.</button>
              <button class="keypad-btn" onclick="app.simKeypadAppend('/')">/</button>
              <button class="keypad-btn action-btn" onclick="app.simKeypadAppend('-')">-</button>
              <button class="keypad-btn action-btn" style="grid-column: span 2;" onclick="app.simKeypadBackspace()">⌫ Backspace</button>
            </div>
          </div>
          <div class="sim-feedback-box" id="sim-feedback-box"></div>
        `;
      }
    }

    // Prev / Next button states
    const prevBtn = document.getElementById("sim-prev-btn");
    const nextBtn = document.getElementById("sim-next-btn");
    if (prevBtn) prevBtn.disabled = (this.sim.currentIndex === 0);
    if (nextBtn) {
      if (this.sim.currentIndex === this.sim.questions.length - 1) {
        nextBtn.textContent = "Review & Submit";
        nextBtn.onclick = () => this.openModal("modal-q-grid");
      } else {
        nextBtn.textContent = "Next →";
        nextBtn.onclick = () => this.simNext();
      }
    }

    this.renderMath();
  },

  simSelectOption(letter) {
    const q = this.sim.questions[this.sim.currentIndex];
    this.sim.answers[q.id] = letter;
    this.userData.completedQuestions.add(q.id);
    this.saveUserData();
    this.updateProgressIndicator();
    this.renderSimQuestion();
  },

  simToggleStrike(letter) {
    const q = this.sim.questions[this.sim.currentIndex];
    if (!this.sim.struckOptions[q.id]) this.sim.struckOptions[q.id] = [];
    const list = this.sim.struckOptions[q.id];
    const idx = list.indexOf(letter);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(letter);
    }
    this.renderSimQuestion();
  },

  simInputSpr(val) {
    const q = this.sim.questions[this.sim.currentIndex];
    this.sim.answers[q.id] = val.trim();
    if (val.trim().length > 0) {
      this.userData.completedQuestions.add(q.id);
    }
    this.saveUserData();
    this.updateProgressIndicator();
  },

  simKeypadAppend(char) {
    const input = document.getElementById("sim-spr-input");
    if (!input || input.value.length >= 6) return;
    input.value += char;
    this.simInputSpr(input.value);
  },

  simKeypadBackspace() {
    const input = document.getElementById("sim-spr-input");
    if (!input) return;
    input.value = input.value.slice(0, -1);
    this.simInputSpr(input.value);
  },

  simToggleFlag() {
    const q = this.sim.questions[this.sim.currentIndex];
    if (this.sim.flagged.has(q.id)) {
      this.sim.flagged.delete(q.id);
    } else {
      this.sim.flagged.add(q.id);
    }
    this.renderSimQuestion();
  },

  simPrev() {
    if (this.sim.currentIndex > 0) {
      this.sim.currentIndex--;
      this.renderSimQuestion();
    }
  },

  simNext() {
    if (this.sim.currentIndex < this.sim.questions.length - 1) {
      this.sim.currentIndex++;
      this.renderSimQuestion();
    }
  },

  simCheckCurrentAnswer() {
    const q = this.sim.questions[this.sim.currentIndex];
    const sol = window.SAT_SOLUTIONS.find(s => s.id === q.id);
    const userAns = (this.sim.answers[q.id] || "").trim();
    const box = document.getElementById("sim-feedback-box");
    if (!box || !sol) return;

    const isCorrect = (q.type === "mcq") 
      ? (userAns === sol.correctAnswer)
      : (userAns === sol.correctAnswer || Math.abs(parseFloat(userAns) - parseFloat(sol.correctAnswer)) < 0.01);

    box.className = `sim-feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
    box.innerHTML = `
      <div style="font-weight: 800; font-size: 15px; margin-bottom: 6px;">
        ${isCorrect ? "✓ Correct!" : "✗ Incorrect"}
      </div>
      <div style="margin-bottom: 6px;">
        <strong>Correct Answer:</strong> ${sol.correctAnswer}
      </div>
      <div style="font-size: 12.5px; margin-bottom: 8px;">
        <strong>Worked Solution:</strong>
        <div style="white-space: pre-line; margin-top: 4px;">${sol.algebraicSolution}</div>
      </div>
      <div style="font-size: 12px; background: rgba(0,0,0,0.05); padding: 8px; border-radius: 4px;">
        <strong>⚡ Desmos Trick:</strong> ${sol.desmosShortcut}
      </div>
    `;

    this.renderMath();
  },

  renderSimGridModal() {
    const container = document.getElementById("sim-q-grid");
    if (!container || !this.sim.questions) return;

    container.innerHTML = this.sim.questions.map((q, idx) => {
      const isCurrent = idx === this.sim.currentIndex;
      const isAnswered = !!this.sim.answers[q.id];
      const isFlagged = this.sim.flagged.has(q.id);

      return `
        <button class="q-grid-btn ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''} ${isFlagged ? 'flagged' : ''}" 
                onclick="app.simJumpTo(${idx})">
          ${idx + 1}
        </button>
      `;
    }).join("");
  },

  simJumpTo(index) {
    this.sim.currentIndex = index;
    this.closeModal("modal-q-grid");
    this.renderSimQuestion();
  },

  submitSimulator() {
    if (this.sim.timerInterval) clearInterval(this.sim.timerInterval);
    this.closeModal("modal-q-grid");

    let correctCount = 0;
    const domainScores = {};

    this.sim.questions.forEach(q => {
      const sol = window.SAT_SOLUTIONS.find(s => s.id === q.id);
      const userAns = (this.sim.answers[q.id] || "").trim();
      const isCorrect = (q.type === "mcq") 
        ? (userAns === sol?.correctAnswer)
        : (userAns === sol?.correctAnswer || Math.abs(parseFloat(userAns) - parseFloat(sol?.correctAnswer)) < 0.01);

      if (!domainScores[q.domain]) domainScores[q.domain] = { total: 0, correct: 0 };
      domainScores[q.domain].total++;

      if (isCorrect) {
        correctCount++;
        domainScores[q.domain].correct++;
      }
    });

    const total = this.sim.questions.length;
    const scorePct = Math.round((correctCount / total) * 100);
    // SAT Math scaled score estimate (200-800)
    const scaledScore = 200 + Math.round((scorePct / 100) * 600);

    const breakdownHtml = Object.keys(domainScores).map(d => {
      const s = domainScores[d];
      const pct = Math.round((s.correct / s.total) * 100);
      return `
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 13.5px;">
          <span><strong>${d}:</strong> ${s.correct} / ${s.total}</span>
          <span style="font-weight: 700; color: var(--primary-dark);">${pct}%</span>
        </div>
      `;
    }).join("");

    alert(`🎉 Practice Test Complete!\n\nScaled Score Estimate: ${scaledScore} / 800\nAccuracy: ${correctCount} / ${total} (${scorePct}%)\n\nReview solutions in Module 4!`);
    this.navigate("module-4");
  },

  // ========================================================
  // FLOATING NOTE-TAKING WINDOW (LEFT SIDE UNDER BUTTON)
  // ========================================================
  notesState: {
    isOpen: false,
    content: "",
    saveTimeout: null,
    activeTab: "text" // "text" | "draw"
  },

  drawState: {
    tool: "pen", // "pen" | "highlighter" | "eraser"
    color: "#0F172A",
    size: 2,
    isDrawing: false,
    hasGrid: true,
    undoStack: [],
    redoStack: [],
    maxHistory: 25,
    canvasInitialized: false,
    hasDrawing: false,
    canvas: null,
    ctx: null,
    lastX: 0,
    lastY: 0,
    saveTimeout: null
  },

  toggleNotesWindow() {
    this.notesState.isOpen = !this.notesState.isOpen;
    const win = document.getElementById("floating-notes-window");
    const btn = document.getElementById("floating-notes-toggle");
    if (win) win.classList.toggle("open", this.notesState.isOpen);
    if (btn) btn.classList.toggle("active", this.notesState.isOpen);
    if (this.notesState.isOpen) {
      if (this.notesState.activeTab === "text") {
        const textarea = document.getElementById("floating-notes-textarea");
        if (textarea) textarea.focus();
      } else if (this.notesState.activeTab === "draw") {
        requestAnimationFrame(() => {
          if (!this.drawState.canvasInitialized) {
            this.initDrawingCanvas();
          } else {
            this.setupCanvasResolution();
          }
        });
      }
    }
  },

  // Switch between "text" and "draw" modes
  switchNotesMode(mode) {
    this.notesState.activeTab = mode;

    const tabText = document.getElementById("tab-notes-text");
    const tabDraw = document.getElementById("tab-notes-draw");
    const paneText = document.getElementById("notes-pane-text");
    const paneDraw = document.getElementById("notes-pane-draw");

    if (mode === "text") {
      if (tabText) tabText.classList.add("active");
      if (tabDraw) tabDraw.classList.remove("active");
      if (paneText) paneText.style.display = "flex";
      if (paneDraw) paneDraw.style.display = "none";
      const textarea = document.getElementById("floating-notes-textarea");
      if (textarea) textarea.focus();
    } else {
      if (tabText) tabText.classList.remove("active");
      if (tabDraw) tabDraw.classList.add("active");
      if (paneText) paneText.style.display = "none";
      if (paneDraw) paneDraw.style.display = "flex";

      requestAnimationFrame(() => {
        if (!this.drawState.canvasInitialized) {
          this.initDrawingCanvas();
        } else {
          this.setupCanvasResolution();
        }
      });
    }
  },

  loadNotes() {
    try {
      const saved = localStorage.getItem("sat_study_notes");
      if (saved !== null) {
        this.notesState.content = saved;
        const textarea = document.getElementById("floating-notes-textarea");
        if (textarea) textarea.value = saved;
        this.updateNotesStats();
      }
    } catch (e) {
      console.warn("Could not load study notes", e);
    }
  },

  onNotesInput() {
    const textarea = document.getElementById("floating-notes-textarea");
    if (!textarea) return;
    this.notesState.content = textarea.value;
    this.updateNotesStats();

    // Debounced autosave
    const statusEl = document.getElementById("notes-save-status");
    if (statusEl) statusEl.innerHTML = `<span style="color:#d97706;">⏳ Saving...</span>`;

    if (this.notesState.saveTimeout) clearTimeout(this.notesState.saveTimeout);
    this.notesState.saveTimeout = setTimeout(() => {
      try {
        localStorage.setItem("sat_study_notes", this.notesState.content);
        if (statusEl) statusEl.innerHTML = `<span style="color:var(--primary-dark);">✓ Saved</span>`;
      } catch (e) {
        if (statusEl) statusEl.innerHTML = `<span style="color:#dc2626;">✕ Save error</span>`;
      }
    }, 400);
  },

  updateNotesStats() {
    const text = this.notesState.content || "";
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;

    const statsEl = document.getElementById("notes-word-count");
    if (statsEl) statsEl.textContent = `${words} ${words === 1 ? 'word' : 'words'} • ${chars} chars`;

    const badge = document.getElementById("notes-count-badge");
    if (badge) {
      badge.textContent = words > 0 ? `${words}w` : "0";
    }

    const sideBadge = document.getElementById("sidebar-notes-badge");
    if (sideBadge) {
      sideBadge.textContent = words > 0 ? `${words}w` : "Notes";
    }
  },

  insertNoteTemplate(templateType) {
    const textarea = document.getElementById("floating-notes-textarea");
    if (!textarea) return;

    let template = "";
    const timestamp = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

    switch (templateType) {
      case "formula":
        template = `\n\n📌 [Formula Trap: Insert Name] (${timestamp})\n- Formula: \n- Common SAT Trap: \n- Desmos Shortcut: \n`;
        break;
      case "desmos":
        template = `\n\n⚡ [Desmos Hack: Insert Type] (${timestamp})\n- Command / Syntax: \n- When to use: \n- Steps: \n`;
        break;
      case "question":
        template = `\n\n📝 [Question Review: Q#] (${timestamp})\n- Concept Tested: \n- Why I struggled: \n- Correct Takeaway: \n`;
        break;
      case "checklist":
        template = `\n\n🎯 [Study Strategy Goal] (${timestamp})\n[ ] Review Module 1 formulas\n[ ] Practice 10 Hard Tier SPRs\n[ ] Master Desmos regression (~)\n`;
        break;
      case "blank":
        template = `\n\n----------------------------------------\n[Notes - ${timestamp}]\n`;
        break;
    }

    const startPos = textarea.selectionStart || textarea.value.length;
    const endPos = textarea.selectionEnd || textarea.value.length;
    const currentVal = textarea.value;

    textarea.value = currentVal.substring(0, startPos) + template + currentVal.substring(endPos);
    textarea.selectionStart = textarea.selectionEnd = startPos + template.length;
    textarea.focus();
    this.onNotesInput();
  },

  clearNotes() {
    if (!this.notesState.content.trim()) return;
    if (confirm("Are you sure you want to clear your study notes? This action cannot be undone.")) {
      this.notesState.content = "";
      const textarea = document.getElementById("floating-notes-textarea");
      if (textarea) textarea.value = "";
      localStorage.removeItem("sat_study_notes");
      this.updateNotesStats();
      const statusEl = document.getElementById("notes-save-status");
      if (statusEl) statusEl.innerHTML = `<span style="color:var(--text-muted);">Cleared</span>`;
    }
  },

  // ========================================================
  // PEN DRAWING & MATH SCRATCHPAD CONTROLLERS
  // ========================================================
  loadDrawing() {
    try {
      const saved = localStorage.getItem("sat_study_drawing");
      if (saved) {
        this.drawState.hasDrawing = true;
        const dot = document.getElementById("draw-has-content-dot");
        if (dot) dot.style.display = "inline-block";
      }
    } catch (e) {
      console.warn("Could not inspect saved drawing", e);
    }
  },

  initDrawingCanvas() {
    const canvas = document.getElementById("notes-drawing-canvas");
    const wrap = document.getElementById("drawing-canvas-wrap");
    if (!canvas || !wrap) return;

    this.setupCanvasResolution();
    this.drawState.canvasInitialized = true;

    // Restore saved drawing if available
    const saved = localStorage.getItem("sat_study_drawing");
    if (saved) {
      this.restoreCanvasFromDataUrl(saved, () => {
        this.drawState.undoStack = [saved];
        this.drawState.redoStack = [];
        this.updateDrawingUI();
      });
    } else {
      this.drawState.undoStack = [canvas.toDataURL()];
      this.drawState.redoStack = [];
      this.updateDrawingUI();
    }

    // Pointer Event Listeners for Touch, Stylus, and Mouse
    const onPointerDown = (e) => {
      e.preventDefault();
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
      this.drawState.isDrawing = true;

      const pt = this.getCanvasPoint(e, canvas);
      this.drawState.lastX = pt.x;
      this.drawState.lastY = pt.y;

      const ctx = this.drawState.ctx;
      if (!ctx) return;

      ctx.save();
      this.applyBrushSettings(ctx);

      // Draw single dot on tap/click
      const dotRadius = this.drawState.tool === 'eraser' 
        ? Math.max(this.drawState.size * 2, 8) 
        : (this.drawState.tool === 'highlighter' ? Math.max(this.drawState.size * 1.5, 7) : Math.max(this.drawState.size / 2, 1));

      ctx.beginPath();
      ctx.arc(pt.x, pt.y, dotRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const onPointerMove = (e) => {
      if (!this.drawState.isDrawing) return;
      e.preventDefault();

      const pt = this.getCanvasPoint(e, canvas);
      const ctx = this.drawState.ctx;
      if (!ctx) return;

      ctx.save();
      this.applyBrushSettings(ctx);

      ctx.beginPath();
      ctx.moveTo(this.drawState.lastX, this.drawState.lastY);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
      ctx.restore();

      this.drawState.lastX = pt.x;
      this.drawState.lastY = pt.y;
    };

    const onPointerUp = (e) => {
      if (!this.drawState.isDrawing) return;
      this.drawState.isDrawing = false;
      try { canvas.releasePointerCapture(e.pointerId); } catch (_) {}

      this.pushDrawSnapshot();
      this.saveDrawingDebounced();
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
  },

  setupCanvasResolution() {
    const canvas = document.getElementById("notes-drawing-canvas");
    const wrap = document.getElementById("drawing-canvas-wrap");
    if (!canvas || !wrap) return;

    const dpr = window.devicePixelRatio || 1;
    const width = wrap.clientWidth || 510;
    const height = wrap.clientHeight || 310;

    const targetWidth = Math.floor(width * dpr);
    const targetHeight = Math.floor(height * dpr);

    if (canvas.width === targetWidth && canvas.height === targetHeight && this.drawState.ctx) {
      return;
    }

    let backupData = null;
    if (canvas.width > 0 && canvas.height > 0) {
      try {
        backupData = canvas.toDataURL();
      } catch (_) {}
    }

    canvas.width = targetWidth;
    canvas.height = targetHeight;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    this.drawState.ctx = ctx;
    this.drawState.canvas = canvas;

    if (backupData) {
      this.restoreCanvasFromDataUrl(backupData);
    }
  },

  getCanvasPoint(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  },

  applyBrushSettings(ctx) {
    const { tool, color, size } = this.drawState;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = Math.max(size * 4, 16);
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.fillStyle = "rgba(0,0,0,1)";
    } else if (tool === "highlighter") {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = Math.max(size * 3.5, 14);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
    } else {
      // Pen (Smooth freehand ink)
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1.0;
      ctx.lineWidth = size;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
    }
  },

  setDrawTool(tool) {
    this.drawState.tool = tool;
    document.querySelectorAll(".draw-tool-group .draw-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`draw-tool-${tool}`);
    if (activeBtn) activeBtn.classList.add("active");
  },

  setDrawColor(color) {
    this.drawState.color = color;
    if (this.drawState.tool === "eraser") {
      this.setDrawTool("pen");
    }
    document.querySelectorAll("#draw-color-palette .draw-swatch").forEach(swatch => {
      const swatchColor = swatch.getAttribute("onclick") || "";
      if (swatchColor.includes(color)) {
        swatch.classList.add("active");
      } else {
        swatch.classList.remove("active");
      }
    });
  },

  setDrawSize(size) {
    this.drawState.size = size;
    document.querySelectorAll(".draw-size-group .draw-size-btn").forEach(btn => btn.classList.remove("active"));
    const sizeMap = { 2: "fine", 4: "med", 8: "thick" };
    const activeBtn = document.getElementById(`draw-size-${sizeMap[size] || 'fine'}`);
    if (activeBtn) activeBtn.classList.add("active");
  },

  toggleDrawGrid() {
    this.drawState.hasGrid = !this.drawState.hasGrid;
    const wrap = document.getElementById("drawing-canvas-wrap");
    const gridBtn = document.getElementById("draw-btn-grid");
    if (wrap) wrap.classList.toggle("with-grid", this.drawState.hasGrid);
    if (gridBtn) gridBtn.classList.toggle("active", this.drawState.hasGrid);
  },

  pushDrawSnapshot() {
    const canvas = document.getElementById("notes-drawing-canvas");
    if (!canvas) return;

    try {
      const dataUrl = canvas.toDataURL();
      this.drawState.undoStack.push(dataUrl);
      if (this.drawState.undoStack.length > this.drawState.maxHistory) {
        this.drawState.undoStack.shift();
      }
      this.drawState.redoStack = [];
      this.drawState.hasDrawing = true;
      this.updateDrawingUI();
    } catch (e) {
      console.warn("Could not snapshot canvas", e);
    }
  },

  undoDraw() {
    if (this.drawState.undoStack.length <= 1) return;
    const current = this.drawState.undoStack.pop();
    this.drawState.redoStack.push(current);

    const prev = this.drawState.undoStack[this.drawState.undoStack.length - 1];
    this.restoreCanvasFromDataUrl(prev, () => {
      this.saveDrawingDebounced();
      this.updateDrawingUI();
    });
  },

  redoDraw() {
    if (this.drawState.redoStack.length === 0) return;
    const next = this.drawState.redoStack.pop();
    this.drawState.undoStack.push(next);
    this.restoreCanvasFromDataUrl(next, () => {
      this.saveDrawingDebounced();
      this.updateDrawingUI();
    });
  },

  restoreCanvasFromDataUrl(dataUrl, callback) {
    const canvas = document.getElementById("notes-drawing-canvas");
    const wrap = document.getElementById("drawing-canvas-wrap");
    if (!canvas || !wrap || !this.drawState.ctx) return;

    const ctx = this.drawState.ctx;
    const width = wrap.clientWidth || 510;
    const height = wrap.clientHeight || 310;

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    if (!dataUrl) {
      if (callback) callback();
      return;
    }

    const img = new Image();
    img.onload = () => {
      ctx.save();
      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();
      if (callback) callback();
    };
    img.src = dataUrl;
  },

  updateDrawingUI() {
    const undoBtn = document.getElementById("draw-btn-undo");
    const redoBtn = document.getElementById("draw-btn-redo");
    const undoInfo = document.getElementById("drawing-undo-info");
    const dot = document.getElementById("draw-has-content-dot");

    const strokes = Math.max(0, this.drawState.undoStack.length - 1);

    if (undoBtn) {
      undoBtn.style.opacity = strokes > 0 ? "1" : "0.45";
      undoBtn.style.pointerEvents = strokes > 0 ? "auto" : "none";
    }
    if (redoBtn) {
      const canRedo = this.drawState.redoStack.length > 0;
      redoBtn.style.opacity = canRedo ? "1" : "0.45";
      redoBtn.style.pointerEvents = canRedo ? "auto" : "none";
    }
    if (undoInfo) {
      undoInfo.textContent = `${strokes} ${strokes === 1 ? 'stroke' : 'strokes'}`;
    }
    if (dot) {
      dot.style.display = strokes > 0 ? "inline-block" : "none";
    }
  },

  clearDrawing() {
    const strokes = Math.max(0, this.drawState.undoStack.length - 1);
    if (strokes === 0 && !this.drawState.hasDrawing) return;

    if (confirm("Clear math scratchpad drawing? This cannot be undone.")) {
      const canvas = document.getElementById("notes-drawing-canvas");
      if (!canvas || !this.drawState.ctx) return;

      const ctx = this.drawState.ctx;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      this.drawState.undoStack = [canvas.toDataURL()];
      this.drawState.redoStack = [];
      this.drawState.hasDrawing = false;
      localStorage.removeItem("sat_study_drawing");
      this.updateDrawingUI();

      const statusEl = document.getElementById("notes-save-status");
      if (statusEl) statusEl.innerHTML = `<span style="color:var(--text-muted);">Scratchpad cleared</span>`;
    }
  },

  clearCurrentNotesTab() {
    if (this.notesState.activeTab === "draw") {
      this.clearDrawing();
    } else {
      this.clearNotes();
    }
  },

  saveDrawingDebounced() {
    const statusEl = document.getElementById("notes-save-status");
    if (statusEl) statusEl.innerHTML = `<span style="color:#d97706;">⏳ Saving...</span>`;

    if (this.drawState.saveTimeout) clearTimeout(this.drawState.saveTimeout);
    this.drawState.saveTimeout = setTimeout(() => {
      try {
        const canvas = document.getElementById("notes-drawing-canvas");
        if (canvas) {
          const dataUrl = canvas.toDataURL("image/png");
          localStorage.setItem("sat_study_drawing", dataUrl);
          if (statusEl) statusEl.innerHTML = `<span style="color:var(--primary-dark);">✓ Saved</span>`;
        }
      } catch (e) {
        console.warn("Could not save drawing locally", e);
        if (statusEl) statusEl.innerHTML = `<span style="color:#dc2626;">✕ Save error</span>`;
      }
    }, 450);
  },

  exportDrawing() {
    const canvas = document.getElementById("notes-drawing-canvas");
    if (!canvas) return;

    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;
    const expCtx = exportCanvas.getContext("2d");

    // Pure white background
    expCtx.fillStyle = "#FFFFFF";
    expCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // Grid lines if graph grid is enabled
    if (this.drawState.hasGrid) {
      const dpr = window.devicePixelRatio || 1;
      const step = 20 * dpr;
      expCtx.strokeStyle = "rgba(15, 23, 42, 0.07)";
      expCtx.lineWidth = 1 * dpr;
      for (let x = 0; x <= exportCanvas.width; x += step) {
        expCtx.beginPath();
        expCtx.moveTo(x, 0);
        expCtx.lineTo(x, exportCanvas.height);
        expCtx.stroke();
      }
      for (let y = 0; y <= exportCanvas.height; y += step) {
        expCtx.beginPath();
        expCtx.moveTo(0, y);
        expCtx.lineTo(exportCanvas.width, y);
        expCtx.stroke();
      }
    }

    // Draw user ink
    expCtx.drawImage(canvas, 0, 0);

    const a = document.createElement("a");
    a.download = `SAT_Math_2026_Scratchpad_${new Date().toISOString().slice(0, 10)}.png`;
    a.href = exportCanvas.toDataURL("image/png");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  exportNotes() {
    if (this.notesState.activeTab === "draw") {
      this.exportDrawing();
    } else {
      const text = this.notesState.content || "";
      if (!text.trim()) {
        alert("Your study notes are currently empty!");
        return;
      }
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `SAT_Math_2026_Study_Notes_${new Date().toISOString().slice(0, 10)}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  },

  // ========================================================
  // TURKISH LOCALIZATION & INTERNATIONAL STUDENT CONTROLLERS
  // ========================================================
  toggleSectionTr(secId) {
    const drawer = document.getElementById(`drawer-tr-${secId}`);
    const btn = document.getElementById(`btn-tr-${secId}`);
    if (!drawer || !btn) return;

    const isOpen = drawer.classList.toggle("open");
    btn.classList.toggle("active", isOpen);
    if (isOpen) {
      this.renderMath();
    }
  },

  renderSectionTrDrawers() {
    if (!window.SAT_TURKISH_SECTIONS) return;

    // Dashboard Drawer
    const dDash = document.getElementById("drawer-tr-dashboard");
    if (dDash && window.SAT_TURKISH_SECTIONS.dashboard) {
      const data = window.SAT_TURKISH_SECTIONS.dashboard;
      dDash.innerHTML = `
        <div class="tr-drawer-header">
          <span class="tr-drawer-badge">${data.badge}</span>
          <div class="tr-drawer-title">${data.title}</div>
          <div class="tr-drawer-subtitle">${data.subtitle}</div>
        </div>
        <div class="tr-drawer-desc">${data.description}</div>
        <div class="tr-keypoints-grid">
          ${data.keyPoints.map(kp => `
            <div class="tr-point-card">
              <div class="tr-point-title"><span>📌</span><span>${kp.title}</span></div>
              <div class="tr-point-text">${kp.text}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Module 1 Drawer (Formulas & Terms)
    const dMod1 = document.getElementById("drawer-tr-module-1");
    if (dMod1 && window.SAT_TURKISH_SECTIONS.module1) {
      const data = window.SAT_TURKISH_SECTIONS.module1;
      dMod1.innerHTML = `
        <div class="tr-drawer-header">
          <span class="tr-drawer-badge">${data.badge}</span>
          <div class="tr-drawer-title">${data.title}</div>
          <div class="tr-drawer-subtitle">${data.subtitle}</div>
        </div>
        <div class="tr-drawer-desc">${data.description}</div>
        <h4 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">En Sık Karşılaşılan Formül Terimleri:</h4>
        <div class="tr-keypoints-grid">
          ${data.terminology.map(item => `
            <div class="tr-point-card">
              <div class="tr-point-title" style="color: var(--primary-dark);">
                <span>📐</span><span>${item.en}</span>
              </div>
              <div style="font-weight: 700; font-size: 14px; color: #0F172A; margin-bottom: 4px;">${item.tr}</div>
              <div class="tr-point-text" style="color: var(--text-muted); font-size: 12.5px;">${item.note}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Module 2 Drawer (Topics & Roadmaps)
    const dMod2 = document.getElementById("drawer-tr-module-2");
    if (dMod2 && window.SAT_TURKISH_SECTIONS.module2) {
      const data = window.SAT_TURKISH_SECTIONS.module2;
      dMod2.innerHTML = `
        <div class="tr-drawer-header">
          <span class="tr-drawer-badge">${data.badge}</span>
          <div class="tr-drawer-title">${data.title}</div>
          <div class="tr-drawer-subtitle">${data.subtitle}</div>
        </div>
        <div class="tr-drawer-desc">${data.description}</div>
        <h4 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">4 Ana Alan Dağılımı ve Kritik Odak Noktaları:</h4>
        <div class="tr-keypoints-grid">
          ${data.domains.map(dom => `
            <div class="tr-point-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-weight: 700; font-size: 14px; color: var(--primary-dark);">${dom.name}</span>
                <span style="background: var(--primary-light); color: var(--primary-dark); font-weight: 800; font-size: 11.5px; padding: 2px 8px; border-radius: 12px;">${dom.weight}</span>
              </div>
              <div class="tr-point-text">${dom.focus}</div>
            </div>
          `).join('')}
        </div>
        <h4 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin: 20px 0 12px;">Hedef Puan Stratejileri:</h4>
        <div class="tr-keypoints-grid">
          ${data.roadmaps.map(rm => `
            <div class="tr-point-card" style="border-left: 4px solid var(--accent);">
              <div class="tr-point-title" style="color: var(--accent-dark);"><span>🎯</span><span>${rm.target}</span></div>
              <div class="tr-point-text">${rm.desc}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Module 3 Drawer (Question Bank & SPR Rules)
    const dMod3 = document.getElementById("drawer-tr-module-3");
    if (dMod3 && window.SAT_TURKISH_SECTIONS.module3) {
      const data = window.SAT_TURKISH_SECTIONS.module3;
      dMod3.innerHTML = `
        <div class="tr-drawer-header">
          <span class="tr-drawer-badge">${data.badge}</span>
          <div class="tr-drawer-title">${data.title}</div>
          <div class="tr-drawer-subtitle">${data.subtitle}</div>
        </div>
        <div class="tr-drawer-desc">${data.description}</div>
        <h4 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">SPR (Student-Produced Response) Giriş Kuralları:</h4>
        <div style="display: grid; gap: 10px;">
          ${data.sprRules.map((rule, idx) => `
            <div style="background: white; border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px 16px; font-size: 13.5px; line-height: 1.6; display: flex; gap: 10px; align-items: flex-start;">
              <span style="font-weight: 800; color: var(--primary-dark);">${idx + 1}.</span>
              <span>${rule}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Module 4 Drawer (Solutions & Desmos Hacks)
    const dMod4 = document.getElementById("drawer-tr-module-4");
    if (dMod4 && window.SAT_TURKISH_SECTIONS.module4) {
      const data = window.SAT_TURKISH_SECTIONS.module4;
      dMod4.innerHTML = `
        <div class="tr-drawer-header">
          <span class="tr-drawer-badge">${data.badge}</span>
          <div class="tr-drawer-title">${data.title}</div>
          <div class="tr-drawer-subtitle">${data.subtitle}</div>
        </div>
        <div class="tr-drawer-desc">${data.description}</div>
        <h4 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">Sınavda Zaman Kazandıran Desmos Taktikleri Özeti:</h4>
        <div class="tr-keypoints-grid">
          ${data.hacksSummary.map(hack => `
            <div class="tr-point-card" style="border-left: 4px solid var(--primary);">
              <div class="tr-point-text" style="font-weight: 500; color: var(--text-main);">${hack}</div>
            </div>
          `).join('')}
        </div>
      `;
    }
  },

  getQuestionTrHtml(qId, prefix = "bank") {
    const tr = window.SAT_TURKISH_QUESTIONS ? window.SAT_TURKISH_QUESTIONS[qId] : null;
    if (!tr) return "";

    const vocabHtml = tr.vocabulary && tr.vocabulary.length ? `
      <div class="tr-q-vocab-box">
        <div class="tr-vocab-label">
          <span>📖</span>
          <span>Önemli Matematiksel Terimler (İngilizce ➔ Türkçe)</span>
        </div>
        <div class="tr-vocab-chips-wrap">
          ${tr.vocabulary.map(v => `
            <div class="tr-vocab-chip">
              <span class="vocab-en">${v.en}</span>
              <span class="vocab-arrow">➔</span>
              <span class="vocab-tr">${v.tr}</span>
            </div>
          `).join("")}
        </div>
      </div>
    ` : "";

    const tipHtml = tr.tip ? `
      <div class="tr-q-tip-box">
        <div class="tr-tip-label">
          <span>⚠️</span>
          <span>Sınav Stratejisi & College Board Tuzağı</span>
        </div>
        <div>${tr.tip}</div>
      </div>
    ` : "";

    const drawerId = `drawer-tr-${prefix}-${qId}`;
    const btnId = `btn-tr-${prefix}-${qId}`;
    const arrowId = `arrow-tr-${prefix}-${qId}`;

    return `
      <div class="qcard-tr-drawer">
        <button class="tr-q-toggle-btn" onclick="app.toggleTrQuestion('${drawerId}', '${btnId}', '${arrowId}')" id="${btnId}">
          <span>🇹🇷</span>
          <span>Türkçe Çeviri & Terimler</span>
          <span class="tr-q-arrow" id="${arrowId}">▼</span>
        </button>
        <div class="tr-q-content" id="${drawerId}">
          <div class="tr-q-text-box">
            <div class="tr-q-label">
              <span>🇹🇷</span>
              <span>Türkçe Soru Çevirisi</span>
            </div>
            <div class="tr-q-translation">${tr.translation}</div>
          </div>
          ${vocabHtml}
          ${tipHtml}
        </div>
      </div>
    `;
  },

  getSubtopicTrHtml(stName, uniqueId) {
    const tr = window.SAT_TURKISH_SUBTOPICS ? window.SAT_TURKISH_SUBTOPICS[stName] : null;
    if (!tr) return "";

    const vocabHtml = tr.vocabulary && tr.vocabulary.length ? `
      <div class="tr-q-vocab-box" style="margin-top: 12px;">
        <div class="tr-vocab-label">
          <span>📖</span>
          <span>Önemli Matematiksel Terimler (İngilizce ➔ Türkçe)</span>
        </div>
        <div class="tr-vocab-chips-wrap">
          ${tr.vocabulary.map(v => `
            <div class="tr-vocab-chip">
              <span class="vocab-en">${v.en}</span>
              <span class="vocab-arrow">➔</span>
              <span class="vocab-tr">${v.tr}</span>
            </div>
          `).join("")}
        </div>
      </div>
    ` : "";

    const tipHtml = tr.tip ? `
      <div class="tr-q-tip-box" style="margin-top: 12px;">
        <div class="tr-tip-label">
          <span>⚠️</span>
          <span>Sınav Stratejisi & College Board Tuzağı</span>
        </div>
        <div>${tr.tip}</div>
      </div>
    ` : "";

    const desmosHtml = tr.desmosTip ? `
      <div class="desmos-callout" style="margin-top: 12px;">
        <div class="desmos-title">
          <span>⚡</span>
          <span>Desmos Çözüm & Doğrulama İpucu</span>
        </div>
        <div style="font-size: 13px; line-height: 1.5;">${tr.desmosTip}</div>
      </div>
    ` : "";

    const drawerId = `drawer-tr-${uniqueId}`;
    const btnId = `btn-tr-${uniqueId}`;
    const arrowId = `arrow-tr-${uniqueId}`;

    return `
      <div class="subtopic-tr-drawer" style="margin-top: 14px; border-top: 1px dashed var(--border-light); padding-top: 12px;">
        <button class="tr-q-toggle-btn" onclick="app.toggleTrSubtopic('${drawerId}', '${btnId}', '${arrowId}')" id="${btnId}">
          <span>🇹🇷</span>
          <span>Türkçe Açıklama & Terimler</span>
          <span class="tr-q-arrow" id="${arrowId}">▼</span>
        </button>
        <div class="tr-q-content" id="${drawerId}">
          <div class="tr-q-text-box">
            <div class="tr-q-label">
              <span>🇹🇷</span>
              <span>${tr.title}</span>
            </div>
            <div class="tr-q-translation" style="margin-bottom: 10px;">${tr.description}</div>
            <div style="font-size: 13.5px; line-height: 1.6; color: var(--primary-dark); background: var(--surface-alt); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--primary);">
              <strong>Temel İlke (Core Principle):</strong> ${tr.corePrinciple}
            </div>
          </div>
          ${vocabHtml}
          ${tipHtml}
          ${desmosHtml}
        </div>
      </div>
    `;
  },

  getFormulaTrHtml(fId) {
    const tr = window.SAT_TURKISH_FORMULAS ? window.SAT_TURKISH_FORMULAS[fId] : null;
    if (!tr) return "";

    const vocabHtml = tr.vocabulary && tr.vocabulary.length ? `
      <div class="tr-q-vocab-box" style="margin-top: 12px;">
        <div class="tr-vocab-label">
          <span>📖</span>
          <span>Önemli Matematiksel Terimler (İngilizce ➔ Türkçe)</span>
        </div>
        <div class="tr-vocab-chips-wrap">
          ${tr.vocabulary.map(v => `
            <div class="tr-vocab-chip">
              <span class="vocab-en">${v.en}</span>
              <span class="vocab-arrow">➔</span>
              <span class="vocab-tr">${v.tr}</span>
            </div>
          `).join("")}
        </div>
      </div>
    ` : "";

    const trapsHtml = tr.traps ? `
      <div class="tr-q-tip-box" style="margin-top: 12px;">
        <div class="tr-tip-label">
          <span>⚠️</span>
          <span>Türkçe Sınav Tuzağı & Dikkat Edilecek Noktalar</span>
        </div>
        <div>${tr.traps}</div>
      </div>
    ` : "";

    const desmosHtml = tr.desmosTip ? `
      <div class="desmos-callout" style="margin-top: 12px;">
        <div class="desmos-title">
          <span>⚡</span>
          <span>Desmos İpucu (Türkçe)</span>
        </div>
        <div style="font-size: 13px; line-height: 1.5;">${tr.desmosTip}</div>
      </div>
    ` : "";

    const drawerId = `drawer-tr-formula-${fId}`;
    const btnId = `btn-tr-formula-${fId}`;
    const arrowId = `arrow-tr-formula-${fId}`;

    return `
      <div class="formula-tr-drawer" style="margin-top: 16px; border-top: 1px dashed var(--border-light); padding-top: 12px;">
        <button class="tr-q-toggle-btn" onclick="app.toggleTrFormula('${drawerId}', '${btnId}', '${arrowId}')" id="${btnId}">
          <span>🇹🇷</span>
          <span>Türkçe Açıklama & Terimler</span>
          <span class="tr-q-arrow" id="${arrowId}">▼</span>
        </button>
        <div class="tr-q-content" id="${drawerId}">
          <div class="tr-q-text-box">
            <div class="tr-q-label">
              <span>🇹🇷</span>
              <span>${tr.title}</span>
            </div>
            <div class="tr-q-translation">${tr.explanation}</div>
          </div>
          ${vocabHtml}
          ${trapsHtml}
          ${desmosHtml}
        </div>
      </div>
    `;
  },

  toggleTrSubtopic(drawerId, btnId, arrowId) {
    const drawer = document.getElementById(drawerId);
    const btn = document.getElementById(btnId);
    if (!drawer || !btn) return;

    const isOpen = drawer.classList.toggle("open");
    btn.classList.toggle("active", isOpen);
    if (isOpen) {
      this.renderMath();
    }
  },

  toggleTrFormula(drawerId, btnId, arrowId) {
    const drawer = document.getElementById(drawerId);
    const btn = document.getElementById(btnId);
    if (!drawer || !btn) return;

    const isOpen = drawer.classList.toggle("open");
    btn.classList.toggle("active", isOpen);
    if (isOpen) {
      this.renderMath();
    }
  },

  toggleTrQuestion(drawerId, btnId, arrowId) {
    const drawer = document.getElementById(drawerId);
    const btn = document.getElementById(btnId);
    if (!drawer || !btn) return;

    const isOpen = drawer.classList.toggle("open");
    btn.classList.toggle("active", isOpen);
    if (isOpen) {
      this.renderMath();
    }
  },

  toggleSimTrHelp() {
    this.sim.trHelpOpen = !this.sim.trHelpOpen;
    const drawer = document.getElementById("sim-tr-drawer");
    const btn = document.getElementById("sim-tr-btn");
    if (drawer) drawer.classList.toggle("open", this.sim.trHelpOpen);
    if (btn) btn.classList.toggle("active", this.sim.trHelpOpen);
    if (this.sim.trHelpOpen) {
      this.renderMath();
    }
  },

  openTrGlossary() {
    this.openModal("modal-tr-glossary");
    this.renderTrGlossary();
  },

  setGlossaryFilter(cat) {
    this.activeGlossaryFilter = cat;
    const pills = document.querySelectorAll("#tr-glossary-pills .pill-btn");
    pills.forEach(btn => {
      const gcat = btn.getAttribute("data-gcat");
      btn.classList.toggle("active", gcat === cat);
    });
    this.renderTrGlossary();
  },

  filterTrGlossary() {
    this.renderTrGlossary();
  },

  renderTrGlossary() {
    const container = document.getElementById("tr-glossary-container");
    if (!container || !window.SAT_TURKISH_GLOSSARY) return;

    const searchInput = document.getElementById("tr-glossary-search");
    const searchTerm = (searchInput?.value || "").toLowerCase().trim();
    const cat = this.activeGlossaryFilter || "all";

    const filtered = window.SAT_TURKISH_GLOSSARY.filter(item => {
      const matchesCat = (cat === "all") || (item.cat === cat);
      const matchesSearch = !searchTerm ||
        item.term.toLowerCase().includes(searchTerm) ||
        item.tr.toLowerCase().includes(searchTerm) ||
        item.def.toLowerCase().includes(searchTerm);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p style="font-size: 15px;">Aradığınız kriterlere uygun terim bulunamadı.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="tr-glossary-card">
        <div class="tr-g-head">
          <span class="tr-g-en">${item.term}</span>
          <span class="tr-g-cat">${item.cat}</span>
        </div>
        <div class="tr-g-tr">${item.tr}</div>
        <div class="tr-g-def">${item.def}</div>
      </div>
    `).join("");

    this.renderMath();
  }
};

window.app = app;

// Auto-boot on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
