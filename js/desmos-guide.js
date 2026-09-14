// Digital SAT Math 2026 - Desmos Masterclass Cheatsheet Database
window.DESMOS_GUIDE = {
  overview: {
    title: "Digital SAT Desmos 10-Second Speed Hacks",
    description: "On the 2026 Digital SAT, the embedded Desmos graphing calculator is available on ALL 44 math questions. Mastering these 8 superpower techniques can save 15-20 minutes and eliminate careless algebraic arithmetic errors.",
    rules: [
      "Always verify Angle Mode (Degrees vs Radians) before answering trigonometry questions.",
      "Use 'x' and 'y' for variables; if a question uses 't' or 'm', substitute with 'x' so Desmos can plot the curve.",
      "Click any grey dot (intercepts, vertex, intersection) to lock its coordinates on screen."
    ]
  },
  hacks: [
    {
      id: "hack-intersections",
      title: "Superpower 1: Instant System Solver (Intersections)",
      timeSaved: "30-45 seconds",
      difficulty: "Essential",
      formula: "Line 1: Equation 1 \\quad | \\quad Line 2: Equation 2",
      explanation: "No need to perform substitution or elimination! Type any two equations into Desmos in whatever form they are given (standard form, slope-intercept, factored, or non-linear). Desmos plots both curves and puts a grey dot at every intersection point.",
      example: {
        problem: "Solve the system: $3x + 2y = 17$ and $y = 2x - 9$.",
        input: "Line 1: 3x + 2y = 17\nLine 2: y = 2x - 9",
        action: "Click the grey dot where the two lines intersect: (5, 1).",
        result: "x = 5, y = 1 in under 4 seconds!"
      }
    },
    {
      id: "hack-sliders",
      title: "Superpower 2: The Parameter Slider Trick (k, c, p)",
      timeSaved: "45-60 seconds",
      difficulty: "Advanced",
      formula: "Type equation with letter 'k' -> Click 'add slider: k'",
      explanation: "When an SAT question asks 'For what value of k does the system have no solution (or one solution, or a line tangent to a curve)?', simply graph the known equation and the parametric equation with 'k'. Desmos creates an interactive slider. Drag k until the condition is met visually!",
      example: {
        problem: "For what value of c does y = 4x + c intersect y = x^2 - 2x + 10 at exactly one point?",
        input: "Line 1: y = x^2 - 2x + 10\nLine 2: y = 4x + c",
        action: "Click 'add slider: c'. Slide c until the line touches the parabola at exactly one tangent point.",
        result: "c = 1. No quadratic discriminant calculation required!"
      }
    },
    {
      id: "hack-vertex",
      title: "Superpower 3: 1-Click Vertex, Minimums & Maximums",
      timeSaved: "20-30 seconds",
      difficulty: "Essential",
      formula: "y = ax^2 + bx + c",
      explanation: "Never spend time completing the square or calculating -b/(2a) to find the vertex. Simply type the quadratic equation into Desmos and tap the peak (maximum) or valley (minimum). A grey dot pops up showing (h, k).",
      example: {
        problem: "What is the maximum height of a projectile modeled by h(t) = -16t^2 + 64t + 80?",
        input: "y = -16x^2 + 64x + 80",
        action: "Click on the vertex at the top of the parabola.",
        result: "Vertex is (2, 144). Max height is 144 feet, reached at t = 2 seconds."
      }
    },
    {
      id: "hack-equivalence",
      title: "Superpower 4: Expression Equivalence Verification",
      timeSaved: "30 seconds",
      difficulty: "Essential",
      formula: "f(x) = [Original] \\quad \\text{vs} \\quad g(x) = [Choice]",
      explanation: "When asked 'Which of the following is equivalent to...', don't risk factoring or FOIL algebra errors. Label the original expression f(x), then graph the 4 answer choices as g(x), h(x), etc. The correct choice will overlap f(x) identically across the entire domain.",
      example: {
        problem: "Which is equivalent to (2x - 3)(x + 5) - (x - 2)^2?",
        input: "f(x) = (2x - 3)(x + 5) - (x - 2)^2\ng(x) = x^2 + 11x - 19",
        action: "Observe if the two graphs trace the exact same line, or test f(2.7) and g(2.7).",
        result: "If f(2.7) == g(2.7), the answer choice is guaranteed correct."
      }
    },
    {
      id: "hack-regression",
      title: "Superpower 5: Instant Table Regression (~)",
      timeSaved: "60-90 seconds",
      difficulty: "High-Scoring Secret",
      formula: "y_1 \\sim m x_1 + b \\quad \\text{or} \\quad y_1 \\sim a x_1^2 + b x_1 + c",
      explanation: "When given a table of values or points, click the '+' button in Desmos, add a Table, enter the x and y values, and type a regression model using the tilde '~'. Desmos computes the exact parameters (m, b, a, c) instantly with zero algebra.",
      example: {
        problem: "Find the quadratic passing through (1, 5), (2, 12), and (3, 23).",
        input: "Enter points into Table (x1, y1). Line 2: y_1 ~ a*x_1^2 + b*x_1 + c",
        action: "Desmos displays: a = 2, b = 1, c = 2.",
        result: "The function is f(x) = 2x^2 + x + 2. Solved in 8 seconds!"
      }
    },
    {
      id: "hack-circles",
      title: "Superpower 6: Unsimplified Circle Analyzer",
      timeSaved: "45-60 seconds",
      difficulty: "Medium",
      formula: "x^2 + y^2 + Dx + Ey + F = 0",
      explanation: "College Board loves testing circles in expanded general form that require completing the square. Desmos can graph the raw equation directly! You can inspect the center and radius visually without doing any completing-the-square algebra.",
      example: {
        problem: "Find the radius of 2x^2 + 2y^2 - 12x + 16y - 22 = 0.",
        input: "Type 2x^2 + 2y^2 - 12x + 16y - 22 = 0 into Desmos.",
        action: "Click the left edge (-3, -4) and right edge (9, -4). The horizontal distance is 12.",
        result: "Diameter = 12, so Radius = 6. Zero algebraic steps needed!"
      }
    },
    {
      id: "hack-inequalities",
      title: "Superpower 7: Compound & 2D Inequality Visualizer",
      timeSaved: "25 seconds",
      difficulty: "Essential",
      formula: "Inequality 1 \\quad \\text{and} \\quad Inequality 2",
      explanation: "Type inequalities using '<=', '>=', '<', or '>'. Desmos automatically creates dashed/solid boundary lines and shades the half-planes. Plot candidate answer points to see which one lies squarely in the overlapping shaded region.",
      example: {
        problem: "Which point satisfies y > 2x - 3 and y <= -x + 4?",
        input: "Line 1: y > 2x - 3\nLine 2: y <= -x + 4\nLine 3: (0, 1)",
        action: "Check if the plotted point (0, 1) lands in the dark double-shaded region.",
        result: "Instantly verified: (0, 1) is inside the feasible region."
      }
    },
    {
      id: "hack-angle-mode",
      title: "Superpower 8: Degree vs. Radian Wrench Toggle",
      timeSaved: "Avoids 0-point blunder",
      difficulty: "Critical Caution",
      formula: "Wrench Icon (Top Right) -> Toggle 'Radians' / 'Degrees'",
      explanation: "Desmos defaults to RADIANS! If an SAT question gives an angle in degrees (e.g., sin(38°)) and Desmos is in radians, sin(38) will give 0.296 instead of the correct 0.615. Always check the wrench settings before evaluating trig functions.",
      example: {
        problem: "Evaluate sin(30°).",
        input: "In Radian mode: sin(30) = -0.988 (WRONG!). In Degree mode: sin(30) = 0.5 (CORRECT!).",
        action: "Click Graph Settings (wrench) -> Toggle to 'Degrees'.",
        result: "Guarantees accurate trigonometric outputs."
      }
    }
  ]
};
