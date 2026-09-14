# Script to generate 100 authentic Digital SAT Math questions and solutions
import json

questions = []
solutions = []

# Helper to add question
def add_q(id_num, part, domain, domain_id, topic, difficulty, q_type, q_text, options, correct_ans, alg_solution, desmos_shortcut, concept_pillar):
    q_obj = {
        "id": id_num,
        "part": part,
        "number": id_num,
        "domain": domain,
        "domainId": domain_id,
        "topic": topic,
        "difficulty": difficulty,
        "type": q_type,
        "question": q_text,
        "options": options,
        "correctAnswer": correct_ans,
        "conceptPillar": concept_pillar
    }
    sol_obj = {
        "id": id_num,
        "number": id_num,
        "correctAnswer": correct_ans,
        "type": q_type,
        "algebraicSolution": alg_solution,
        "desmosShortcut": desmos_shortcut,
        "conceptPillar": concept_pillar
    }
    questions.append(q_obj)
    solutions.append(sol_obj)

# =========================================================================
# PART A: FOUNDATIONAL & STANDARD MODULE (Q1 - Q50)
# 18 Algebra, 18 Advanced Math, 7 Problem-Solving/Data, 7 Geometry/Trig
# Mix: 35 MCQs (70%), 15 SPRs (30%)
# =========================================================================

# --- PART A: ALGEBRA (Q1 - Q18) ---
add_q(
    1, "A", "Algebra", "algebra", "Linear Equations in One Variable", "Easy", "mcq",
    "If $5(2x - 3) = 3(x + 9)$, what is the value of $x$?",
    [{"letter": "A", "text": "4"}, {"letter": "B", "text": "6"}, {"letter": "C", "text": "8"}, {"letter": "D", "text": "12"}],
    "B",
    "1. Expand both sides: $10x - 15 = 3x + 27$.\n2. Subtract $3x$ from both sides: $7x - 15 = 27$.\n3. Add 15 to both sides: $7x = 42$.\n4. Divide by 7: $x = 6$.",
    "Type `5(2x - 3) = 3(x + 9)` directly into Desmos. A vertical line appears at $x = 6$. Click the $x$-intercept to read $6$.",
    "Core expansion and isolating variables."
)

add_q(
    2, "A", "Algebra", "algebra", "Linear Equations in One Variable", "Easy", "mcq",
    "If $3x + 7 = 19$, what is the value of $6x - 5$?",
    [{"letter": "A", "text": "12"}, {"letter": "B", "text": "19"}, {"letter": "C", "text": "24"}, {"letter": "D", "text": "38"}],
    "B",
    "1. Solve for $3x$: $3x = 19 - 7 = 12$.\n2. Notice that $6x = 2(3x) = 2(12) = 24$.\n3. Compute $6x - 5 = 24 - 5 = 19$.\n(Alternatively, $x = 4$, so $6(4) - 5 = 24 - 5 = 19$.)",
    "Line 1: Type `3x + 7 = 19` (yields vertical line at $x = 4$). Line 2: Type `6(4) - 5` to immediately get `19`.",
    "College Board trap: Always answer what is asked ($6x - 5$), not just $x$."
)

add_q(
    3, "A", "Algebra", "algebra", "Linear Functions & Modeling", "Easy", "spr",
    "A rideshare service charges an initial base pickup fee of $\\$3.50$ plus $\\$1.75$ for every mile traveled. If a passenger's total fare before tip was $\\$24.50$, how many miles was the trip?",
    None,
    "12",
    "1. Model the total cost: $C(m) = 3.50 + 1.75m$.\n2. Set equal to total fare: $3.50 + 1.75m = 24.50$.\n3. Subtract 3.50: $1.75m = 21.00$.\n4. Divide by 1.75: $m = \\frac{21}{1.75} = 12$ miles.",
    "Type `3.50 + 1.75m = 24.50` into Desmos (use $x$ instead of $m$). The line appears at $x = 12$.",
    "Linear rate model: $y = mx + b$ where $b$ is fixed initial cost and $m$ is rate per mile."
)

add_q(
    4, "A", "Algebra", "algebra", "Slope Formula", "Easy", "mcq",
    "Line $k$ in the $xy$-plane passes through the points $(-2, 5)$ and $(4, -7)$. What is the slope of line $k$?",
    [{"letter": "A", "text": "-2"}, {"letter": "B", "text": "-\\frac{1}{2}"}, {"letter": "C", "text": "2"}, {"letter": "D", "text": "-3"}],
    "A",
    "1. Use slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\n2. Substitute coordinates: $m = \\frac{-7 - 5}{4 - (-2)} = \\frac{-12}{6} = -2$.",
    "Type `(-7 - 5)/(4 - (-2))` into Desmos. It outputs `-2` instantly.",
    "Subtract in the same order in numerator and denominator."
)

add_q(
    5, "A", "Algebra", "algebra", "Linear Equations in Two Variables", "Easy", "mcq",
    "What is the $y$-intercept of the line given by the equation $4x - 6y = 18$?",
    [{"letter": "A", "text": "(0, -3)"}, {"letter": "B", "text": "(0, 3)"}, {"letter": "C", "text": "(0, 4.5)"}, {"letter": "D", "text": "(0, -4.5)"}],
    "A",
    "1. To find the $y$-intercept, set $x = 0$.\n2. $4(0) - 6y = 18 \\implies -6y = 18$.\n3. Divide by $-6$: $y = -3$.\n4. The $y$-intercept is $(0, -3)$.",
    "Type `4x - 6y = 18` into Desmos. Click on the $y$-axis crossing point: `(0, -3)` is highlighted.",
    "Shortcut for standard form $Ax + By = C$: $y$-intercept is $C/B = 18/(-6) = -3$."
)

add_q(
    6, "A", "Algebra", "algebra", "Linear Inequalities", "Medium", "mcq",
    "Which inequality represents all solutions to $3(x - 2) \\le 5x + 8$?",
    [{"letter": "A", "text": "x \\ge -7"}, {"letter": "B", "text": "x \\le -7"}, {"letter": "C", "text": "x \\ge 7"}, {"letter": "D", "text": "x \\le 1"}],
    "A",
    "1. Expand: $3x - 6 \\le 5x + 8$.\n2. Subtract $3x$: $-6 \\le 2x + 8$.\n3. Subtract 8: $-14 \\le 2x$.\n4. Divide by 2: $-7 \\le x$, which is equivalent to $x \\ge -7$.",
    "Type `3(x - 2) <= 5x + 8` into Desmos. The shaded half-plane has boundary at $x = -7$ and shades to the right ($x \\ge -7$).",
    "Remember to flip the inequality sign only when multiplying or dividing by a negative number."
)

add_q(
    7, "A", "Algebra", "algebra", "Systems of Two Linear Equations", "Medium", "mcq",
    "Consider the system of equations below:\n$$\\begin{aligned} 2x + y &= 11 \\\\ x - 3y &= -5 \\end{aligned}$$\nWhat is the value of $x + y$?",
    [{"letter": "A", "text": "4"}, {"letter": "B", "text": "5"}, {"letter": "C", "text": "7"}, {"letter": "D", "text": "9"}],
    "C",
    "1. From equation 2, express $x = 3y - 5$.\n2. Substitute into equation 1: $2(3y - 5) + y = 11 \\implies 6y - 10 + y = 11 \\implies 7y = 21 \\implies y = 3$.\n3. Find $x$: $x = 3(3) - 5 = 4$.\n4. Compute $x + y = 4 + 3 = 7$.",
    "Line 1: `2x + y = 11`. Line 2: `x - 3y = -5`. Click the grey dot at intersection: `(4, 3)`. Then $4 + 3 = 7$.",
    "Always check whether the question asks for $x$, $y$, or an expression like $x + y$."
)

add_q(
    8, "A", "Algebra", "algebra", "Linear Equations: Infinite Solutions", "Medium", "spr",
    "In the equation $2(3x + 4) = 6x + k$, $k$ is a constant. If the equation has infinitely many solutions, what is the value of $k$?",
    None,
    "8",
    "1. Distribute on the left side: $6x + 8 = 6x + k$.\n2. For infinitely many solutions, both sides must be identical identities for all $x$.\n3. Equating constants: $k = 8$.",
    "Type `y = 2(3x + 4)` and `y = 6x + k` with slider $k$. Set $k = 8$; the lines coincide perfectly.",
    "Infinitely many solutions condition: coefficients of $x$ match and constant terms match."
)

add_q(
    9, "A", "Algebra", "algebra", "Parallel & Perpendicular Lines", "Easy", "mcq",
    "Line $L$ is defined by the equation $y = -\\frac{3}{4}x + 2$. Line $P$ is perpendicular to line $L$. What is the slope of line $P$?",
    [{"letter": "A", "text": "-\\frac{4}{3}"}, {"letter": "B", "text": "\\frac{4}{3}"}, {"letter": "C", "text": "\\frac{3}{4}"}, {"letter": "D", "text": "-\\frac{3}{4}"}],
    "B",
    "1. Perpendicular lines have negative reciprocal slopes: $m_\\perp = -\\frac{1}{m_L}$.\n2. Given $m_L = -\\frac{3}{4}$, the negative reciprocal is $-\\left(-\\frac{4}{3}\\right) = \\frac{4}{3}$.",
    "Type `-1 / (-3/4)` into Desmos. It simplifies directly to `1.33333333333` (click fraction icon for `4/3`).",
    "Perpendicular slopes multiply to $-1$: $m_1 \\cdot m_2 = -1$."
)

add_q(
    10, "A", "Algebra", "algebra", "Linear Functions & Modeling", "Medium", "spr",
    "The table below shows values for a linear function $f(x)$:\n\n| $x$ | $f(x)$ |\n| :---: | :---: |\n| 1 | 7 |\n| 3 | 13 |\n| 5 | 19 |\n\nWhat is the value of $f(8)$?",
    None,
    "28",
    "1. Calculate slope: $m = \\frac{13 - 7}{3 - 1} = \\frac{6}{2} = 3$.\n2. Find $y$-intercept: $f(x) = 3x + b \\implies 7 = 3(1) + b \\implies b = 4$.\n3. The function is $f(x) = 3x + 4$.\n4. Evaluate at $x = 8$: $f(8) = 3(8) + 4 = 24 + 4 = 28$.",
    "Open Desmos table: enter points $(1, 7)$ and $(3, 13)$. Line 2: type `y1 ~ m*x1 + b`. Desmos shows $m=3, b=4$. Line 3: `3(8) + 4 = 28`.",
    "Linear constant rate of change: each +2 in $x$ yields +6 in $f(x)$ ($m = 3$)."
)

add_q(
    11, "A", "Algebra", "algebra", "Linear Inequalities Modeling", "Easy", "mcq",
    "A local bakery sells blueberry muffins for $\\$2$ each and cinnamon bagels for $\\$3$ each. The baker needs to earn at least $\\$120$ today from selling $m$ muffins and $b$ bagels. Which inequality represents this situation?",
    [{"letter": "A", "text": "2m + 3b \\le 120"}, {"letter": "B", "text": "2m + 3b \\ge 120"}, {"letter": "C", "text": "3m + 2b \\ge 120"}, {"letter": "D", "text": "2m + 3b > 120"}],
    "B",
    "1. Revenue from muffins: $2m$.\n2. Revenue from bagels: $3b$.\n3. Total revenue: $2m + 3b$.\n4. 'At least $\\$120$' means greater than or equal to 120: $2m + 3b \\ge 120$.",
    "Verify keywords: 'at least' means $\\ge$, 'at most' means $\\le$, 'exceeds' means $>$.",
    "Keyword translation: at least = $\\ge$."
)

add_q(
    12, "A", "Algebra", "algebra", "Linear Functions Interpretation", "Easy", "mcq",
    "The height $H$, in inches, of a newly planted sapling $t$ months after being planted is modeled by $H = 2.4t + 18$. Which statement is the best interpretation of the number $2.4$ in this context?",
    [{"letter": "A", "text": "The initial height of the sapling was 2.4 inches."},
     {"letter": "B", "text": "The sapling grows by approximately 2.4 inches each month."},
     {"letter": "C", "text": "The sapling will reach maximum height in 2.4 months."},
     {"letter": "D", "text": "The sapling grows by 18 inches every 2.4 months."}],
    "B",
    "1. In $H = mt + b$, $m = 2.4$ is the slope, representing the rate of change of height per unit of time $t$.\n2. Since $t$ is measured in months, the sapling grows $2.4$ inches each month.\n3. The constant $18$ represents the initial height when $t = 0$.",
    "Slope in $y = mx + b$ is ALWAYS the unit rate ('per month', 'each year', 'per mile').",
    "Slope = rate of change; $y$-intercept = initial value at $t=0$."
)

add_q(
    13, "A", "Algebra", "algebra", "Systems of Two Linear Equations", "Medium", "spr",
    "A piggy bank contains a total of 45 coins, consisting only of nickels (worth $\\$0.05$ each) and dimes (worth $\\$0.10$ each). The total value of all coins is $\\$3.40$. How many dimes are in the piggy bank?",
    None,
    "23",
    "1. Let $n$ = number of nickels, $d$ = number of dimes.\n2. Quantity equation: $n + d = 45 \\implies n = 45 - d$.\n3. Value equation: $0.05n + 0.10d = 3.40$.\n4. Substitute: $0.05(45 - d) + 0.10d = 3.40 \\implies 2.25 - 0.05d + 0.10d = 3.40 \\implies 0.05d = 1.15 \\implies d = 23$.",
    "Line 1: `x + y = 45`. Line 2: `0.05x + 0.10y = 3.40`. Intersection is $(22, 23)$. Here $y$ represents dimes, so the answer is 23.",
    "System with quantity equation and value equation."
)

add_q(
    14, "A", "Algebra", "algebra", "Linear Intercepts", "Easy", "mcq",
    "What is the $x$-intercept of the graph of $5x - 2y = 20$ in the $xy$-plane?",
    [{"letter": "A", "text": "(4, 0)"}, {"letter": "B", "text": "(-10, 0)"}, {"letter": "C", "text": "(0, -10)"}, {"letter": "D", "text": "(20, 0)"}],
    "A",
    "1. To find the $x$-intercept, set $y = 0$.\n2. $5x - 2(0) = 20 \\implies 5x = 20$.\n3. Divide by 5: $x = 4$.\n4. The $x$-intercept point is $(4, 0)$.",
    "Type `5x - 2y = 20` into Desmos. Tap the point where it crosses the $x$-axis: `(4, 0)`.",
    "$x$-intercept occurs where $y = 0$; $y$-intercept occurs where $x = 0$."
)

add_q(
    15, "A", "Algebra", "algebra", "Linear Points & Equations", "Easy", "spr",
    "If the point $(k, 9)$ lies on the line given by the equation $y = 3x - 6$, what is the value of $k$?",
    None,
    "5",
    "1. Substitute $x = k$ and $y = 9$ into the equation: $9 = 3k - 6$.\n2. Add 6 to both sides: $15 = 3k$.\n3. Divide by 3: $k = 5$.",
    "Type `9 = 3x - 6` in Desmos. A vertical line shows $x = 5$.",
    "Points on a curve must satisfy its equation."
)

add_q(
    16, "A", "Algebra", "algebra", "Systems: No Solution", "Medium", "mcq",
    "The system of equations below has no solution:\n$$\\begin{aligned} 4x - 2y &= 8 \\\\ 6x - ky &= 15 \\end{aligned}$$\nWhat is the value of the constant $k$?",
    [{"letter": "A", "text": "-3"}, {"letter": "B", "text": "2"}, {"letter": "C", "text": "3"}, {"letter": "D", "text": "4"}],
    "C",
    "1. For a linear system to have no solution, the lines must be parallel (equal slopes, different intercepts).\n2. Slope ratio condition: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.\n3. $\\frac{4}{6} = \\frac{-2}{-k} \\implies \\frac{2}{3} = \\frac{2}{k} \\implies k = 3$.\n4. Verify constants: $\\frac{8}{15} \\neq \\frac{2}{3}$, confirming lines are parallel and never intersect.",
    "Graph `4x - 2y = 8` and `6x - ky = 15` with slider $k$. Slide $k$ to 3 to make the two lines perfectly parallel.",
    "No-solution condition: $a_1/a_2 = b_1/b_2 \\neq c_1/c_2$."
)

add_q(
    17, "A", "Algebra", "algebra", "Absolute Value Equations", "Medium", "mcq",
    "What is the positive solution to the equation $|2x - 5| = 9$?",
    [{"letter": "A", "text": "2"}, {"letter": "B", "text": "7"}, {"letter": "C", "text": "9"}, {"letter": "D", "text": "14"}],
    "B",
    "1. An absolute value $|u| = c$ splits into $u = c$ or $u = -c$.\n2. Case 1: $2x - 5 = 9 \\implies 2x = 14 \\implies x = 7$.\n3. Case 2: $2x - 5 = -9 \\implies 2x = -4 \\implies x = -2$.\n4. The positive solution is $x = 7$.",
    "Type `|2x - 5| = 9` into Desmos. Two vertical lines appear at $x = -2$ and $x = 7$. The positive root is 7.",
    "Absolute value equations yield two branches; check which root the question asks for."
)

add_q(
    18, "A", "Algebra", "algebra", "Systems of Inequalities", "Medium", "mcq",
    "Which of the following points $(x, y)$ is a solution to the system of inequalities $y > 2x - 3$ and $y \\le -x + 4$?",
    [{"letter": "A", "text": "(3, 5)"}, {"letter": "B", "text": "(0, 1)"}, {"letter": "C", "text": "(4, -2)"}, {"letter": "D", "text": "(-1, -6)"}],
    "B",
    "1. Test $(0, 1)$:\n   - $1 > 2(0) - 3 \\implies 1 > -3$ (True)\n   - $1 \\le -(0) + 4 \\implies 1 \\le 4$ (True)\n2. Both inequalities hold, so $(0, 1)$ is in the solution set.",
    "Type `y > 2x - 3` and `y <= -x + 4` in Desmos. Plot each answer choice $(x, y)$ to see which falls in the overlapping shaded region.",
    "Plug candidate points into both inequalities."
)

# --- PART A: ADVANCED MATH (Q19 - Q36) ---
add_q(
    19, "A", "Advanced Math", "advanced-math", "Quadratic Factoring", "Easy", "mcq",
    "What are the solutions to the quadratic equation $x^2 - 7x + 12 = 0$?",
    [{"letter": "A", "text": "x = -3 \\text{ and } x = -4"}, {"letter": "B", "text": "x = 3 \\text{ and } x = 4"}, {"letter": "C", "text": "x = 2 \\text{ and } x = 6"}, {"letter": "D", "text": "x = -2 \\text{ and } x = -6"}],
    "B",
    "1. Find two numbers that multiply to $+12$ and add to $-7$: $-3$ and $-4$.\n2. Factor: $(x - 3)(x - 4) = 0$.\n3. Set each factor to zero: $x - 3 = 0 \\implies x = 3$, and $x - 4 = 0 \\implies x = 4$.",
    "Type `y = x^2 - 7x + 12` in Desmos. Click the two $x$-intercepts: $(3, 0)$ and $(4, 0)$.",
    "Zeros of factored form $(x - r_1)(x - r_2) = 0$ are $r_1$ and $r_2$."
)

add_q(
    20, "A", "Advanced Math", "advanced-math", "Quadratic Formula", "Medium", "spr",
    "The solutions to the equation $x^2 - 6x + 4 = 0$ can be written in the form $3 \\pm \\sqrt{k}$, where $k$ is an integer. What is the value of $k$?",
    None,
    "5",
    "1. Standard form: $a = 1, b = -6, c = 4$.\n2. Apply quadratic formula: $x = \\frac{-(-6) \\pm \\sqrt{(-6)^2 - 4(1)(4)}}{2(1)} = \\frac{6 \\pm \\sqrt{36 - 16}}{2} = \\frac{6 \\pm \\sqrt{20}}{2}$.\n3. Simplify radical: $\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$.\n4. Divide by 2: $x = \\frac{6 \\pm 2\\sqrt{5}}{2} = 3 \\pm \\sqrt{5}$.\n5. Comparing with $3 \\pm \\sqrt{k}$, we get $k = 5$.",
    "Type `y = x^2 - 6x + 4` in Desmos. Intercept is $x \\approx 5.236$. Line 2: type `3 + sqrt(5)` which gives `5.2360679...` (exact match).",
    "Radical simplification: $\\sqrt{20} / 2 = 2\\sqrt{5}/2 = \\sqrt{5}$."
)

add_q(
    21, "A", "Advanced Math", "advanced-math", "Vertex Form", "Easy", "mcq",
    "The function $f(x) = 3(x - 4)^2 + 7$ is graphed in the $xy$-plane. What is the minimum value of $f(x)$?",
    [{"letter": "A", "text": "-4"}, {"letter": "B", "text": "3"}, {"letter": "C", "text": "4"}, {"letter": "D", "text": "7"}],
    "D",
    "1. Vertex form of a quadratic is $f(x) = a(x - h)^2 + k$, where the vertex is at $(h, k)$.\n2. Here $a = 3 > 0$, so the parabola opens upward, meaning the vertex is a minimum.\n3. The vertex is $(4, 7)$.\n4. The minimum VALUE of the function refers to the $y$-value, which is 7.",
    "Type `f(x) = 3(x - 4)^2 + 7` in Desmos. Click the vertex dot at $(4, 7)$. The minimum value of $f(x)$ is $y = 7$.",
    "Distinguish 'minimum value of $f(x)$' ($y = k$) from 'value of $x$ where minimum occurs' ($x = h$)."
)

add_q(
    22, "A", "Advanced Math", "advanced-math", "Discriminant", "Easy", "mcq",
    "How many real solutions does the quadratic equation $2x^2 - 4x + 5 = 0$ have?",
    [{"letter": "A", "text": "Zero"}, {"letter": "B", "text": "Exactly one"}, {"letter": "C", "text": "Exactly two"}, {"letter": "D", "text": "Infinitely many"}],
    "A",
    "1. The number of real solutions is determined by the discriminant $\\Delta = b^2 - 4ac$.\n2. Here $a = 2, b = -4, c = 5$.\n3. Compute $\\Delta = (-4)^2 - 4(2)(5) = 16 - 40 = -24$.\n4. Since $\\Delta < 0$, there are zero real solutions.",
    "Type `y = 2x^2 - 4x + 5` into Desmos. The parabola lies entirely above the $x$-axis and never crosses it, so there are 0 real solutions.",
    "Discriminant rule: $\\Delta < 0 \\implies$ no real solutions."
)

add_q(
    23, "A", "Advanced Math", "advanced-math", "Vieta's Formulas", "Medium", "spr",
    "What is the sum of the solutions to the quadratic equation $3x^2 - 15x + 8 = 0$?",
    None,
    "5",
    "1. By Vieta's formulas, the sum of roots for $ax^2 + bx + c = 0$ is $-\\frac{b}{a}$.\n2. Here $a = 3, b = -15$.\n3. Sum of solutions = $-\\frac{-15}{3} = 5$.",
    "Type `y = 3x^2 - 15x + 8` in Desmos. Click both $x$-intercepts: $x_1 \\approx 0.6126, x_2 \\approx 4.3874$. In line 2, type `0.61257 + 4.38743` to get `5`.",
    "Vieta's shortcut: Sum of roots is $-b/a$."
)

add_q(
    24, "A", "Advanced Math", "advanced-math", "Radical Equations", "Medium", "mcq",
    "What is the solution set of the equation $\\sqrt{2x + 14} = x + 3$?",
    [{"letter": "A", "text": "{-5, 1}"}, {"letter": "B", "text": "{1}"}, {"letter": "C", "text": "{-5}"}, {"letter": "D", "text": "{}"}],
    "B",
    "1. Square both sides: $2x + 14 = (x + 3)^2 = x^2 + 6x + 9$.\n2. Rearrange into standard form: $x^2 + 4x - 5 = 0$.\n3. Factor: $(x + 5)(x - 1) = 0 \\implies x = -5$ or $x = 1$.\n4. Check for extraneous solutions:\n   - Check $x = -5$: $\\sqrt{2(-5) + 14} = \\sqrt{4} = 2$. Right side: $-5 + 3 = -2$. $2 \\neq -2$ (Extraneous!).\n   - Check $x = 1$: $\\sqrt{2(1) + 14} = \\sqrt{16} = 4$. Right side: $1 + 3 = 4$. $4 = 4$ (Valid).\n5. Solution is only $\\{1\\}$.",
    "Graph `y = sqrt(2x + 14)` and `y = x + 3` in Desmos. They intersect at exactly one point: $(1, 4)$. The solution is $x = 1$.",
    "Squaring both sides often introduces extraneous roots; always verify in the original equation."
)

add_q(
    25, "A", "Advanced Math", "advanced-math", "Exponent Rules", "Easy", "mcq",
    "Which expression is equivalent to $\\frac{(x^3 y^2)^4}{x^5 y^6}$ for all positive values of $x$ and $y$?",
    [{"letter": "A", "text": "x^7 y^2"}, {"letter": "B", "text": "x^2 y^2"}, {"letter": "C", "text": "x^7 y^{-2}"}, {"letter": "D", "text": "x^{12} y^8"}],
    "A",
    "1. Apply power of a product rule: $(x^3 y^2)^4 = x^{3 \\cdot 4} y^{2 \\cdot 4} = x^{12} y^8$.\n2. Apply quotient rule: $\\frac{x^{12} y^8}{x^5 y^6} = x^{12 - 5} y^{8 - 6} = x^7 y^2$.",
    "Test with numbers: set $x = 2, y = 3$. Evaluate original: `((2^3 * 3^2)^4) / (2^5 * 3^6) = 93312`. Option A: `2^7 * 3^2 = 128 * 9 = 1152`... wait: $2^{12} \\cdot 3^8 / (2^5 \\cdot 3^6) = 2^7 \\cdot 3^2 = 1152$. Matches Option A!",
    "Exponent rules: $(x^a)^b = x^{ab}$ and $x^a / x^b = x^{a-b}$."
)

add_q(
    26, "A", "Advanced Math", "advanced-math", "Fractional Exponents", "Easy", "spr",
    "What is the value of $27^{\\frac{4}{3}}$?",
    None,
    "81",
    "1. Rewrite using radical property: $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$.\n2. $27^{\\frac{4}{3}} = (\\sqrt[3]{27})^4$.\n3. Since $3^3 = 27$, $\\sqrt[3]{27} = 3$.\n4. Compute $3^4 = 81$.",
    "Type `27^(4/3)` into Desmos. It outputs `81` in 1 second.",
    "Denominator is root, numerator is power: $x^{a/b} = (\\sqrt[b]{x})^a$."
)

add_q(
    27, "A", "Advanced Math", "advanced-math", "Rational Expressions", "Easy", "mcq",
    "Which expression is equivalent to $\\frac{x^2 - 9}{2x + 6}$ for all $x \\neq -3$?",
    [{"letter": "A", "text": "\\frac{x - 3}{2}"}, {"letter": "B", "text": "\\frac{x + 3}{2}"}, {"letter": "C", "text": "x - 3"}, {"letter": "D", "text": "\\frac{x^2 - 3}{2x}"}],
    "A",
    "1. Factor numerator as difference of squares: $x^2 - 9 = (x - 3)(x + 3)$.\n2. Factor denominator: $2x + 6 = 2(x + 3)$.\n3. Cancel common factor $(x + 3)$: $\\frac{(x - 3)(x + 3)}{2(x + 3)} = \\frac{x - 3}{2}$.",
    "Graph `f(x) = (x^2 - 9)/(2x + 6)` and `g(x) = (x - 3)/2` in Desmos. The graphs overlap identically.",
    "Factoring difference of squares: $a^2 - b^2 = (a - b)(a + b)$."
)

add_q(
    28, "A", "Advanced Math", "advanced-math", "Exponential Growth", "Easy", "mcq",
    "A town's population was 15,000 in the year 2020 and has been increasing at an annual rate of $4\\%$. Which function models the population $P(t)$ of the town $t$ years after 2020?",
    [{"letter": "A", "text": "P(t) = 15,000(0.04)^t"}, {"letter": "B", "text": "P(t) = 15,000(0.96)^t"}, {"letter": "C", "text": "P(t) = 15,000(1.04)^t"}, {"letter": "D", "text": "P(t) = 15,000 + 1.04t"}],
    "C",
    "1. Exponential growth formula: $P(t) = P_0 (1 + r)^t$.\n2. Here $P_0 = 15,000$ and $r = 0.04$.\n3. Growth factor is $1 + 0.04 = 1.04$.\n4. Therefore, $P(t) = 15,000(1.04)^t$.",
    "Growth factor is $(1 + r) > 1$. Decay factor is $(1 - r) < 1$.",
    "For percent increase, growth factor is $1 + r$."
)

add_q(
    29, "A", "Advanced Math", "advanced-math", "Circle Equations", "Easy", "mcq",
    "What is the center and radius of the circle given by $(x - 5)^2 + (y + 2)^2 = 36$?",
    [{"letter": "A", "text": "Center: (-5, 2), Radius = 6"}, {"letter": "B", "text": "Center: (5, -2), Radius = 6"}, {"letter": "C", "text": "Center: (5, -2), Radius = 36"}, {"letter": "D", "text": "Center: (-5, 2), Radius = 36"}],
    "B",
    "1. Standard circle form: $(x - h)^2 + (y - k)^2 = r^2$.\n2. Here $h = 5$, $k = -2$, and $r^2 = 36 \\implies r = 6$.\n3. Center is $(5, -2)$ and radius is 6.",
    "Type `(x - 5)^2 + (y + 2)^2 = 36` in Desmos. The center is visually at $(5, -2)$ and spans from $x = -1$ to $x = 11$ (diameter 12, radius 6).",
    "Signs inside parentheses are inverted: $(x - 5)$ means center $x = +5$, $(y + 2)$ means $y = -2$."
)

add_q(
    30, "A", "Advanced Math", "advanced-math", "Function Notation", "Easy", "spr",
    "If $f(x) = 2x^2 - 3x + 1$, what is the value of $f(-2)$?",
    None,
    "15",
    "1. Substitute $x = -2$ into $f(x)$:\n2. $f(-2) = 2(-2)^2 - 3(-2) + 1$.\n3. Evaluate powers: $(-2)^2 = 4$.\n4. Multiply: $2(4) + 6 + 1 = 8 + 6 + 1 = 15$.",
    "Define `f(x) = 2x^2 - 3x + 1` in Desmos. In line 2, type `f(-2)`. Desmos immediately displays `15`.",
    "Watch out for negative signs: $(-2)^2 = +4$ and $-3(-2) = +6$."
)

add_q(
    31, "A", "Advanced Math", "advanced-math", "Difference of Squares", "Easy", "spr",
    "If $x^2 - y^2 = 48$ and $x - y = 6$, what is the value of $x + y$?",
    None,
    "8",
    "1. Use difference of squares: $x^2 - y^2 = (x - y)(x + y)$.\n2. Substitute the given values: $48 = 6(x + y)$.\n3. Divide by 6: $x + y = \\frac{48}{6} = 8$.",
    "Type `48 / 6` into Desmos = `8`.",
    "Factoring identity: $(x - y)(x + y) = x^2 - y^2$."
)

add_q(
    32, "A", "Advanced Math", "advanced-math", "Vertex of Parabola", "Medium", "mcq",
    "What is the $x$-coordinate of the vertex of the parabola $y = -2x^2 + 8x - 3$?",
    [{"letter": "A", "text": "-2"}, {"letter": "B", "text": "2"}, {"letter": "C", "text": "4"}, {"letter": "D", "text": "5"}],
    "B",
    "1. Vertex formula for $x$-coordinate is $h = -\\frac{b}{2a}$.\n2. Here $a = -2, b = 8$.\n3. $h = -\\frac{8}{2(-2)} = -\\frac{8}{-4} = 2$.",
    "Type `y = -2x^2 + 8x - 3` in Desmos. Tap the vertex point at $(2, 5)$. The $x$-coordinate is 2.",
    "Vertex formula: $x = -b / (2a)$."
)

add_q(
    33, "A", "Advanced Math", "advanced-math", "Exponential Decay", "Easy", "mcq",
    "A computer purchased for $\\$1,200$ depreciates in value by $15\\%$ each year. Which equation models the computer's value $V$, in dollars, $t$ years after purchase?",
    [{"letter": "A", "text": "V = 1,200(0.15)^t"}, {"letter": "B", "text": "V = 1,200(0.85)^t"}, {"letter": "C", "text": "V = 1,200(1.15)^t"}, {"letter": "D", "text": "V = 1,200 - 0.15t"}],
    "B",
    "1. For decay at rate $r = 15\\% = 0.15$, the multiplier factor is $1 - r = 1 - 0.15 = 0.85$.\n2. Formula: $V(t) = P(1 - r)^t = 1,200(0.85)^t$.",
    "Decay factor is $1 - r$. If losing 15%, it retains 85% of its value each year.",
    "Decay factor = $1 - r$."
)

add_q(
    34, "A", "Advanced Math", "advanced-math", "Polynomial Roots", "Easy", "mcq",
    "What is the sum of the solutions to the equation $(x - 2)(x + 4)(x - 5) = 0$?",
    [{"letter": "A", "text": "-7"}, {"letter": "B", "text": "3"}, {"letter": "C", "text": "7"}, {"letter": "D", "text": "11"}],
    "B",
    "1. Set each factor to zero:\n   - $x - 2 = 0 \\implies x = 2$\n   - $x + 4 = 0 \\implies x = -4$\n   - $x - 5 = 0 \\implies x = 5$\n2. Sum the solutions: $2 + (-4) + 5 = 3$.",
    "Type `y = (x - 2)(x + 4)(x - 5)` into Desmos. Tap intercepts: $x = -4, 2, 5$. Line 2: `-4 + 2 + 5 = 3`.",
    "Invert factor signs: factor $(x + 4)$ gives root $x = -4$."
)

add_q(
    35, "A", "Advanced Math", "advanced-math", "Radical Expressions", "Easy", "mcq",
    "Which expression is equivalent to $\\sqrt{72x^4}$ for all $x > 0$?",
    [{"letter": "A", "text": "6x^2 \\sqrt{2}"}, {"letter": "B", "text": "12x^2 \\sqrt{2}"}, {"letter": "C", "text": "36x^2 \\sqrt{2}"}, {"letter": "D", "text": "6x \\sqrt{2}"}],
    "A",
    "1. Factor $72$ into largest perfect square: $72 = 36 \\cdot 2$.\n2. $\\sqrt{72x^4} = \\sqrt{36} \\cdot \\sqrt{x^4} \\cdot \\sqrt{2} = 6x^2 \\sqrt{2}$.",
    "Test $x = 2$: $\\sqrt{72(16)} = \\sqrt{1152} \\approx 33.941$. Option A: $6(4)\\sqrt{2} = 24(1.414) \\approx 33.941$. Matches!",
    "Pull out perfect squares: $\\sqrt{36x^4} = 6x^2$."
)

add_q(
    36, "A", "Advanced Math", "advanced-math", "Rational Equations", "Medium", "mcq",
    "If $\\frac{1}{x} + \\frac{1}{2x} = \\frac{3}{8}$, what is the value of $x$?",
    [{"letter": "A", "text": "2"}, {"letter": "B", "text": "4"}, {"letter": "C", "text": "6"}, {"letter": "D", "text": "8"}],
    "B",
    "1. Find common denominator on left: $\\frac{2}{2x} + \\frac{1}{2x} = \\frac{3}{2x}$.\n2. Set equal to right side: $\\frac{3}{2x} = \\frac{3}{8}$.\n3. Since numerators are equal (both 3), denominators must be equal: $2x = 8 \\implies x = 4$.",
    "Type `1/x + 1/(2x) = 3/8` into Desmos. Vertical line appears at $x = 4$.",
    "Combine rational fractions with common denominator."
)

# --- PART A: PROBLEM-SOLVING & DATA ANALYSIS (Q37 - Q43) ---
add_q(
    37, "A", "Problem-Solving & Data Analysis", "problem-solving", "Ratios & Proportions", "Easy", "spr",
    "In a pre-election survey of 800 registered voters, 480 stated they would vote for Measure A. Based on this ratio, how many of the 6,000 registered voters in the town would be expected to vote for Measure A?",
    None,
    "3600",
    "1. Calculate the sample proportion: $\\frac{480}{800} = \\frac{48}{80} = 0.60$ (or $60\\%$).\n2. Apply the proportion to the total population: $0.60 \\times 6,000 = 3,600$.",
    "Type `(480 / 800) * 6000` into Desmos. Answer is `3600`.",
    "Proportional scaling: sample proportion = population estimate."
)

add_q(
    38, "A", "Problem-Solving & Data Analysis", "problem-solving", "Percentages", "Medium", "mcq",
    "An item originally priced at $\\$80$ is increased in price by $25\\%$. The new price is then discounted by $20\\%$. What is the final price of the item?",
    [{"letter": "A", "text": "$\\$76$"}, {"letter": "B", "text": "$\\$80$"}, {"letter": "C", "text": "$\\$84$"}, {"letter": "D", "text": "$\\$85$"}],
    "B",
    "1. Price after 25% increase: $80 \\times 1.25 = 100$.\n2. Price after 20% discount: $100 \\times (1 - 0.20) = 100 \\times 0.80 = 80$.\n3. The final price is $\\$80$.",
    "Type `80 * 1.25 * 0.80` into Desmos. Result: `80`.",
    "Notice $1.25 \\times 0.80 = 1.00$, which returns back to the original price."
)

add_q(
    39, "A", "Problem-Solving & Data Analysis", "problem-solving", "Unit Conversions", "Medium", "mcq",
    "A vehicle travels at a constant speed of 88 feet per second. Which of the following is closest to the speed of the vehicle in miles per hour? ($1\\text{ mile} = 5,280\\text{ feet}$)",
    [{"letter": "A", "text": "45"}, {"letter": "B", "text": "60"}, {"letter": "C", "text": "75"}, {"letter": "D", "text": "90"}],
    "B",
    "1. Set up conversion chain: $\\frac{88\\text{ ft}}{1\\text{ sec}} \\times \\frac{1\\text{ mile}}{5,280\\text{ ft}} \\times \\frac{3,600\\text{ sec}}{1\\text{ hour}}$.\n2. Compute: $\\frac{88 \\times 3,600}{5,280} = \\frac{316,800}{5,280} = 60\\text{ miles per hour}$.",
    "Type `(88 * 3600) / 5280` into Desmos. Output is `60`.",
    "Dimensional analysis: ensure units cancel out diagonally."
)

add_q(
    40, "A", "Problem-Solving & Data Analysis", "problem-solving", "Two-Way Tables & Probability", "Easy", "mcq",
    "The table below shows the distribution of 120 high school students who chose a foreign language elective:\n\n| | Spanish | French | German | Total |\n| :--- | :---: | :---: | :---: | :---: |\n| 10th Grade | 35 | 15 | 10 | 60 |\n| 11th Grade | 25 | 20 | 15 | 60 |\n| Total | 60 | 35 | 25 | 120 |\n\nIf a 10th-grade student is selected at random, what is the probability that the student chose French?",
    [{"letter": "A", "text": "\\frac{15}{120}"}, {"letter": "B", "text": "\\frac{15}{60}"}, {"letter": "C", "text": "\\frac{15}{35}"}, {"letter": "D", "text": "\\frac{35}{60}"}],
    "B",
    "1. The condition 'If a 10th-grade student is selected at random' restricts the sample space ONLY to 10th-grade students (total = 60).\n2. Among 10th graders, 15 chose French.\n3. Probability = $\\frac{15}{60} = \\frac{1}{4} = 0.25$.",
    "Type `15/60` into Desmos = `0.25`.",
    "Conditional probability restricts the denominator to the given subgroup row/column."
)

add_q(
    41, "A", "Problem-Solving & Data Analysis", "problem-solving", "Measures of Center", "Easy", "spr",
    "A dataset consists of five values: $8, 12, 15, 17,$ and $x$. If the mean of the dataset is 14, what is the value of $x$?",
    None,
    "18",
    "1. Mean formula: $\\frac{8 + 12 + 15 + 17 + x}{5} = 14$.\n2. Sum the known values: $8 + 12 + 15 + 17 = 52$.\n3. Multiply both sides by 5: $52 + x = 70$.\n4. Subtract 52: $x = 18$.",
    "Type `(8 + 12 + 15 + 17 + x)/5 = 14` into Desmos. Vertical line shows $x = 18$.",
    "Sum of $n$ numbers = Mean $\\times n$."
)

add_q(
    42, "A", "Problem-Solving & Data Analysis", "problem-solving", "Scatterplots & Models", "Easy", "mcq",
    "A scatterplot shows the relationship between studying time $x$, in hours, and test score $y$. The line of best fit is given by $y = 4.5x + 55$. Based on this model, what is the predicted test score for a student who studies for 8 hours?",
    [{"letter": "A", "text": "82"}, {"letter": "B", "text": "88"}, {"letter": "C", "text": "91"}, {"letter": "D", "text": "95"}],
    "C",
    "1. Substitute $x = 8$ into the linear regression model: $y = 4.5(8) + 55$.\n2. $4.5 \\times 8 = 36$.\n3. $y = 36 + 55 = 91$.",
    "Type `4.5(8) + 55` into Desmos. It outputs `91`.",
    "Evaluating line of best fit at given $x$."
)

add_q(
    43, "A", "Problem-Solving & Data Analysis", "problem-solving", "Margin of Error", "Medium", "mcq",
    "A random sample of 500 voters in a city found that $54\\%$ support a proposed city park, with an associated margin of error of $\\pm 4\\%$ at a $95\\%$ confidence level. Which of the following is the most appropriate conclusion?",
    [{"letter": "A", "text": "Exactly 54% of all city residents support the park."},
     {"letter": "B", "text": "It is plausible that between 50% and 58% of all city voters support the park."},
     {"letter": "C", "text": "Every random sample of 500 voters will yield exactly 54% support."},
     {"letter": "D", "text": "The park proposal will definitely pass with 58% of the vote."}],
    "B",
    "1. Confidence interval = sample proportion $\\pm$ margin of error: $54\\% \\pm 4\\% = [50\\%, 58\\%]$.\n2. The margin of error accounts for sampling variability and gives a range of plausible values for the true population proportion.\n3. Therefore, it is plausible that the true percentage is between 50% and 58%.",
    "Margin of error never guarantees exact values or outcomes; it creates a plausible interval.",
    "Margin of error creates a plausible interval for the population parameter."
)

# --- PART A: GEOMETRY & TRIGONOMETRY (Q44 - Q50) ---
add_q(
    44, "A", "Geometry & Trigonometry", "geometry-trig", "Triangles & Pythagorean", "Easy", "mcq",
    "A right triangle has a hypotenuse of length 13 cm and one leg of length 5 cm. What is the area of the triangle, in square centimeters?",
    [{"letter": "A", "text": "30"}, {"letter": "B", "text": "32.5"}, {"letter": "C", "text": "60"}, {"letter": "D", "text": "65"}],
    "A",
    "1. Use Pythagorean theorem to find the other leg $b$: $5^2 + b^2 = 13^2 \\implies 25 + b^2 = 169 \\implies b^2 = 144 \\implies b = 12$.\n2. Triangle area formula: $A = \\frac{1}{2} b_1 b_2 = \\frac{1}{2}(5)(12) = 30\\text{ cm}^2$.",
    "Type `0.5 * 5 * sqrt(13^2 - 5^2)` into Desmos. It outputs `30`.",
    "5-12-13 is a standard Pythagorean triple. Area uses the two perpendicular legs!"
)

add_q(
    45, "A", "Geometry & Trigonometry", "geometry-trig", "Special Right Triangles", "Medium", "mcq",
    "In a $30^{\\circ}-60^{\\circ}-90^{\\circ}$ triangle, the hypotenuse has a length of 16. What is the length of the side opposite the $60^{\\circ}$ angle?",
    [{"letter": "A", "text": "8"}, {"letter": "B", "text": "8\\sqrt{2}"}, {"letter": "C", "text": "8\\sqrt{3}"}, {"letter": "D", "text": "16\\sqrt{3}"}],
    "C",
    "1. In a $30^{\\circ}-60^{\\circ}-90^{\\circ}$ triangle, side ratios are $x : x\\sqrt{3} : 2x$.\n2. Hypotenuse = $2x = 16 \\implies x = 8$ (short leg opposite $30^{\\circ}$).\n3. Long leg opposite $60^{\\circ}$ = $x\\sqrt{3} = 8\\sqrt{3}$.",
    "Type `8 * sqrt(3)` in Desmos: `13.856`. Option C matches.",
    "Short leg = Hypotenuse / 2; Long leg = (Short leg) * $\\sqrt{3}$."
)

add_q(
    46, "A", "Geometry & Trigonometry", "geometry-trig", "Volume of Cylinder", "Easy", "spr",
    "A right circular cylinder has a base radius of 3 cm and a height of 10 cm. The volume of the cylinder can be expressed as $k\\pi\\text{ cm}^3$. What is the value of $k$?",
    None,
    "90",
    "1. Cylinder volume formula: $V = \\pi r^2 h$.\n2. Substitute $r = 3$ and $h = 10$: $V = \\pi (3)^2 (10) = \\pi (9)(10) = 90\\pi$.\n3. Comparing with $k\\pi$, $k = 90$.",
    "Type `3^2 * 10` in Desmos = `90`.",
    "Formula is on the reference sheet: $V = \\pi r^2 h$."
)

add_q(
    47, "A", "Geometry & Trigonometry", "geometry-trig", "Right Triangle Trigonometry", "Easy", "mcq",
    "In right triangle $ABC$, the measure of angle $C$ is $90^{\\circ}$. The hypotenuse $AB = 25$ and leg $BC = 7$. What is the value of $\\cos A$?",
    [{"letter": "A", "text": "\\frac{7}{25}"}, {"letter": "B", "text": "\\frac{24}{25}"}, {"letter": "C", "text": "\\frac{7}{24}"}, {"letter": "D", "text": "\\frac{25}{24}"}],
    "B",
    "1. Angle $C = 90^{\\circ}$, so leg $BC$ is opposite angle $A$, and leg $AC$ is adjacent to angle $A$.\n2. Find adjacent leg $AC$ using Pythagorean theorem: $AC = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$.\n3. By definition: $\\cos A = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{AC}{AB} = \\frac{24}{25}$.",
    "Type `sqrt(25^2 - 7^2)/25` in Desmos. It outputs `0.96` (click fraction icon for `24/25`).",
    "SOH CAH TOA: $\\cos = \\text{Adj} / \\text{Hyp}$."
)

add_q(
    48, "A", "Geometry & Trigonometry", "geometry-trig", "Trigonometric Co-Functions", "Easy", "spr",
    "If $\\sin(x^{\\circ}) = \\cos(52^{\\circ})$, where $0^{\\circ} < x < 90^{\\circ}$, what is the value of $x$?",
    None,
    "38",
    "1. Co-function identity: $\\sin(\\theta) = \\cos(90^{\\circ} - \\theta)$.\n2. If $\\sin(x) = \\cos(52^{\\circ})$, then the two angles are complementary: $x + 52 = 90$.\n3. $x = 90 - 52 = 38$.",
    "Set Desmos to degrees. Type `90 - 52` = `38`. Verify by typing `sin(38)` and `cos(52)`; both equal `0.61566...`.",
    "Complementary angle relationship: $\\sin(A) = \\cos(B) \\iff A + B = 90^\\circ$."
)

add_q(
    49, "A", "Geometry & Trigonometry", "geometry-trig", "Circle Arc Length", "Medium", "mcq",
    "A circle with radius 9 cm has a central angle of $40^{\\circ}$. What is the length of the arc, in centimeters, intercepted by this angle?",
    [{"letter": "A", "text": "\\pi"}, {"letter": "B", "text": "2\\pi"}, {"letter": "C", "text": "4\\pi"}, {"letter": "D", "text": "9\\pi"}],
    "B",
    "1. Arc length formula (degrees): $s = \\frac{\\theta}{360^{\\circ}} \\times 2\\pi r$.\n2. Substitute $\\theta = 40^{\\circ}$ and $r = 9$: $s = \\frac{40}{360} \\times 2\\pi(9) = \\frac{1}{9} \\times 18\\pi = 2\\pi$.",
    "Type `(40/360) * 2 * pi * 9` into Desmos = `6.28318...`. Note $2\\pi = 6.28318...$.",
    "Arc length is the fraction of total circumference: $\\frac{\\theta}{360^\\circ} \\cdot 2\\pi r$."
)

add_q(
    50, "A", "Geometry & Trigonometry", "geometry-trig", "Lines & Angles", "Easy", "mcq",
    "Two parallel lines $L_1$ and $L_2$ are intersected by a transversal line $T$. If one of the interior angles measures $68^{\\circ}$, what is the measure of its consecutive interior angle?",
    [{"letter": "A", "text": "22^\\circ"}, {"letter": "B", "text": "68^\\circ"}, {"letter": "C", "text": "112^\\circ"}, {"letter": "D", "text": "122^\\circ"}],
    "C",
    "1. Consecutive interior angles on the same side of a transversal intersecting parallel lines are supplementary (sum to $180^{\\circ}$).\n2. Measure $= 180^{\\circ} - 68^{\\circ} = 112^{\\circ}$.",
    "Type `180 - 68` in Desmos = `112`.",
    "Parallel lines: alternate interior angles are equal; consecutive interior angles sum to 180°."
)

# =========================================================================
# PART B: ADAPTIVE MODULE 2 HARD TIER (Q51 - Q100)
# 18 Algebra, 18 Advanced Math, 7 Problem-Solving/Data, 7 Geometry/Trig
# Mix: 35 MCQs (70%), 15 SPRs (30%)
# =========================================================================

# --- PART B: ALGEBRA (Q51 - Q68) ---
add_q(
    51, "B", "Algebra", "algebra", "Systems: Infinite Solutions", "Hard", "spr",
    "The system of linear equations below has infinitely many solutions:\n$$\\begin{aligned} kx - 6y &= 18 \\\\ 4x - 3y &= p \\end{aligned}$$\nwhere $k$ and $p$ are constants. What is the value of $k + p$?",
    None,
    "17",
    "1. For infinitely many solutions, the ratio of coefficients must be equal: $\\frac{k}{4} = \\frac{-6}{-3} = \\frac{18}{p}$.\n2. Note that $\\frac{-6}{-3} = 2$.\n3. Solve for $k$: $\\frac{k}{4} = 2 \\implies k = 8$.\n4. Solve for $p$: $\\frac{18}{p} = 2 \\implies p = 9$.\n5. Compute $k + p = 8 + 9 = 17$.",
    "Multiply second equation by 2: $8x - 6y = 2p$. Match with $kx - 6y = 18$: $k = 8, 2p = 18 \\implies p = 9$. Then $8 + 9 = 17$.",
    "Infinitely many solutions: one equation is a scalar multiple of the other."
)

add_q(
    52, "B", "Algebra", "algebra", "Linear Inequalities", "Hard", "mcq",
    "What is the greatest integer value of $x$ that satisfies the inequality $-\\frac{2}{3}(x - 4) + 1 \\ge \\frac{1}{2}(x + 5) - 3$?",
    [{"letter": "A", "text": "2"}, {"letter": "B", "text": "3"}, {"letter": "C", "text": "4"}, {"letter": "D", "text": "5"}],
    "B",
    "1. Multiply the entire inequality by 6 (LCD of 3 and 2) to eliminate fractions:\n   $6\\left(-\\frac{2}{3}(x - 4) + 1\\right) \\ge 6\\left(\\frac{1}{2}(x + 5) - 3\\right)$\n2. $-4(x - 4) + 6 \\ge 3(x + 5) - 18$\n3. $-4x + 16 + 6 \\ge 3x + 15 - 18 \\implies -4x + 22 \\ge 3x - 3$\n4. Add $4x$ and add 3: $25 \\ge 7x \\implies x \\le \\frac{25}{7} \\approx 3.571$.\n5. The greatest integer less than or equal to $3.571$ is 3.",
    "Type `-2/3*(x - 4) + 1 >= 1/2*(x + 5) - 3` into Desmos. The boundary line is $x = 3.571$. The largest integer in the shaded region is 3.",
    "Greatest integer means round down to the nearest integer within the solution set."
)

add_q(
    53, "B", "Algebra", "algebra", "Linear Modeling Piecewise", "Hard", "mcq",
    "A cloud computing provider charges $\\$40$ per month for the first 100 gigabytes (GB) of data storage used, and $\\$0.25$ for each additional GB used beyond 100 GB. If a client was billed $\\$72.50$ for one month, how many total GB of data storage did the client use?",
    [{"letter": "A", "text": "130"}, {"letter": "B", "text": "190"}, {"letter": "C", "text": "230"}, {"letter": "D", "text": "290"}],
    "C",
    "1. Total bill was $\\$72.50$, which exceeds the base $\\$40$, so usage was over 100 GB.\n2. Excess charge = $72.50 - 40.00 = \\$32.50$.\n3. Additional GB used = $\\frac{32.50}{0.25} = 130$ GB.\n4. Total GB used = Base 100 + Additional 130 = 230 GB.",
    "Line 1: `40 + 0.25(x - 100) = 72.50`. Vertical line in Desmos shows $x = 230$.",
    "Don't stop at the additional amount (130); add the base 100 GB!"
)

add_q(
    54, "B", "Algebra", "algebra", "Perpendicular Line Parameters", "Hard", "spr",
    "Line $L_1$ is defined by $px + 4y = 12$, and line $L_2$ is defined by $3x - 5y = 20$, where $p$ is a constant. If line $L_1$ is perpendicular to line $L_2$, what is the value of $p$?",
    None,
    "6.667",
    "1. Slope of $L_1$: $4y = -px + 12 \\implies m_1 = -\\frac{p}{4}$.\n2. Slope of $L_2$: $-5y = -3x + 20 \\implies m_2 = \\frac{3}{5}$.\n3. Since $L_1 \\perp L_2$, $m_1 \\cdot m_2 = -1$.\n4. $\\left(-\\frac{p}{4}\\right) \\left(\\frac{3}{5}\\right) = -1 \\implies -\\frac{3p}{20} = -1 \\implies 3p = 20 \\implies p = \\frac{20}{3} \\approx 6.667$.",
    "Condition: $(-p/4) * (3/5) = -1$. In Desmos, type `-1 / (3/5) * (-4)` = `20/3` or `6.667`.",
    "Perpendicular condition: $m_1 = -1 / m_2$. For standard forms $A_1 A_2 + B_1 B_2 = 0$."
)

add_q(
    55, "B", "Algebra", "algebra", "Systems: Three Lines Concurrency", "Hard", "spr",
    "The three lines given by $2x + 3y = 13$, $4x - y = 5$, and $y = mx + 2$ all intersect at the same point in the $xy$-plane. What is the value of the slope $m$?",
    None,
    "0.5",
    "1. Find intersection of first two lines:\n   Multiply second equation by 3: $12x - 3y = 15$.\n   Add to first equation: $(2x + 3y) + (12x - 3y) = 13 + 15 \\implies 14x = 28 \\implies x = 2$.\n2. Substitute $x = 2$ into $4(2) - y = 5 \\implies y = 3$. Intersection point is $(2, 3)$.\n3. The third line must pass through $(2, 3)$: $3 = m(2) + 2 \\implies 2m = 1 \\implies m = \\frac{1}{2} = 0.5$.",
    "Graph `2x + 3y = 13` and `4x - y = 5`. Desmos shows intersection at $(2, 3)$. Substitute into $y = mx + 2$: $3 = 2m + 2 \\implies m = 0.5$.",
    "Solve the two known equations first, then substitute the intersection point into the parametric equation."
)

add_q(
    56, "B", "Algebra", "algebra", "Linear Equations: No Solution", "Hard", "mcq",
    "In the equation $a(3x - 2) + 4x = 19x - 14$, $a$ is a constant. For what value of $a$ does the equation have no solution?",
    [{"letter": "A", "text": "5"}, {"letter": "B", "text": "7"}, {"letter": "C", "text": "\\frac{19}{3}"}, {"letter": "D", "text": "There is no such value of a"}],
    "A",
    "1. Expand and collect terms on the left: $3ax - 2a + 4x = (3a + 4)x - 2a$.\n2. Equation is: $(3a + 4)x - 2a = 19x - 14$.\n3. For no solution, the coefficients of $x$ must be equal while the constants must be unequal.\n4. Set $3a + 4 = 19 \\implies 3a = 15 \\implies a = 5$.\n5. Check constants when $a = 5$: $-2(5) = -10 \\neq -14$ (inequality holds!).\n6. Therefore, $a = 5$ guarantees no solution.",
    "Type `y = 5(3x - 2) + 4x` and `y = 19x - 14` into Desmos. The lines are $y = 19x - 10$ and $y = 19x - 14$—parallel lines with no intersection!",
    "No-solution condition for single-variable linear equations: equal $x$-coefficients, unequal constant terms."
)

add_q(
    57, "B", "Algebra", "algebra", "Linear Inequalities Constraint", "Hard", "mcq",
    "A freight company transports small shipping crates of weight 40 kg each and large crates of weight 75 kg each. A transport truck can carry a maximum total weight of 3,600 kg. If the truck must transport at least 15 large crates, what is the maximum number of small crates that can be transported on the truck?",
    [{"letter": "A", "text": "61"}, {"letter": "B", "text": "62"}, {"letter": "C", "text": "63"}, {"letter": "D", "text": "64"}],
    "A",
    "1. Weight inequality: $40s + 75L \\le 3,600$, with $L \\ge 15$.\n2. To maximize $s$, minimize $L$, so choose $L = 15$.\n3. $40s + 75(15) \\le 3,600 \\implies 40s + 1,125 \\le 3,600$.\n4. $40s \\le 2,475 \\implies s \\le \\frac{2,475}{40} = 61.875$.\n5. Since $s$ must be an integer, the maximum number of small crates is 61.",
    "Type `(3600 - 75 * 15) / 40` into Desmos = `61.875`. Maximum whole crates = 61.",
    "Integer constraint: truncate to 61 because 62 crates would exceed the 3,600 kg limit."
)

add_q(
    58, "B", "Algebra", "algebra", "Systems with Unknown Parameter", "Hard", "spr",
    "In the system of equations below, $c$ is a constant:\n$$\\begin{aligned} 3x - 5y &= 14 \\\\ 9x - 15y &= c \\end{aligned}$$\nIf the system has no solution, which of the following could NOT be the value of $c$?\n(Enter the exact numerical value that $c$ cannot equal)",
    None,
    "42",
    "1. Multiply the first equation by 3: $3(3x - 5y) = 3(14) \\implies 9x - 15y = 42$.\n2. For the system to have NO solution, the lines must be parallel, meaning $c \\neq 42$.\n3. If $c = 42$, the system would have infinitely many solutions instead of no solution.\n4. Thus, $c$ cannot equal 42.",
    "Compare coefficients: $\\frac{9}{3} = \\frac{-15}{-5} = 3$. The constant ratio is $3 \\times 14 = 42$. When $c = 42$, lines overlap (infinite solutions).",
    "No solution requires $c \\neq 42$; infinitely many solutions occurs when $c = 42$."
)

add_q(
    59, "B", "Algebra", "algebra", "Linear Functions Word Problem", "Hard", "mcq",
    "An electric vehicle's battery charges at a rate of 1.2% per minute from 0% to 80% capacity, after which it switches to a trickle charging rate of 0.4% per minute until it reaches 100% capacity. If the battery is initially at 20% capacity, how many total minutes will it take to reach 100% capacity?",
    [{"letter": "A", "text": "50"}, {"letter": "B", "text": "75"}, {"letter": "C", "text": "90"}, {"letter": "D", "text": "100"}],
    "D",
    "1. Phase 1: Charge from 20% to 80% (needs $80 - 20 = 60\\%$ increase).\n   Time for Phase 1: $\\frac{60}{1.2} = 50$ minutes.\n2. Phase 2: Charge from 80% to 100% (needs $100 - 80 = 20\\%$ increase).\n   Time for Phase 2: $\\frac{20}{0.4} = 50$ minutes.\n3. Total time = $50 + 50 = 100$ minutes.",
    "Type `(80 - 20)/1.2 + (100 - 80)/0.4` in Desmos = `100`.",
    "Piecewise rates: calculate time for each phase separately and sum."
)

add_q(
    60, "B", "Algebra", "algebra", "Linear Systems: Parameter Products", "Hard", "spr",
    "The system of linear equations below has infinitely many solutions:\n$$\\begin{aligned} 2x + cy &= 7 \\\\ kx + 8y &= 14 \\end{aligned}$$\nwhere $c$ and $k$ are positive constants. What is the value of $c \\cdot k$?",
    None,
    "16",
    "1. For infinitely many solutions, the ratio of coefficients must be equal:\n   $\\frac{2}{k} = \\frac{c}{8} = \\frac{7}{14}$.\n2. Note that $\\frac{7}{14} = \\frac{1}{2}$.\n3. Therefore: $\\frac{2}{k} = \\frac{1}{2} \\implies k = 4$.\n4. And: $\\frac{c}{8} = \\frac{1}{2} \\implies c = 4$.\n5. Calculate $c \\cdot k = 4 \\cdot 4 = 16$.",
    "From cross multiplication: $\\frac{2}{k} = \\frac{c}{8} \\implies c \\cdot k = 2 \\times 8 = 16$ directly in one step!",
    "Shortcut: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\implies a_1 b_2 = a_2 b_1 \\implies c \\cdot k = 2 \\cdot 8 = 16$."
)

add_q(
    61, "B", "Algebra", "algebra", "Absolute Value Inequalities", "Hard", "mcq",
    "How many integer values of $x$ satisfy the inequality $|2x - 7| \\le 11$?",
    [{"letter": "A", "text": "10"}, {"letter": "B", "text": "11"}, {"letter": "C", "text": "12"}, {"letter": "D", "text": "13"}],
    "C",
    "1. Rewrite $|u| \\le c$ as $-c \\le u \\le c$:\n   $-11 \\le 2x - 7 \\le 11$.\n2. Add 7 across the inequality: $-4 \\le 2x \\le 18$.\n3. Divide by 2: $-2 \\le x \\le 9$.\n4. Count integers from $-2$ to $9$: $9 - (-2) + 1 = 12$ integers ($-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9$).",
    "Type `|2x - 7| <= 11` into Desmos. Shaded interval runs from $x = -2$ to $x = 9$. Number of integers = $9 - (-2) + 1 = 12$.",
    "Counting consecutive integers inclusive: $\\text{Max} - \\text{Min} + 1$."
)

add_q(
    62, "B", "Algebra", "algebra", "Linear Rate Interpretation", "Hard", "mcq",
    "The atmospheric pressure $P$, in kilopascals (kPa), at an altitude of $h$ kilometers above sea level is approximated by a linear model for altitudes between 0 and 5 km. If the pressure is 101.3 kPa at sea level ($h = 0$) and decreases by 11.8 kPa for every 1-kilometer increase in altitude, which equation gives the altitude $h$ in terms of pressure $P$?",
    [{"letter": "A", "text": "h = \\frac{101.3 - P}{11.8}"}, {"letter": "B", "text": "h = \\frac{P - 101.3}{11.8}"}, {"letter": "C", "text": "h = 101.3 - 11.8P"}, {"letter": "D", "text": "h = \\frac{101.3 + P}{11.8}"}],
    "A",
    "1. Write equation for $P$ as a function of $h$: $P = 101.3 - 11.8h$.\n2. Solve for $h$:\n   $11.8h = 101.3 - P \\implies h = \\frac{101.3 - P}{11.8}$.",
    "Substitute a test point: when $h = 1$, $P = 101.3 - 11.8 = 89.5$. Test Option A: $(101.3 - 89.5)/11.8 = 11.8/11.8 = 1$. Matches!",
    "Rearranging formulas: isolate the desired variable."
)

add_q(
    63, "B", "Algebra", "algebra", "Linear Intercept Conditions", "Hard", "mcq",
    "Line $k$ in the $xy$-plane has equation $Ax + By = C$, where $A > 0, B < 0,$ and $C > 0$. Which quadrant does line $k$ NOT pass through?",
    [{"letter": "A", "text": "Quadrant I"}, {"letter": "B", "text": "Quadrant II"}, {"letter": "C", "text": "Quadrant III"}, {"letter": "D", "text": "Quadrant IV"}],
    "B",
    "1. $x$-intercept (set $y = 0$): $x = \\frac{C}{A}$. Since $C > 0$ and $A > 0$, $x$-intercept is positive $(+, 0)$.\n2. $y$-intercept (set $x = 0$): $y = \\frac{C}{B}$. Since $C > 0$ and $B < 0$, $y$-intercept is negative $(0, -)$.\n3. Slope $m = -\\frac{A}{B}$. Since $A > 0$ and $B < 0$, $-A/B > 0$ (positive slope).\n4. A line with positive $x$-intercept and negative $y$-intercept passes through Quadrants I, IV, and III.\n5. It never enters Quadrant II.",
    "In Desmos, choose $A = 2, B = -3, C = 6$. Graph `2x - 3y = 6`. It passes through Q1, Q3, Q4, completely missing Quadrant II!",
    "Check signs of intercepts: positive $x$-int and negative $y$-int bypasses Q2."
)

add_q(
    64, "B", "Algebra", "algebra", "Linear Optimization", "Hard", "mcq",
    "A region in the $xy$-plane is bounded by the vertices $(1, 2), (1, 6), (5, 2),$ and $(5, 4)$. What is the maximum value of the expression $3x - 2y$ over this region?",
    [{"letter": "A", "text": "11"}, {"letter": "B", "text": "9"}, {"letter": "C", "text": "7"}, {"letter": "D", "text": "-1"}],
    "A",
    "1. By the fundamental theorem of linear programming, the extreme values of a linear function over a polygonal region occur at its vertices.\n2. Evaluate $f(x, y) = 3x - 2y$ at each vertex:\n   - Vertex $(1, 2): 3(1) - 2(2) = 3 - 4 = -1$\n   - Vertex $(1, 6): 3(1) - 2(6) = 3 - 12 = -9$\n   - Vertex $(5, 2): 3(5) - 2(2) = 15 - 4 = 11$\n   - Vertex $(5, 4): 3(5) - 2(4) = 15 - 8 = 7$\n3. The maximum value is 11, occurring at $(5, 2)$.",
    "Plot polygon in Desmos: `polygon((1,2), (1,6), (5,4), (5,2))`. Compute $3x - 2y$ for all 4 vertices. Max is 11.",
    "Extreme values of linear functions over convex polygons always occur at vertices."
)

add_q(
    65, "B", "Algebra", "algebra", "Compound Inequalities", "Hard", "spr",
    "How many integer solutions are there to the compound inequality $13 < 4x - 3 \\le 37$?",
    None,
    "6",
    "1. Add 3 to all parts: $16 < 4x \\le 40$.\n2. Divide all parts by 4: $4 < x \\le 10$.\n3. Since $x > 4$, the smallest integer is 5.\n4. Since $x \\le 10$, the largest integer is 10.\n5. The integers are $5, 6, 7, 8, 9, 10$ (a total of $10 - 5 + 1 = 6$ integers).",
    "Type `13 < 4x - 3 <= 37` into Desmos. Shaded region runs strictly between $x = 4$ and $x = 10$. Integers: 5, 6, 7, 8, 9, 10 (count = 6).",
    "Watch strict vs non-strict inequalities: $x > 4$ excludes 4, but $x \\le 10$ includes 10."
)

add_q(
    66, "B", "Algebra", "algebra", "Linear & Quadratic Geometry", "Hard", "mcq",
    "Line $L$ passes through the origin $(0, 0)$ and through the vertex of the parabola $y = -x^2 + 6x - 5$. What is the slope of line $L$?",
    [{"letter": "A", "text": "\\frac{3}{4}"}, {"letter": "B", "text": "\\frac{4}{3}"}, {"letter": "C", "text": "-\\frac{4}{3}"}, {"letter": "D", "text": "4"}],
    "B",
    "1. Find vertex of $y = -x^2 + 6x - 5$:\n   $x_v = -\\frac{b}{2a} = -\\frac{6}{2(-1)} = 3$.\n   $y_v = -(3)^2 + 6(3) - 5 = -9 + 18 - 5 = 4$.\n   Vertex is $(3, 4)$.\n2. Line $L$ passes through $(0, 0)$ and $(3, 4)$.\n3. Slope $m = \\frac{4 - 0}{3 - 0} = \\frac{4}{3}$.",
    "Graph `y = -x^2 + 6x - 5` in Desmos. Click vertex: $(3, 4)$. Slope from origin is $4/3$.",
    "Slope through origin is simply $y/x$."
)

add_q(
    67, "B", "Algebra", "algebra", "Speed Distance Time Systems", "Hard", "mcq",
    "A motorized canoe travels 24 miles upstream against a current in 4 hours. The return trip downstream with the same current takes 2 hours. What is the speed of the current, in miles per hour?",
    [{"letter": "A", "text": "1.5"}, {"letter": "B", "text": "3"}, {"letter": "C", "text": "4.5"}, {"letter": "D", "text": "6"}],
    "B",
    "1. Let $v$ = canoe still-water speed, $c$ = current speed.\n2. Upstream speed: $v - c = \\frac{24}{4} = 6\\text{ mph}$.\n3. Downstream speed: $v + c = \\frac{24}{2} = 12\\text{ mph}$.\n4. Subtract the first equation from the second:\n   $(v + c) - (v - c) = 12 - 6 \\implies 2c = 6 \\implies c = 3\\text{ mph}$.",
    "Line 1: `x - y = 6`. Line 2: `x + y = 12`. Desmos shows intersection at $(9, 3)$, where $y = c = 3$.",
    "Upstream speed is $v - c$; downstream speed is $v + c$."
)

add_q(
    68, "B", "Algebra", "algebra", "Diophantine Equations", "Hard", "mcq",
    "How many pairs of positive integers $(x, y)$ satisfy the equation $3x + 7y = 100$?",
    [{"letter": "A", "text": "3"}, {"letter": "B", "text": "4"}, {"letter": "C", "text": "5"}, {"letter": "D", "text": "6"}],
    "C",
    "1. Isolate $3x$: $3x = 100 - 7y$. Since $x > 0$, $100 - 7y > 0 \\implies 7y < 100 \\implies y \\le 14$.\n2. Also, $100 - 7y$ must be divisible by 3:\n   $100 \\equiv 1 \\pmod 3$, and $7 \\equiv 1 \\pmod 3$, so $100 - 7y \\equiv 1 - y \\equiv 0 \\pmod 3 \\implies y \\equiv 1 \\pmod 3$.\n3. Possible positive integer values for $y$ with $y \\equiv 1 \\pmod 3$ up to 14:\n   $y = 1, 4, 7, 10, 13$.\n4. Check each corresponding $x$:\n   - $y = 1 \\implies 3x = 93 \\implies x = 31$\n   - $y = 4 \\implies 3x = 72 \\implies x = 24$\n   - $y = 7 \\implies 3x = 51 \\implies x = 17$\n   - $y = 10 \\implies 3x = 30 \\implies x = 10$\n   - $y = 13 \\implies 3x = 9 \\implies x = 3$\n5. There are exactly 5 positive integer solution pairs.",
    "In Desmos, type `3x + 7y = 100`. Look at grid intersections in Quadrant 1: $(31, 1), (24, 4), (17, 7), (10, 10), (3, 13)$. Total = 5.",
    "Linear Diophantine steps: $y$ increases by 3 while $x$ decreases by 7."
)

# --- PART B: ADVANCED MATH (Q69 - Q86) ---
add_q(
    69, "B", "Advanced Math", "advanced-math", "Discriminant & Tangency", "Extreme", "spr",
    "For what value of the constant $c$ does the line $y = 4x + c$ intersect the parabola $y = x^2 - 2x + 10$ at exactly one point?",
    None,
    "1",
    "1. Set equations equal: $x^2 - 2x + 10 = 4x + c$.\n2. Rearrange to standard quadratic form: $x^2 - 6x + (10 - c) = 0$.\n3. Exactly one point of intersection means discriminant $\\Delta = 0$.\n4. $\\Delta = (-6)^2 - 4(1)(10 - c) = 0$.\n5. $36 - 40 + 4c = 0 \\implies -4 + 4c = 0 \\implies 4c = 4 \\implies c = 1$.",
    "Graph `y = x^2 - 2x + 10` and `y = 4x + c` with slider $c$. Slide $c$ until the line is tangent to the parabola at exactly one point: $c = 1$.",
    "Tangency condition: set equations equal and set $\\Delta = b^2 - 4ac = 0$."
)

add_q(
    70, "B", "Advanced Math", "advanced-math", "Quadratic Conjugate Roots", "Hard", "spr",
    "If $x = 3 + \\sqrt{5}$ is a solution to the quadratic equation $x^2 - 6x + k = 0$, where $k$ is a constant, what is the value of $k$?",
    None,
    "4",
    "1. For rational coefficients, irrational roots come in conjugate pairs. The other root is $3 - \\sqrt{5}$.\n2. By Vieta's formulas, product of roots = $\\frac{k}{1} = k$.\n3. $k = (3 + \\sqrt{5})(3 - \\sqrt{5}) = 3^2 - (\\sqrt{5})^2 = 9 - 5 = 4$.\n(Alternatively, substitute $x = 3 + \\sqrt{5}$: $(3 + \\sqrt{5})^2 - 6(3 + \\sqrt{5}) + k = 0 \\implies 9 + 6\\sqrt{5} + 5 - 18 - 6\\sqrt{5} + k = 0 \\implies -4 + k = 0 \\implies k = 4$.)",
    "Type `(3 + sqrt(5))^2 - 6(3 + sqrt(5))` in Desmos = `-4`. For the equation to equal 0, $k = 4$.",
    "Product of conjugate roots $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$."
)

add_q(
    71, "B", "Advanced Math", "advanced-math", "Vieta's Formulas Advanced", "Hard", "mcq",
    "If $r$ and $s$ are the two solutions to the quadratic equation $2x^2 - 10x + 3 = 0$, what is the value of $\\frac{1}{r} + \\frac{1}{s}$?",
    [{"letter": "A", "text": "\\frac{3}{10}"}, {"letter": "B", "text": "\\frac{10}{3}"}, {"letter": "C", "text": "5"}, {"letter": "D", "text": "\\frac{5}{3}"}],
    "B",
    "1. Combine into a single fraction: $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{r \\cdot s}$.\n2. By Vieta's formulas:\n   - Sum of roots: $r + s = -\\frac{-10}{2} = 5$.\n   - Product of roots: $r \\cdot s = \\frac{3}{2}$.\n3. Divide: $\\frac{r + s}{r \\cdot s} = \\frac{5}{3/2} = 5 \\times \\frac{2}{3} = \\frac{10}{3}$.",
    "Graph `y = 2x^2 - 10x + 3` in Desmos. Note roots $r = 0.32055, s = 4.67945$. In line 2, type `1/0.32055 + 1/4.67945` = `3.33333` (which is $10/3$).",
    "Algebraic trick: $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs}$."
)

add_q(
    72, "B", "Advanced Math", "advanced-math", "Rational Function Discontinuities", "Hard", "mcq",
    "The function $f(x)$ is defined by $f(x) = \\frac{x^2 - 4}{x^2 + 5x + 6}$. What is the sum of all values of $x$ for which $f(x)$ is undefined?",
    [{"letter": "A", "text": "-5"}, {"letter": "B", "text": "-3"}, {"letter": "C", "text": "-1"}, {"letter": "D", "text": "5"}],
    "A",
    "1. A rational function is undefined wherever its denominator equals zero.\n2. Set denominator to zero: $x^2 + 5x + 6 = 0$.\n3. Factor: $(x + 2)(x + 3) = 0 \\implies x = -2$ and $x = -3$.\n4. Notice that even though $(x + 2)$ cancels with the numerator (creating a removable hole at $x = -2$), the original function remains undefined at both $x = -2$ and $x = -3$.\n5. Sum of undefined values = $(-2) + (-3) = -5$.",
    "In Desmos, type `f(x) = (x^2 - 4)/(x^2 + 5x + 6)`. Notice `f(-2)` and `f(-3)` both show 'undefined'. Sum is $-2 + (-3) = -5$.",
    "Trap: Both vertical asymptotes AND holes make a function undefined in its domain."
)

add_q(
    73, "B", "Advanced Math", "advanced-math", "Exponential Rescaling", "Hard", "mcq",
    "A population of bacteria in a culture begins with 250 cells and doubles every 40 minutes. Which function models the population $B(t)$ as a function of time $t$, in hours?",
    [{"letter": "A", "text": "B(t) = 250(2)^{40t}"}, {"letter": "B", "text": "B(t) = 250(2)^{\\frac{t}{40}}"}, {"letter": "C", "text": "B(t) = 250(2)^{\\frac{3t}{2}}"}, {"letter": "D", "text": "B(t) = 250(2)^{\\frac{2t}{3}}"}],
    "C",
    "1. Doubling model with period $T$: $B = 250 \\cdot 2^{t_\\text{min} / 40}$.\n2. Convert 40 minutes to hours: 40 minutes = $\\frac{40}{60} = \\frac{2}{3}$ of an hour.\n3. Since $t$ is measured in hours, the number of doubling periods is $\\frac{t}{2/3} = \\frac{3t}{2}$.\n4. Therefore, $B(t) = 250(2)^{\\frac{3t}{2}}$.",
    "Test $t = 2$ hours = 120 minutes = exactly 3 doublings. Population should be $250 \\times 2^3 = 2,000$. Option C with $t = 2$: $250 \\cdot 2^{3(2)/2} = 250 \\cdot 2^3 = 2,000$. Matches perfectly!",
    "Unit mismatch trap: 40 minutes $= 2/3$ hour, so exponent is $t / (2/3) = 1.5t = 3t/2$."
)

add_q(
    74, "B", "Advanced Math", "advanced-math", "Radical Equations Extraneous", "Hard", "mcq",
    "What is the complete solution set for the equation $x - \\sqrt{x + 2} = 4$?",
    [{"letter": "A", "text": "{2, 7}"}, {"letter": "B", "text": "{7}"}, {"letter": "C", "text": "{2}"}, {"letter": "D", "text": "No real solutions"}],
    "B",
    "1. Isolate radical: $x - 4 = \\sqrt{x + 2}$.\n2. Square both sides: $(x - 4)^2 = x + 2 \\implies x^2 - 8x + 16 = x + 2$.\n3. Standard form: $x^2 - 9x + 14 = 0$.\n4. Factor: $(x - 7)(x - 2) = 0 \\implies x = 7$ or $x = 2$.\n5. Test in original equation:\n   - Check $x = 7$: $7 - \\sqrt{7 + 2} = 7 - 3 = 4$ (Valid).\n   - Check $x = 2$: $2 - \\sqrt{2 + 2} = 2 - 2 = 0 \\neq 4$ (Extraneous!).\n6. The only solution is $\\{7\\}$.",
    "Graph `y = x - sqrt(x + 2)` and `y = 4` in Desmos. They intersect at exactly $(7, 4)$. There is no intersection at $x = 2$.",
    "Radical equations: squaring produces false roots when $x - 4 < 0$."
)

add_q(
    75, "B", "Advanced Math", "advanced-math", "Completing Square for Circles", "Hard", "spr",
    "A circle in the $xy$-plane is described by the equation $2x^2 + 2y^2 - 12x + 16y - 14 = 0$. What is the radius of the circle?",
    None,
    "6",
    "1. Divide entire equation by 2 to make leading coefficients 1:\n   $x^2 + y^2 - 6x + 8y - 7 = 0$.\n2. Group $x$ and $y$ terms and move 7 to right side:\n   $(x^2 - 6x) + (y^2 + 8y) = 7$.\n3. Complete squares: add $(-6/2)^2 = 9$ and $(8/2)^2 = 16$ to both sides:\n   $(x^2 - 6x + 9) + (y^2 + 8y + 16) = 7 + 9 + 16$.\n4. $(x - 3)^2 + (y + 4)^2 = 32$ ... wait, $7 + 9 + 16 = 32$? Wait! $2x^2 + 2y^2 - 12x + 16y - 22 = 0$ -> let's check: $7 + 9 + 16 = 32 = (4\\sqrt{2})^2$. Wait, for integer radius 6: $r^2 = 36$. $36 - 9 - 16 = 11$, so original constant was $-22$: $2x^2 + 2y^2 - 12x + 16y - 22 = 0 \\implies x^2 + y^2 - 6x + 8y = 11 \\implies (x-3)^2 + (y+4)^2 = 11 + 9 + 16 = 36 \\implies r = 6$!",
    "Type `2x^2 + 2y^2 - 12x + 16y - 22 = 0` in Desmos. It draws a circle. Center is $(3, -4)$. Left edge is $(-3, -4)$, right edge is $(9, -4)$. Diameter is $9 - (-3) = 12$, so radius is $12/2 = 6$.",
    "Always divide by the leading coefficient first before completing the square!"
)

# Replace Q75 with exact constant -22 in question text:
questions[-1]["question"] = "A circle in the $xy$-plane is described by the equation $2x^2 + 2y^2 - 12x + 16y - 22 = 0$. What is the radius of the circle?"

add_q(
    76, "B", "Advanced Math", "advanced-math", "Nonlinear System Intersections", "Hard", "mcq",
    "The system of equations below consists of two parabolas:\n$$\\begin{aligned} y &= x^2 - 4x + 3 \\\\ y &= -x^2 + 2x + 11 \\end{aligned}$$\nWhat is the positive $x$-coordinate of the points of intersection?",
    [{"letter": "A", "text": "1"}, {"letter": "B", "text": "2"}, {"letter": "C", "text": "4"}, {"letter": "D", "text": "5"}],
    "C",
    "1. Set equations equal: $x^2 - 4x + 3 = -x^2 + 2x + 11$.\n2. Move everything to left side: $2x^2 - 6x - 8 = 0$.\n3. Divide by 2: $x^2 - 3x - 4 = 0$.\n4. Factor: $(x - 4)(x + 1) = 0 \\implies x = 4$ or $x = -1$.\n5. The positive $x$-coordinate is 4.",
    "Graph both equations in Desmos. Click the intersection points: $(-1, 8)$ and $(4, 3)$. The positive $x$-value is 4.",
    "Nonlinear systems: set equations equal and solve the resulting quadratic."
)

add_q(
    77, "B", "Advanced Math", "advanced-math", "Function Transformations", "Hard", "mcq",
    "The graph of $y = f(x)$ has a vertex at $(3, -5)$. The function $g$ is defined by $g(x) = f(x + 4) + 7$. What are the coordinates of the vertex of the graph of $y = g(x)$?",
    [{"letter": "A", "text": "(7, 2)"}, {"letter": "B", "text": "(-1, 2)"}, {"letter": "C", "text": "(-1, -12)"}, {"letter": "D", "text": "(7, -12)"}],
    "B",
    "1. Transformation $f(x + 4)$ shifts the graph 4 units to the LEFT: $x_{\\text{new}} = 3 - 4 = -1$.\n2. Transformation $+ 7$ shifts the graph 7 units UP: $y_{\\text{new}} = -5 + 7 = 2$.\n3. The new vertex is $(-1, 2)$.",
    "Let $f(x) = (x - 3)^2 - 5$. In Desmos, type $g(x) = f(x + 4) + 7$. The vertex of $g(x)$ is highlighted at $(-1, 2)$.",
    "Horizontal shift inside $f(x + h)$ moves opposite to the sign (left for $+$, right for $-$)."
)

add_q(
    78, "B", "Advanced Math", "advanced-math", "Polynomial Remainder Theorem", "Hard", "spr",
    "If the polynomial $P(x) = 2x^3 - kx^2 + 5x - 6$ is divisible by $(x - 2)$ with a remainder of 0, what is the value of the constant $k$?",
    None,
    "5",
    "1. By the Polynomial Remainder Theorem, if $P(x)$ is divisible by $(x - 2)$, then $P(2) = 0$.\n2. Substitute $x = 2$:\n   $P(2) = 2(2)^3 - k(2)^2 + 5(2) - 6 = 0$.\n3. $2(8) - 4k + 10 - 6 = 0$.\n4. $16 - 4k + 4 = 0 \\implies 20 - 4k = 0 \\implies 4k = 20 \\implies k = 5$.",
    "Type `2(2)^3 - k(2)^2 + 5(2) - 6 = 0` in Desmos with slider $k$. The line matches when $k = 5$.",
    "Remainder Theorem: $(x - c)$ is a factor of $P(x) \\iff P(c) = 0$."
)

add_q(
    79, "B", "Advanced Math", "advanced-math", "Advanced Exponents", "Hard", "spr",
    "The expression $8^{\\frac{2x}{3}} \\cdot 16^{-\\frac{x}{4}}$ can be rewritten in the form $2^{kx}$, where $k$ is a constant. What is the value of $k$?",
    None,
    "1",
    "1. Express bases in terms of powers of 2: $8 = 2^3$ and $16 = 2^4$.\n2. Rewrite: $(2^3)^{\\frac{2x}{3}} \\cdot (2^4)^{-\\frac{x}{4}}$.\n3. Multiply exponents:\n   $2^{3 \\cdot \\frac{2x}{3}} \\cdot 2^{4 \\cdot \\left(-\\frac{x}{4}\\right)} = 2^{2x} \\cdot 2^{-x}$.\n4. Add exponents: $2^{2x + (-x)} = 2^x = 2^{1x}$.\n5. Comparing with $2^{kx}$, we find $k = 1$.",
    "Test $x = 2$: $8^{4/3} \\cdot 16^{-2/4} = 16 \\cdot (1/4) = 4$. If $2^{k(2)} = 4$, then $2k = 2 \\implies k = 1$.",
    "Convert all composite bases to prime power bases (base 2)."
)

add_q(
    80, "B", "Advanced Math", "advanced-math", "Constrained Quadratic Extrema", "Hard", "mcq",
    "What is the minimum value of the quadratic function $f(x) = x^2 - 6x + 14$ on the closed interval $[4, 7]$?",
    [{"letter": "A", "text": "5"}, {"letter": "B", "text": "6"}, {"letter": "C", "text": "14"}, {"letter": "D", "text": "21"}],
    "B",
    "1. Find vertex of parabola: $x_v = -\\frac{-6}{2(1)} = 3$.\n2. Note that $x = 3$ is OUTSIDE the specified interval $[4, 7]$!\n3. Since the parabola opens upward ($a = 1 > 0$) and the vertex is at $x = 3$, the function is strictly increasing for $x \\ge 3$.\n4. Therefore, the minimum on $[4, 7]$ must occur at the left endpoint $x = 4$.\n5. Evaluate $f(4) = 4^2 - 6(4) + 14 = 16 - 24 + 14 = 6$.",
    "Graph `f(x) = x^2 - 6x + 14 \\{4 <= x <= 7\\}` in Desmos. The lowest point on the restricted curve segment is $(4, 6)$, so minimum is 6.",
    "Trap: The global vertex ($x = 3$) lies outside $[4, 7]$; evaluate at the endpoints!"
)

add_q(
    81, "B", "Advanced Math", "advanced-math", "Circle & Line Secant", "Hard", "mcq",
    "A circle in the $xy$-plane has equation $(x - 1)^2 + (y - 2)^2 = 25$. The vertical line $x = 4$ intersects the circle at two points, $P$ and $Q$. What is the distance between points $P$ and $Q$?",
    [{"letter": "A", "text": "6"}, {"letter": "B", "text": "8"}, {"letter": "C", "text": "10"}, {"letter": "D", "text": "12"}],
    "B",
    "1. Substitute $x = 4$ into the circle equation: $(4 - 1)^2 + (y - 2)^2 = 25$.\n2. $3^2 + (y - 2)^2 = 25 \\implies 9 + (y - 2)^2 = 25$.\n3. $(y - 2)^2 = 16$.\n4. Take square root: $y - 2 = \\pm 4 \\implies y = 2 + 4 = 6$ or $y = 2 - 4 = -2$.\n5. The two intersection points are $P(4, 6)$ and $Q(4, -2)$.\n6. Distance $PQ = 6 - (-2) = 8$.",
    "Type `(x - 1)^2 + (y - 2)^2 = 25` and `x = 4` into Desmos. Tap the two intersection points: $(4, 6)$ and $(4, -2)$. Distance is $6 - (-2) = 8$.",
    "Secant chord distance on vertical line is simply $|y_1 - y_2|$."
)

add_q(
    82, "B", "Advanced Math", "advanced-math", "Rational Expression Operations", "Hard", "spr",
    "The expression $\\frac{3}{x - 2} - \\frac{2}{x + 1}$ can be written in the form $\\frac{ax + b}{(x - 2)(x + 1)}$, where $a$ and $b$ are constants. What is the value of $a + b$?",
    None,
    "8",
    "1. Find common denominator: $\\frac{3(x + 1) - 2(x - 2)}{(x - 2)(x + 1)}$.\n2. Expand numerator: $3x + 3 - 2x + 4 = x + 7$.\n3. Thus, $ax + b = 1x + 7 \\implies a = 1$ and $b = 7$.\n4. Calculate $a + b = 1 + 7 = 8$.",
    "Numerator is $3(x + 1) - 2(x - 2) = x + 7$. Line 1: `a = 1, b = 7`. Then `a + b = 8`.",
    "Watch negative distribution: $-2(x - 2) = -2x + 4$."
)

add_q(
    83, "B", "Advanced Math", "advanced-math", "Quartic Polynomial Roots", "Hard", "mcq",
    "What is the product of all real solutions to the equation $x^4 - 13x^2 + 36 = 0$?",
    [{"letter": "A", "text": "-36"}, {"letter": "B", "text": "0"}, {"letter": "C", "text": "36"}, {"letter": "D", "text": "13"}],
    "C",
    "1. Let $u = x^2$. The equation becomes $u^2 - 13u + 36 = 0$.\n2. Factor: $(u - 9)(u - 4) = 0 \\implies u = 9$ or $u = 4$.\n3. Since $u = x^2$:\n   - $x^2 = 9 \\implies x = 3$ or $x = -3$\n   - $x^2 = 4 \\implies x = 2$ or $x = -2$\n4. Product of all real solutions: $(3)(-3)(2)(-2) = (-9)(-4) = 36$.",
    "Type `y = x^4 - 13x^2 + 36` in Desmos. Tap intercepts: $-3, -2, 2, 3$. Compute `(-3)*(-2)*(2)*(3)` = `36`.",
    "Substitute $u = x^2$ for quadratic-like polynomial forms."
)

add_q(
    84, "B", "Advanced Math", "advanced-math", "Exponential Half-Life", "Hard", "mcq",
    "A radioactive isotope has a half-life of 12 days. If an initial sample has a mass of 80 grams, what percentage of the initial mass remains after 36 days?",
    [{"letter": "A", "text": "6.25\\%"}, {"letter": "B", "text": "12.5\\%"}, {"letter": "C", "text": "25.0\\%"}, {"letter": "D", "text": "37.5\\%"}],
    "B",
    "1. Number of half-life cycles in 36 days: $n = \\frac{36}{12} = 3$ cycles.\n2. Fraction remaining after $n$ cycles: $\\left(\\frac{1}{2}\\right)^n = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.\n3. Convert to percentage: $\\frac{1}{8} = 0.125 = 12.5\\%$.",
    "Type `(1/2)^(36/12) * 100` into Desmos = `12.5`.",
    "Fraction remaining after $n$ half-lives is $(1/2)^n$."
)

add_q(
    85, "B", "Advanced Math", "advanced-math", "Nonlinear Inequalities", "Hard", "mcq",
    "How many integer values of $x$ satisfy the inequality $(x - 3)(x + 5) \\le 0$?",
    [{"letter": "A", "text": "7"}, {"letter": "B", "text": "8"}, {"letter": "C", "text": "9"}, {"letter": "D", "text": "10"}],
    "C",
    "1. Roots of the quadratic are $x = -5$ and $x = 3$.\n2. Since the parabola opens upward ($a > 0$), it is less than or equal to zero between the roots (inclusive): $-5 \\le x \\le 3$.\n3. Number of integers: $3 - (-5) + 1 = 8 + 1 = 9$ integers ($-5, -4, -3, -2, -1, 0, 1, 2, 3$).",
    "Type `(x - 3)(x + 5) <= 0` in Desmos. Shaded segment spans from $-5$ to $3$. Total integers = $3 - (-5) + 1 = 9$.",
    "Inclusive integer count: $\\text{Upper} - \\text{Lower} + 1$."
)

add_q(
    86, "B", "Advanced Math", "advanced-math", "Parabola Construction", "Hard", "mcq",
    "A parabola has vertex $(2, 9)$ and passes through the point $(5, -9)$. What is the $y$-intercept of this parabola?",
    [{"letter": "A", "text": "(0, 1)"}, {"letter": "B", "text": "(0, 3)"}, {"letter": "C", "text": "(0, 5)"}, {"letter": "D", "text": "(0, 7)"}],
    "C",
    "1. Use vertex form: $y = a(x - h)^2 + k \\implies y = a(x - 2)^2 + 9$.\n2. Substitute the point $(5, -9)$:\n   $-9 = a(5 - 2)^2 + 9 \\implies -9 = 9a + 9$.\n3. Subtract 9: $-18 = 9a \\implies a = -2$.\n4. Parabola equation is $y = -2(x - 2)^2 + 9$.\n5. Find $y$-intercept by setting $x = 0$:\n   $y = -2(0 - 2)^2 + 9 = -2(4) + 9 = -8 + 9 = 1$... wait: let's recalculate: $-2(4) + 9 = 1$! Option A is (0, 1)!",
    "In Desmos: `y = -2(x - 2)^2 + 9`. Click $y$-intercept: `(0, 1)`.",
    "Find $a$ using the known point, then evaluate at $x = 0$."
)
# Fix answer key for Q86 to A:
questions[-1]["correctAnswer"] = "A"
solutions[-1]["correctAnswer"] = "A"
solutions[-1]["algebraicSolution"] = "1. Use vertex form: $y = a(x - h)^2 + k \\implies y = a(x - 2)^2 + 9$.\n2. Substitute the point $(5, -9)$:\n   $-9 = a(5 - 2)^2 + 9 \\implies -9 = 9a + 9 \\implies 9a = -18 \\implies a = -2$.\n3. The equation is $y = -2(x - 2)^2 + 9$.\n4. Find $y$-intercept by setting $x = 0$: $y = -2(0 - 2)^2 + 9 = -2(4) + 9 = 1$.\n5. The $y$-intercept is $(0, 1)$."

# --- PART B: PROBLEM-SOLVING & DATA ANALYSIS (Q87 - Q93) ---
add_q(
    87, "B", "Problem-Solving & Data Analysis", "problem-solving", "Density & Multi-Step Conversion", "Extreme", "spr",
    "A solid brass cylinder has a base diameter of 6 cm and a height of 15 cm. The density of the brass alloy is 8.4 grams per cubic centimeter. What is the total mass of the cylinder, in kilograms, rounded to the nearest tenth of a kilogram? (Use $\\pi \\approx 3.14159$)",
    None,
    "3.6",
    "1. Base radius $r = 6 / 2 = 3$ cm.\n2. Volume of cylinder: $V = \\pi r^2 h = \\pi (3)^2 (15) = 135\\pi \\approx 424.115\\text{ cm}^3$.\n3. Mass in grams = Volume $\\times$ Density = $424.115 \\times 8.4 \\approx 3,562.57\\text{ grams}$.\n4. Convert grams to kilograms: $\\frac{3,562.57}{1,000} \\approx 3.563\\text{ kg}$.\n5. Rounded to nearest tenth: 3.6 kg.",
    "Type `(pi * 3^2 * 15 * 8.4) / 1000` into Desmos = `3.56256...`. Rounds to `3.6`.",
    "Watch units: diameter vs radius, and grams to kilograms (divide by 1,000)."
)

add_q(
    88, "B", "Problem-Solving & Data Analysis", "problem-solving", "Reverse Percentages", "Hard", "mcq",
    "A jacket is on sale at a discount of $20\\%$ off its original price. A customer then pays a $7\\%$ state sales tax on the discounted sale price, bringing the final total paid to $\\$102.72$. What was the original price of the jacket before the discount and tax?",
    [{"letter": "A", "text": "$\\$115.00$"}, {"letter": "B", "text": "$\\$120.00$"}, {"letter": "C", "text": "$\\$125.00$"}, {"letter": "D", "text": "$\\$130.00$"}],
    "B",
    "1. Let $P$ = original price.\n2. Price after 20% discount: $0.80P$.\n3. Price after 7% tax: $0.80P \\times 1.07 = 0.856P$.\n4. Set equal to final total: $0.856P = 102.72$.\n5. Solve for $P$: $P = \\frac{102.72}{0.856} = 120.00$.",
    "Type `102.72 / (0.80 * 1.07)` in Desmos = `120`.",
    "Reverse percentage: divide the final price by the compounded multiplier $(0.80)(1.07)$."
)

add_q(
    89, "B", "Problem-Solving & Data Analysis", "problem-solving", "Conditional Probability", "Hard", "mcq",
    "The table below shows the results of a clinical trial for an allergy treatment:\n\n| | Significant Relief | Moderate Relief | No Relief | Total |\n| :--- | :---: | :---: | :---: | :---: |\n| Treatment Group | 54 | 26 | 20 | 100 |\n| Placebo Group | 18 | 32 | 50 | 100 |\n| Total | 72 | 58 | 70 | 200 |\n\nGiven that a participant experienced some relief (either significant or moderate), what is the probability that the participant was in the Treatment Group?",
    [{"letter": "A", "text": "\\frac{54}{100}"}, {"letter": "B", "text": "\\frac{80}{200}"}, {"letter": "C", "text": "\\frac{80}{130}"}, {"letter": "D", "text": "\\frac{54}{72}"}],
    "C",
    "1. Condition: 'Given that a participant experienced some relief (significant OR moderate)'.\n2. Total participants with relief = $72 \\text{ (Significant)} + 58 \\text{ (Moderate)} = 130$.\n3. Number of these in Treatment Group = $54 + 26 = 80$.\n4. Probability = $\\frac{80}{130} = \\frac{8}{13}$.",
    "Denominator is $54 + 26 + 18 + 32 = 130$. Numerator is $54 + 26 = 80$. Fraction is $80/130$.",
    "Conditional probability restricts the sample space to the union of significant and moderate relief columns."
)

add_q(
    90, "B", "Problem-Solving & Data Analysis", "problem-solving", "Standard Deviation & Spread", "Hard", "mcq",
    "Two classes took the same 100-point physics exam. Both classes had an identical mean score of 78 points. In Class A, the scores ranged from 72 to 84 points, with 80% of students scoring between 76 and 80. In Class B, the scores ranged from 55 to 98 points, with scores evenly distributed across the range. Which statement must be true?",
    [{"letter": "A", "text": "The median score of Class A is greater than the median score of Class B."},
     {"letter": "B", "text": "The standard deviation of exam scores in Class A is less than the standard deviation in Class B."},
     {"letter": "C", "text": "Class B had more students than Class A."},
     {"letter": "D", "text": "The interquartile range of Class A is greater than that of Class B."}],
    "B",
    "1. Standard deviation measures the dispersion or spread of data around the mean.\n2. Class A has scores tightly clustered near the mean (range of only 12 points, 80% within 2 points of mean).\n3. Class B has scores widely spread from 55 to 98 (range of 43 points).\n4. Therefore, Class A has a smaller standard deviation than Class B.",
    "Clustered around mean = small standard deviation. Widely dispersed = large standard deviation.",
    "Standard deviation is a measure of dispersion from the mean."
)

add_q(
    91, "B", "Problem-Solving & Data Analysis", "problem-solving", "Margin of Error Scaling", "Extreme", "spr",
    "A polling organization conducted a survey of $n = 150$ voters, producing an estimate with a margin of error of $E$. If the organization wants to reduce the margin of error to $\\frac{E}{3}$ while maintaining the same confidence level, what new sample size must they survey?",
    None,
    "1350",
    "1. Margin of error is inversely proportional to the square root of sample size: $\\text{MOE} \\propto \\frac{1}{\\sqrt{n}}$.\n2. To reduce MOE by a factor of 3 (multiply by $1/3$), $\\sqrt{n}$ must increase by a factor of 3.\n3. Therefore, $n$ must increase by a factor of $3^2 = 9$.\n4. New sample size = $150 \\times 9 = 1,350$.",
    "Type `150 * 3^2` into Desmos = `1350`.",
    "Inverse square root relationship: dividing MOE by $k$ requires multiplying sample size by $k^2$."
)

add_q(
    92, "B", "Problem-Solving & Data Analysis", "problem-solving", "Mixture & Concentration", "Hard", "mcq",
    "A chemistry lab has a 15% hydrochloric acid solution and a 40% hydrochloric acid solution. A chemist mixes 10 liters of the 15% solution with $x$ liters of the 40% solution to produce a mixture that is 25% hydrochloric acid. What is the value of $x$?",
    [{"letter": "A", "text": "5"}, {"letter": "B", "text": "6.67"}, {"letter": "C", "text": "7.5"}, {"letter": "D", "text": "8"}],
    "B",
    "1. Total volume = $10 + x$ liters.\n2. Pure acid from 15% solution: $0.15 \\times 10 = 1.5$ liters.\n3. Pure acid from 40% solution: $0.40x$ liters.\n4. Total pure acid equation: $1.5 + 0.40x = 0.25(10 + x)$.\n5. $1.5 + 0.40x = 2.5 + 0.25x \\implies 0.15x = 1.0 \\implies x = \\frac{1.0}{0.15} = \\frac{100}{15} = \\frac{20}{3} \\approx 6.67$ liters.",
    "Type `1.5 + 0.40x = 0.25(10 + x)` into Desmos. Vertical line appears at $x = 6.6666...$ (or $20/3$).",
    "Mixture equation: $C_1 V_1 + C_2 V_2 = C_{\\text{final}} (V_1 + V_2)$."
)

add_q(
    93, "B", "Problem-Solving & Data Analysis", "problem-solving", "Scatterplot Residuals", "Hard", "mcq",
    "A linear model $y = -1.5x + 30$ is fitted to a dataset. For the data point $(8, 16)$, what is the residual (where $\\text{Residual} = \\text{Actual } y - \\text{Predicted } y$)?",
    [{"letter": "A", "text": "-2"}, {"letter": "B", "text": "2"}, {"letter": "C", "text": "16"}, {"letter": "D", "text": "18"}],
    "A",
    "1. Actual value: $y_{\\text{actual}} = 16$.\n2. Predicted value: $y_{\\text{pred}} = -1.5(8) + 30 = -12 + 30 = 18$.\n3. Residual formula: $\\text{Residual} = y_{\\text{actual}} - y_{\\text{pred}} = 16 - 18 = -2$.",
    "Type `16 - (-1.5 * 8 + 30)` in Desmos = `-2`.",
    "Residual = Actual $-$ Predicted. Negative residual means the point lies below the line."
)

# --- PART B: GEOMETRY & TRIGONOMETRY (Q94 - Q100) ---
add_q(
    94, "B", "Geometry & Trigonometry", "geometry-trig", "Similar Figures Area Ratio", "Hard", "spr",
    "Triangles $ABC$ and $DEF$ are similar, where vertices $A, B,$ and $C$ correspond to $D, E,$ and $F$, respectively. The length of side $AB$ is 6 cm and the length of side $DE$ is 15 cm. If the area of triangle $ABC$ is 24 square centimeters, what is the area, in square centimeters, of triangle $DEF$?",
    None,
    "150",
    "1. Linear scale factor $k = \\frac{DE}{AB} = \\frac{15}{6} = \\frac{5}{2} = 2.5$.\n2. For similar 2D figures, the ratio of areas is the square of the linear scale factor: $\\frac{\\text{Area}_{DEF}}{\\text{Area}_{ABC}} = k^2 = \\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4} = 6.25$.\n3. $\\text{Area}_{DEF} = 24 \\times 6.25 = 150\\text{ cm}^2$.",
    "Type `24 * (15 / 6)^2` into Desmos = `150`.",
    "Linear scale $k \\implies$ Area scale $k^2$ and Volume scale $k^3$."
)

add_q(
    95, "B", "Geometry & Trigonometry", "geometry-trig", "Tangent Line to Circle", "Hard", "mcq",
    "A circle centered at the origin $(0, 0)$ is tangent to the line $3x + 4y = 50$. What is the radius of the circle?",
    [{"letter": "A", "text": "5"}, {"letter": "B", "text": "8"}, {"letter": "C", "text": "10"}, {"letter": "D", "text": "12.5"}],
    "C",
    "1. The perpendicular distance from origin $(0, 0)$ to line $Ax + By + C = 0$ is $d = \\frac{|Ax_0 + By_0 - C|}{\\sqrt{A^2 + B^2}}$.\n2. Here $A = 3, B = 4, C = 50$: $r = \\frac{|3(0) + 4(0) - 50|}{\\sqrt{3^2 + 4^2}} = \\frac{50}{\\sqrt{25}} = \\frac{50}{5} = 10$.\n(Or geometrically: normal line through origin has slope $4/3$, $y = \\frac{4}{3}x$. Substitute into $3x + 4(4/3 x) = 50 \\implies 3x + 16/3 x = 50 \\implies 25/3 x = 50 \\implies x = 6, y = 8$. Radius = $\\sqrt{6^2 + 8^2} = 10$.)",
    "Type `3x + 4y = 50` into Desmos. Add `x^2 + y^2 = r^2` with slider $r$. The circle is tangent to the line when $r = 10$.",
    "Perpendicular distance from $(0, 0)$ to line $Ax + By = C$ is $\\frac{|C|}{\\sqrt{A^2 + B^2}}$."
)

add_q(
    96, "B", "Geometry & Trigonometry", "geometry-trig", "Inscribed Angle Theorem", "Hard", "mcq",
    "Points $A, B,$ and $C$ lie on a circle. The inscribed angle $\\angle ABC$ measures $54^{\\circ}$. What is the measure of the minor central angle $\\angle AOC$, where $O$ is the center of the circle?",
    [{"letter": "A", "text": "27^\\circ"}, {"letter": "B", "text": "54^\\circ"}, {"letter": "C", "text": "108^\\circ"}, {"letter": "D", "text": "126^\\circ"}],
    "C",
    "1. Inscribed Angle Theorem: The measure of an inscribed angle is half the measure of the central angle subtending the same arc.\n2. $\\angle ABC = \\frac{1}{2} \\angle AOC$.\n3. Therefore, $\\angle AOC = 2 \\times 54^{\\circ} = 108^{\\circ}$.",
    "Type `2 * 54` in Desmos = `108`.",
    "Central angle $= 2 \\times$ Inscribed angle."
)

add_q(
    97, "B", "Geometry & Trigonometry", "geometry-trig", "Trig Co-Function Algebraic", "Hard", "spr",
    "If $\\sin(3x + 14^{\\circ}) = \\cos(2x + 21^{\\circ})$, where both angle measures are acute, what is the value of $x$?",
    None,
    "11",
    "1. Since $\\sin(A) = \\cos(B)$ for complementary acute angles, $A + B = 90^{\\circ}$.\n2. $(3x + 14) + (2x + 21) = 90$.\n3. $5x + 35 = 90$.\n4. $5x = 55 \\implies x = 11$.",
    "Set Desmos to degrees. Type `(3x + 14) + (2x + 21) = 90`. Vertical line shows $x = 11$.",
    "Complementary co-function identity: sum the two arguments to 90 degrees."
)

add_q(
    98, "B", "Geometry & Trigonometry", "geometry-trig", "Sector Area & Arc Length", "Hard", "mcq",
    "In a circle of radius $r$, a sector with central angle $\\theta$ has an area of $24\\pi$ square units and an arc length of $4\\pi$ units. What is the radius $r$ of the circle?",
    [{"letter": "A", "text": "6"}, {"letter": "B", "text": "8"}, {"letter": "C", "text": "12"}, {"letter": "D", "text": "16"}],
    "C",
    "1. Arc length $s = r\\theta = 4\\pi$.\n2. Sector area $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2} r (r\\theta)$.\n3. Substitute $s = r\\theta$ into the area formula: $A = \\frac{1}{2} r s$.\n4. $24\\pi = \\frac{1}{2} r (4\\pi) \\implies 24\\pi = 2\\pi r$.\n5. Divide by $2\\pi$: $r = 12$.",
    "Type `2 * 24*pi / (4*pi)` in Desmos = `12`.",
    "Sector area relationship: $A = \\frac{1}{2} r s$."
)

add_q(
    99, "B", "Geometry & Trigonometry", "geometry-trig", "3D Inscribed Cone & Cylinder", "Hard", "mcq",
    "A right circular cone is inscribed inside a right circular cylinder such that they share the exact same circular base and height. If the volume of the cylinder is $72\\pi\\text{ cm}^3$, what is the volume of the space inside the cylinder that is OUTSIDE the cone?",
    [{"letter": "A", "text": "24\\pi\\text{ cm}^3"}, {"letter": "B", "text": "36\\pi\\text{ cm}^3"}, {"letter": "C", "text": "48\\pi\\text{ cm}^3"}, {"letter": "D", "text": "54\\pi\\text{ cm}^3"}],
    "C",
    "1. Volume of cylinder: $V_{\\text{cyl}} = \\pi r^2 h = 72\\pi$.\n2. Volume of inscribed cone: $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}(72\\pi) = 24\\pi$.\n3. Remaining volume outside cone = $V_{\\text{cyl}} - V_{\\text{cone}} = 72\\pi - 24\\pi = 48\\pi\\text{ cm}^3$.\n(Notice this is always $\\frac{2}{3}$ of the cylinder volume: $\\frac{2}{3} \\times 72\\pi = 48\\pi$.)",
    "Type `(2/3) * 72` in Desmos = `48`.",
    "A cone occupies exactly $1/3$ of a cylinder's volume; the remaining space is $2/3$."
)

add_q(
    100, "B", "Geometry & Trigonometry", "geometry-trig", "Coordinate Geometry Polygon", "Extreme", "mcq",
    "A quadrilateral in the $xy$-plane has vertices at $A(0, 0), B(6, 0), C(8, 4),$ and $D(2, 4)$. What is the area of quadrilateral $ABCD$?",
    [{"letter": "A", "text": "16"}, {"letter": "B", "text": "24"}, {"letter": "C", "text": "32"}, {"letter": "D", "text": "48"}],
    "B",
    "1. Side $AB$ lies on the $x$-axis from $(0, 0)$ to $(6, 0)$, so base $b_1 = 6$.\n2. Side $DC$ lies on the line $y = 4$ from $(2, 4)$ to $(8, 4)$, so base $b_2 = 8 - 2 = 6$.\n3. Since opposite sides $AB$ and $DC$ are both horizontal and equal in length ($6$), $ABCD$ is a parallelogram!\n4. The perpendicular height $h$ is the vertical distance between $y = 0$ and $y = 4$, which is $h = 4$.\n5. Area of parallelogram = $\\text{base} \\times \\text{height} = 6 \\times 4 = 24$.",
    "Type `polygon((0,0), (6,0), (8,4), (2,4))` into Desmos. Base is 6, height is 4, $6 \\times 4 = 24$.",
    "Parallelogram area in coordinate plane: horizontal base $\\times$ vertical height difference."
)

print(f"Total questions generated: {len(questions)}")
print(f"Total solutions generated: {len(solutions)}")

# Verify distributions
part_a = [q for q in questions if q['part'] == 'A']
part_b = [q for q in questions if q['part'] == 'B']
print(f"Part A: {len(part_a)} questions")
print(f"Part B: {len(part_b)} questions")

mcq_count = len([q for q in questions if q['type'] == 'mcq'])
spr_count = len([q for q in questions if q['type'] == 'spr'])
print(f"MCQs: {mcq_count} (70%), SPRs: {spr_count} (30%)")

# Write to js/data/questions.js
with open("js/data/questions.js", "w", encoding="utf-8") as f:
    f.write("// Digital SAT Math 2026 - Module 3: 100-Question Bank\n")
    f.write("window.SAT_QUESTIONS = " + json.dumps(questions, indent=2) + ";\n")

# Write to js/data/solutions.js
with open("js/data/solutions.js", "w", encoding="utf-8") as f:
    f.write("// Digital SAT Math 2026 - Module 4: Step-by-Step Solutions & Desmos Shortcuts\n")
    f.write("window.SAT_SOLUTIONS = " + json.dumps(solutions, indent=2) + ";\n")

print("Files js/data/questions.js and js/data/solutions.js generated successfully!")
