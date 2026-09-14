// Digital SAT Math 2026 - Module 2: Topic Map & Weighting Breakdown
window.SAT_TOPICS = {
  overview: {
    totalQuestions: 44, // 2 modules x 22 questions on official test (we provide 100 in master bank)
    timePerQuestion: "95 seconds average (35 minutes per 22-question module)",
    calculatorPolicy: "Desmos embedded throughout the entire Math section (No non-calculator section)",
    questionTypes: "Approx. 75% Multiple Choice (4 options) and 25% Student-Produced Response (SPR)",
    adaptiveStructure: "Module 1 is routing (mix of easy/medium/hard). Performance on Module 1 directs to either the Easy/Medium Module 2 (capped at ~600-650) or the Hard Module 2 (unlocks up to 800)."
  },
  domains: [
    {
      id: "algebra",
      name: "Algebra",
      weightPercent: 35,
      questionCountPerTest: 15,
      color: "#64BC73",
      accent: "#4ea15d",
      description: "Focuses on linear relationships, rates of change, systems of linear equations, and linear inequalities in one and two variables.",
      subtopics: [
        {
          name: "Linear Equations in One Variable",
          frequency: "High (3-4 Qs)",
          difficulty: "Easy to Medium",
          description: "Solving linear equations, recognizing conditions for 0, 1, or infinitely many solutions, evaluating algebraic expressions.",
          keyConcept: "Combine like terms, isolate x. If ax + b = cx + d: unique if a != c; no solution if a = c and b != d; infinite if a = c and b = d."
        },
        {
          name: "Linear Functions & Modeling",
          frequency: "High (4-5 Qs)",
          difficulty: "Easy to Hard",
          description: "Interpreting slope as rate of change and y-intercept as initial value in context, finding equations from two points or table of values.",
          keyConcept: "f(x) = mx + b. Watch for units (e.g. rate per month vs time in years). Interpret m as 'for each 1 unit increase in x, y changes by m'."
        },
        {
          name: "Systems of Two Linear Equations",
          frequency: "High (3-4 Qs)",
          difficulty: "Medium to Hard",
          description: "Solving systems algebraically or graphically, word problem translation, finding unknown parameter k for no solution or infinite solutions.",
          keyConcept: "No solution means parallel lines: a1/a2 = b1/b2 != c1/c2. Infinitely many means identical lines: a1/a2 = b1/b2 = c1/c2."
        },
        {
          name: "Linear Inequalities in 1 or 2 Variables",
          frequency: "Medium (2-3 Qs)",
          difficulty: "Medium",
          description: "Solving inequalities, reversing inequality signs when multiplying/dividing by a negative, graphing solution regions, system of linear constraints.",
          keyConcept: "Flip inequality sign when multiplying/dividing by negative. In 2 variables, test point (0, 0) to determine which half-plane to shade."
        },
        {
          name: "Linear Equations in Two Variables",
          frequency: "Medium (2 Qs)",
          difficulty: "Easy to Medium",
          description: "Standard form Ax + By = C, x- and y-intercepts, converting between forms, rate-based constraint equations.",
          keyConcept: "Slope = -A/B, y-intercept = C/B, x-intercept = C/A."
        }
      ],
      desmosSuperpower: "Graph both lines directly without rearranging. Intersection point is displayed instantly. Use sliders for unknown constant k to match no-solution (parallel) conditions."
    },
    {
      id: "advanced-math",
      name: "Advanced Math",
      weightPercent: 35,
      questionCountPerTest: 15,
      color: "#52B09A",
      accent: "#3d9682",
      description: "Central focus of high-scoring tiers: quadratics, polynomials, exponential models, rational expressions, and function transformations.",
      subtopics: [
        {
          name: "Equivalent Expressions & Factoring",
          frequency: "High (3-4 Qs)",
          difficulty: "Medium to Hard",
          description: "Difference of squares, perfect square trinomials, factoring by grouping, polynomial division, exponent and radical operations.",
          keyConcept: "x^2 - y^2 = (x - y)(x + y); (x + y)^2 = x^2 + 2xy + y^2; x^(a/b) = root_b(x^a)."
        },
        {
          name: "Nonlinear Equations (Quadratics, Radicals, Rationals)",
          frequency: "High (4-5 Qs)",
          difficulty: "Medium to Hard",
          description: "Quadratic formula, discriminant b^2 - 4ac, sum/product of roots (-b/a, c/a), extraneous solutions in radical and rational equations.",
          keyConcept: "Always check for extraneous solutions when squaring both sides or when a denominator equals zero!"
        },
        {
          name: "Nonlinear Functions & Vertex Form",
          frequency: "High (3-4 Qs)",
          difficulty: "Medium to Hard",
          description: "Vertex form y = a(x - h)^2 + k, identifying maximums/minimums, axis of symmetry, interpreting quadratic models in context.",
          keyConcept: "Vertex (h, k) reveals minimum (if a > 0) or maximum (if a < 0). h = -b / (2a)."
        },
        {
          name: "Exponential Functions & Percentage Growth",
          frequency: "High (3 Qs)",
          difficulty: "Medium to Hard",
          description: "f(t) = a * b^t, half-life models, doubling models, adjusting exponents for non-annual time frames f(t) = a * b^(t/k).",
          keyConcept: "Growth factor b = 1 + r; decay factor b = 1 - r. If tripling every 4 hours, exponent is t/4."
        },
        {
          name: "Function Notation & Transformations",
          frequency: "Medium (2 Qs)",
          difficulty: "Hard",
          description: "Composite functions f(g(x)), horizontal shifts f(x - c), vertical shifts f(x) + c, reflections -f(x) and f(-x).",
          keyConcept: "f(x - h) shifts RIGHT by h; f(x + h) shifts LEFT by h; f(x) + k shifts UP by k."
        }
      ],
      desmosSuperpower: "Type the original expression as f(x) and candidate answers as g(x). If their graphs overlap or if f(3.7) = g(3.7), the expressions are identical. For quadratics, tap on roots and vertex directly."
    },
    {
      id: "problem-solving",
      name: "Problem-Solving & Data Analysis",
      weightPercent: 15,
      questionCountPerTest: 7,
      color: "#FF7A30",
      accent: "#e5651e",
      description: "Real-world quantitative reasoning: proportional relationships, percentages, unit conversions, two-way frequency tables, scatterplots, and statistics.",
      subtopics: [
        {
          name: "Ratios, Rates, Proportions & Unit Conversions",
          frequency: "Medium (2 Qs)",
          difficulty: "Easy to Hard",
          description: "Multi-step conversion chains (e.g. miles/hour to meters/second), scale factors, density = mass / volume.",
          keyConcept: "Set up conversion factors so units cancel diagonally. For square/cubic units, square or cube the conversion ratio!"
        },
        {
          name: "Percentages & Percent Change",
          frequency: "High (2 Qs)",
          difficulty: "Medium to Hard",
          description: "Consecutive percent changes, reverse percentage (finding original price before tax/discount), percent increase/decrease.",
          keyConcept: "A 20% increase followed by a 20% decrease is 1.20 * 0.80 = 0.96 (a 4% net loss, NOT zero!)."
        },
        {
          name: "Two-Way Frequency Tables & Probability",
          frequency: "Medium (1-2 Qs)",
          difficulty: "Easy to Medium",
          description: "Marginal, joint, and conditional probability from contingency tables.",
          keyConcept: "Conditional probability trap: 'Given that the student is a senior...' restricts the denominator ONLY to seniors, not the grand total!"
        },
        {
          name: "Distributions: Center, Spread & Outliers",
          frequency: "Medium (1-2 Qs)",
          difficulty: "Medium to Hard",
          description: "Mean, median, mode, range, standard deviation, shape of distributions (skewness), impact of extreme outliers.",
          keyConcept: "Outliers pull the MEAN towards the tail. The MEDIAN remains resistant and stable."
        },
        {
          name: "Scatterplots, Line of Best Fit & Margin of Error",
          frequency: "Medium (1 Q)",
          difficulty: "Medium",
          description: "Interpreting slope/intercept of regression lines, predicting values, residuals (actual - predicted), margin of error and sample size.",
          keyConcept: "Margin of error is inversely proportional to sqrt(n). Random sampling allows generalization; random assignment proves causation."
        }
      ],
      desmosSuperpower: "Use Desmos lists 'L = [data]' to compute mean(L), median(L), stdev(L). Use linear regression 'y1 ~ m*x1 + b' to fit scatterplot points in 10 seconds."
    },
    {
      id: "geometry-trig",
      name: "Geometry & Trigonometry",
      weightPercent: 15,
      questionCountPerTest: 7,
      color: "#3B82F6",
      accent: "#2563EB",
      description: "Spatial reasoning, 2D/3D measurements, coordinate geometry, angle theorems, right-triangle trigonometry, and circle properties.",
      subtopics: [
        {
          name: "Area & Volume Problems",
          frequency: "Medium (2 Qs)",
          difficulty: "Medium to Hard",
          description: "Complex composite 2D shapes, 3D volume of prisms/cylinders/cones/spheres, scaling effects on perimeter, area, and volume.",
          keyConcept: "If linear dimensions scale by factor k, Perimeter scales by k, Area scales by k^2, Volume scales by k^3!"
        },
        {
          name: "Lines, Angles & Triangle Theorems",
          frequency: "Medium (1-2 Qs)",
          difficulty: "Easy to Medium",
          description: "Parallel lines cut by transversal (alternate interior, corresponding), triangle angle sum 180°, exterior angle theorem, similar triangles.",
          keyConcept: "Exterior angle of a triangle equals the sum of the two remote interior angles. Similar triangles have equal angle measures and proportional side lengths."
        },
        {
          name: "Right Triangles & SOH CAH TOA",
          frequency: "High (2 Qs)",
          difficulty: "Medium to Hard",
          description: "Pythagorean theorem, 30-60-90 and 45-45-90 special right triangles, sine, cosine, tangent, co-function identity sin(x) = cos(90 - x).",
          keyConcept: "sin(A) = cos(90 - A). If sin(x) = cos(y), then x + y = 90 degrees."
        },
        {
          name: "Circle Equations in Coordinate Plane",
          frequency: "High (1-2 Qs)",
          difficulty: "Medium to Hard",
          description: "Standard circle form (x - h)^2 + (y - k)^2 = r^2, completing the square to find center and radius, tangent lines to circles.",
          keyConcept: "A line tangent to a circle is perpendicular to the radius drawn to the point of tangency (negative reciprocal slope)."
        },
        {
          name: "Circle Theorems: Arcs, Sectors & Radians",
          frequency: "Medium (1 Q)",
          difficulty: "Medium to Hard",
          description: "Arc length s = r*theta, sector area A = 0.5 * r^2 * theta, inscribed angles vs central angles (inscribed is half central).",
          keyConcept: "Inscribed angle = (1/2) * intercepted arc measure. Radians to degrees: multiply by 180 / pi."
        }
      ],
      desmosSuperpower: "Type full unsimplified circle equations 'x^2 + y^2 + 6x - 8y = 11' directly into Desmos. Desmos draws the circle instantly! Click the edges to determine diameter, radius, and center coordinates without doing algebra."
    }
  ],
  scoreRoadmap: [
    {
      targetScore: "600+",
      focus: "Lock down all Module 1 Foundational Questions",
      priorities: [
        "Master single-variable linear equations and slope-intercept form",
        "Memorize all reference sheet geometry formulas and special right triangles",
        "Basic quadratic factoring and finding vertex via Desmos",
        "Two-way table percentages and basic ratio conversions"
      ],
      estimatedTime: "2-3 weeks focused practice"
    },
    {
      targetScore: "700+",
      focus: "Conquer Medium-Hard Questions & Desmos Speed Tricks",
      priorities: [
        "Systems of linear equations with unknown parameter k (no solution/infinite)",
        "Completing the square for circles on coordinate plane",
        "Exponential growth/decay models with adjusted exponents (t/k)",
        "Co-function identities: sin(x) = cos(90 - x)",
        "Desmos sliders, regression y1 ~ ax1^2 + bx1 + c, and point plotting"
      ],
      estimatedTime: "4-6 weeks focused practice"
    },
    {
      targetScore: "750-800",
      focus: "Flawless Execution on Adaptive Hard Tier (Module 2)",
      priorities: [
        "Nonlinear systems (parabola-line tangent conditions using discriminant b^2 - 4ac = 0)",
        "Multi-step unit conversions involving volume and density",
        "Advanced circle theorems: tangent intersections, secant properties, radians",
        "Complex rational and radical expressions with extraneous solutions",
        "Margin of error sample size proportionality (MOE proportional to 1/sqrt(n))"
      ],
      estimatedTime: "6-8 weeks intensive mastery"
    }
  ]
};
