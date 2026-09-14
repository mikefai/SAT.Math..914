// Digital SAT Math 2026 - Module 1 Formula & Cheat Sheet Database
window.SAT_FORMULAS = [
  // --- 1. COLLEGE BOARD OFFICIAL REFERENCE SHEET ---
  {
    id: "cb-circle-area",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Area of a Circle",
    latex: "A = \\pi r^2",
    vars: [
      { symbol: "A", name: "Area of the circle (square units)" },
      { symbol: "r", name: "Radius of the circle (half the diameter: r = d/2)" },
      { symbol: "\\pi", name: "Mathematical constant (\\approx 3.14159...)" }
    ],
    explanation: "Calculates the 2D surface enclosed by a circular boundary.",
    traps: "College Board often gives the DIAMETER instead of the radius. If diameter is 12, students forget to divide by 2 and calculate with 12 instead of 6. Watch also for leaving answers in terms of \\pi vs. multiplying out.",
    desmosTip: "Type 'pi * r^2' directly. You can define r=6 and Desmos computes the exact decimal immediately."
  },
  {
    id: "cb-circle-circ",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Circumference of a Circle",
    latex: "C = 2\\pi r = \\pi d",
    vars: [
      { symbol: "C", name: "Circumference (perimeter of circle, linear units)" },
      { symbol: "r", name: "Radius" },
      { symbol: "d", name: "Diameter (d = 2r)" }
    ],
    explanation: "Total linear distance around the perimeter of a circular shape.",
    traps: "Confusing Circumference (linear: 2*pi*r) with Area (square: pi*r^2). Also, when a question asks for a semi-circle track perimeter, remember to add the diameter straight edge: (pi*r) + 2r!",
    desmosTip: "Desmos recognizes 'pi'. For fraction of a circle (arc), type (angle/360)*2*pi*r."
  },
  {
    id: "cb-rect-area",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Area of a Rectangle",
    latex: "A = \\ell w",
    vars: [
      { symbol: "A", name: "Area of rectangle (square units)" },
      { symbol: "\\ell", name: "Length of rectangle" },
      { symbol: "w", name: "Width of rectangle" }
    ],
    explanation: "Product of perpendicular length and width.",
    traps: "Digital SAT word problems frequently involve scaling dimensions: 'if length increases by 20% and width decreases by 10%, what is the new area?' The new area is 1.20 * 0.90 * A = 1.08 A (+8%), NOT 20 - 10 = +10%!",
    desmosTip: "Graph y = x(P/2 - x) to find the maximum area of a rectangle given a fixed perimeter P."
  },
  {
    id: "cb-tri-area",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Area of a Triangle",
    latex: "A = \\frac{1}{2} b h",
    vars: [
      { symbol: "A", name: "Area of triangle" },
      { symbol: "b", name: "Base length" },
      { symbol: "h", name: "Perpendicular height to base b" }
    ],
    explanation: "Half the product of any base and its corresponding perpendicular altitude.",
    traps: "The height MUST be perpendicular (at 90 degrees) to the base. In obtuse or non-right triangles, students incorrectly use the slanted side length as the height. Also, for equilateral triangles: A = (s^2 * sqrt(3)) / 4.",
    desmosTip: "You can find triangle areas from 3 coordinate vertices using the shoelace formula in a Desmos table or polygon( (x1,y1), (x2,y2), (x3,y3) )."
  },
  {
    id: "cb-pythagorean",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Pythagorean Theorem",
    latex: "a^2 + b^2 = c^2",
    vars: [
      { symbol: "a, b", name: "Legs forming the 90 degree angle" },
      { symbol: "c", name: "Hypotenuse (longest side opposite 90 degree angle)" }
    ],
    explanation: "Fundamental relationship between the three sides of any Euclidean right triangle.",
    traps: "Only applies to RIGHT triangles. Always verify c is the hypotenuse. Memorize key Pythagorean Triples: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25) and their multiples (e.g., 6, 8, 10 or 10, 24, 26).",
    desmosTip: "Solve for any side instantaneously: hypotenuse is sqrt(a^2 + b^2), leg is sqrt(c^2 - a^2)."
  },
  {
    id: "cb-special-45",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Special Right Triangle: 45°-45°-90°",
    latex: "x : x : x\\sqrt{2}",
    vars: [
      { symbol: "x", name: "Length of each identical leg (opposite 45 degree angles)" },
      { symbol: "x\\sqrt{2}", name: "Hypotenuse (opposite 90 degree angle)" }
    ],
    explanation: "Isosceles right triangle formed by cutting a square in half along its diagonal.",
    traps: "If the hypotenuse is an integer like 10, each leg is 10 / sqrt(2) = 5*sqrt(2). Students mistakenly multiply by sqrt(2) instead of dividing.",
    desmosTip: "Convert radical values to decimals in Desmos (e.g. 5*sqrt(2) = 7.071) to match multiple-choice decimal options in 2 seconds."
  },
  {
    id: "cb-special-30-60",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Special Right Triangle: 30°-60°-90°",
    latex: "x : x\\sqrt{3} : 2x",
    vars: [
      { symbol: "x", name: "Short leg (opposite the smallest angle, 30 degrees)" },
      { symbol: "x\\sqrt{3}", name: "Long leg (opposite 60 degrees)" },
      { symbol: "2x", name: "Hypotenuse (opposite 90 degrees)" }
    ],
    explanation: "Right triangle formed by bisecting an equilateral triangle.",
    traps: "Mixing up which leg gets multiplied by sqrt(3). The short leg (x) is always opposite 30 degrees. The hypotenuse is ALWAYS double the short leg (2x), NOT double the long leg!",
    desmosTip: "Short leg = Hypotenuse / 2. Long leg = (Short leg) * sqrt(3). Type these into Desmos for instant ratio calculation."
  },
  {
    id: "cb-vol-box",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Volume of a Rectangular Prism",
    latex: "V = \\ell w h",
    vars: [
      { symbol: "V", name: "Volume (cubic units)" },
      { symbol: "\\ell, w, h", name: "Length, width, and height" }
    ],
    explanation: "Volume of a standard rectangular 3D box.",
    traps: "Unit conversion cubes! If 1 meter = 100 cm, then 1 m^3 = 100^3 = 1,000,000 cm^3, not 100 cm^3! Also, the 3D interior diagonal formula is d = sqrt(l^2 + w^2 + h^2).",
    desmosTip: "Calculate interior space diagonals in one step: sqrt(l^2 + w^2 + h^2)."
  },
  {
    id: "cb-vol-cylinder",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Volume of a Right Cylinder",
    latex: "V = \\pi r^2 h",
    vars: [
      { symbol: "V", name: "Volume of cylinder" },
      { symbol: "r", name: "Base radius" },
      { symbol: "h", name: "Perpendicular height" }
    ],
    explanation: "Volume equals Base Area (pi * r^2) multiplied by vertical height h.",
    traps: "Lateral surface area vs. total surface area. Lateral area (the curved wall) = 2*pi*r*h. Total surface area includes the 2 circular lids: 2*pi*r*h + 2*pi*r^2.",
    desmosTip: "Type 'V(r, h) = pi * r^2 * h'. Then you can evaluate V(4, 9) or inspect ratios when r doubles."
  },
  {
    id: "cb-vol-sphere",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Volume of a Sphere",
    latex: "V = \\frac{4}{3}\\pi r^3",
    vars: [
      { symbol: "V", name: "Volume of sphere" },
      { symbol: "r", name: "Radius of sphere" }
    ],
    explanation: "Volume of a perfectly symmetrical 3D round ball.",
    traps: "Using r^2 instead of r^3! Also, surface area of a sphere is SA = 4*pi*r^2 (the derivative of volume). For a hemisphere, volume is (2/3)*pi*r^3, but total surface area includes the flat base: 2*pi*r^2 + pi*r^2 = 3*pi*r^2.",
    desmosTip: "If sphere volume is given, find radius instantly in Desmos by graphing 'y = (4/3)*pi*x^3 - Volume' and clicking the x-intercept."
  },
  {
    id: "cb-vol-cone",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Volume of a Right Cone",
    latex: "V = \\frac{1}{3}\\pi r^2 h",
    vars: [
      { symbol: "V", name: "Volume of cone" },
      { symbol: "r", name: "Circular base radius" },
      { symbol: "h", name: "Perpendicular height" }
    ],
    explanation: "Exactly one-third the volume of a cylinder with identical base and height.",
    traps: "Slant height (s or l) vs. vertical perpendicular height (h). In a cone, r^2 + h^2 = s^2. If the problem gives the slant height along the side, you must solve for h using Pythagorean theorem first!",
    desmosTip: "Set h = sqrt(s^2 - r^2) inside V = (1/3)*pi*r^2*h directly in Desmos."
  },
  {
    id: "cb-vol-pyramid",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Volume of a Pyramid",
    latex: "V = \\frac{1}{3} \\ell w h = \\frac{1}{3} B h",
    vars: [
      { symbol: "V", name: "Volume of pyramid" },
      { symbol: "B", name: "Area of the polygonal base (l*w for rectangle)" },
      { symbol: "h", name: "Perpendicular vertical height from base center to apex" }
    ],
    explanation: "One-third base area times perpendicular height.",
    traps: "Forgetting the 1/3 factor. Also, confusing face slant height with vertical altitude to the base center.",
    desmosTip: "Type (1/3)*B*h for instantaneous evaluation."
  },
  {
    id: "cb-angle-rules",
    category: "reference",
    categoryName: "Official Reference Sheet",
    name: "Circle and Triangle Angle Sums",
    latex: "\\sum \\theta_{\\text{triangle}} = 180^\\circ, \\quad \\text{Circle} = 360^\\circ = 2\\pi \\text{ rad}",
    vars: [
      { symbol: "\\sum \\theta", name: "Sum of three interior angles of a triangle = 180 degrees" },
      { symbol: "Circle", name: "Full rotation = 360 degrees = 2*pi radians" }
    ],
    explanation: "Fundamental angular constants provided at the bottom of the official College Board reference sheet.",
    traps: "For an n-sided polygon, the sum of interior angles is (n - 2) * 180 degrees. The sum of EXTERIOR angles for ANY convex polygon is ALWAYS 360 degrees!",
    desmosTip: "Desmos defaults to RADIAN mode! When dealing with SAT trig questions, always toggle the wrench icon to DEGREE mode unless radians are specified."
  },

  // --- 2. ALGEBRA ESSENTIALS ---
  {
    id: "alg-slope",
    category: "algebra",
    categoryName: "Algebra Essentials",
    name: "Slope Formula",
    latex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x} = \\frac{\\text{rise}}{\\text{run}}",
    vars: [
      { symbol: "m", name: "Rate of change / slope" },
      { symbol: "(x_1, y_1), (x_2, y_2)", name: "Two distinct points on the coordinate line" }
    ],
    explanation: "Steepness and direction of a straight line.",
    traps: "Reversing coordinates in denominator (e.g., (y2 - y1) / (x1 - x2)). Subtract in the SAME order. Also, vertical lines have UNDEFINED slope (x = k), while horizontal lines have ZERO slope (y = c).",
    desmosTip: "Create a table with points (x1, y1) and (x2, y2), then write 'y_1 ~ m*x_1 + b'. Desmos instantly reports m and b."
  },
  {
    id: "alg-slope-intercept",
    category: "algebra",
    categoryName: "Algebra Essentials",
    name: "Slope-Intercept Form",
    latex: "y = mx + b",
    vars: [
      { symbol: "m", name: "Slope (rate of change per unit of x)" },
      { symbol: "b", name: "y-intercept: value of y when x = 0 (point (0, b))" }
    ],
    explanation: "Standard functional representation of a linear relationship.",
    traps: "In word problems, b is the initial fee or base value, and m is the ongoing rate. Watch for units: if x is in minutes and m is dollars per hour, convert hours to minutes first!",
    desmosTip: "Type y = mx + b with sliders for m and b to see how slope rotates the line and b shifts it vertically."
  },
  {
    id: "alg-point-slope",
    category: "algebra",
    categoryName: "Algebra Essentials",
    name: "Point-Slope Form",
    latex: "y - y_1 = m(x - x_1)",
    vars: [
      { symbol: "m", name: "Slope of the line" },
      { symbol: "(x_1, y_1)", name: "A known point on the line" }
    ],
    explanation: "Fastest way to write a linear equation when given a slope and one coordinate point.",
    traps: "Sign mistakes! If the point is (-3, 5), the equation is y - 5 = m(x - (-3)) = m(x + 3). Don't forget that minus signs invert negative coordinates.",
    desmosTip: "You can type 'y - y1 = m(x - x1)' directly into Desmos without converting to slope-intercept form!"
  },
  {
    id: "alg-standard-form",
    category: "algebra",
    categoryName: "Algebra Essentials",
    name: "Standard Linear Form",
    latex: "Ax + By = C \\implies m = -\\frac{A}{B}, \\quad y\\text{-int} = \\frac{C}{B}, \\quad x\\text{-int} = \\frac{C}{A}",
    vars: [
      { symbol: "A, B, C", name: "Integers (typically A >= 0)" },
      { symbol: "-A/B", name: "Shortcut slope" },
      { symbol: "C/B", name: "y-intercept (set x = 0)" },
      { symbol: "C/A", name: "x-intercept (set y = 0)" }
    ],
    explanation: "Standard form used heavily in SAT systems of equations and linear constraints.",
    traps: "Slope is NEGATIVE A over B (-A/B). Students frequently drop the negative sign. If 3x - 4y = 12, slope is -3/(-4) = +3/4.",
    desmosTip: "Type standard form 'Ax + By = C' directly into Desmos without solving for y. Click directly on intercepts to inspect them."
  },
  {
    id: "alg-parallel-perp",
    category: "algebra",
    categoryName: "Algebra Essentials",
    name: "Parallel & Perpendicular Slopes",
    latex: "m_{\\parallel} = m_1, \\qquad m_{\\perp} = -\\frac{1}{m_1} \\iff m_1 \\cdot m_2 = -1",
    vars: [
      { symbol: "m_parallel", name: "Equal slopes produce parallel lines (never intersect)" },
      { symbol: "m_perp", name: "Opposite reciprocals produce perpendicular lines (intersect at 90 degrees)" }
    ],
    explanation: "Geometric slope relationships in the Cartesian plane.",
    traps: "Students often change the sign but forget to flip the fraction, or flip the fraction but forget the negative sign. For m = 2/5, perp slope is -5/2. For m = -3, perp slope is +1/3.",
    desmosTip: "Graph both lines in Desmos. The aspect ratio square icon ensures perpendicular lines visually look 90 degrees."
  },
  {
    id: "alg-system-solutions",
    category: "algebra",
    categoryName: "Algebra Essentials",
    name: "Linear Systems: Solution Conditions",
    latex: "\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases} \\implies \\begin{cases} \\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2} & \\text{Exactly 1 Solution} \\\\[4pt] \\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2} & \\text{No Solution (Parallel)} \\\\[4pt] \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} & \\text{Infinitely Many (Identical)} \\end{cases}",
    vars: [
      { symbol: "a_1, b_1, c_1", name: "Coefficients of line 1" },
      { symbol: "a_2, b_2, c_2", name: "Coefficients of line 2" }
    ],
    explanation: "Conditions determining the number of intersection points between two linear equations.",
    traps: "Extremely common in Digital SAT Module 2! Questions ask: 'For what value of k does the system have no solution?' Set a1/a2 = b1/b2 and cross-multiply to solve for k in 5 seconds! Make sure the equations are aligned in identical order (x then y).",
    desmosTip: "Type both equations with slider 'k'. Slide k until the two lines become parallel (no intersection) or overlap completely."
  },

  // --- 3. ADVANCED MATH ESSENTIALS ---
  {
    id: "adv-quadratic-formula",
    category: "advanced",
    categoryName: "Advanced Math Essentials",
    name: "Quadratic Formula",
    latex: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    vars: [
      { symbol: "a, b, c", name: "Coefficients of quadratic in standard form ax^2 + bx + c = 0 (a != 0)" },
      { symbol: "x", name: "Roots / solutions / x-intercepts / zeros" }
    ],
    explanation: "Universal solution to any single-variable quadratic equation.",
    traps: "The entire numerator is divided by 2a, not just the radical. Also, if b is negative (e.g. b = -6), then -b becomes +6. Watch for (-6)^2 = +36, NOT -36.",
    desmosTip: "Type 'y = ax^2 + bx + c' into Desmos. Tap on the x-intercepts to see exact or rounded decimal solutions in under 3 seconds."
  },
  {
    id: "adv-discriminant",
    category: "advanced",
    categoryName: "Advanced Math Essentials",
    name: "The Discriminant (Root Classifier)",
    latex: "\\Delta = b^2 - 4ac \\implies \\begin{cases} \\Delta > 0 & 2 \\text{ distinct real solutions} \\\\ \\Delta = 0 & 1 \\text{ real solution (tangent vertex)} \\\\ \\Delta < 0 & 0 \\text{ real solutions (no } x\\text{-intercepts)} \\end{cases}",
    vars: [
      { symbol: "\\Delta", name: "Discriminant value" },
      { symbol: "b^2 - 4ac", name: "Expression under the square root in the quadratic formula" }
    ],
    explanation: "Identifies the number and nature of real solutions without solving the quadratic.",
    traps: "If a question says 'intersects the line at exactly one point', set the quadratic equal to the line, bring everything to one side so it equals 0, and set b^2 - 4ac = 0!",
    desmosTip: "If a parameter k is in the equation, graph both curves and adjust slider k until the parabola touches the line at exactly 1 point."
  },
  {
    id: "adv-vertex-form",
    category: "advanced",
    categoryName: "Advanced Math Essentials",
    name: "Vertex Form & Vertex Coordinates",
    latex: "y = a(x - h)^2 + k \\iff \\text{Vertex at } (h, k), \\quad h = -\\frac{b}{2a}, \\quad k = f(h)",
    vars: [
      { symbol: "(h, k)", name: "Coordinates of vertex (maximum if a < 0, minimum if a > 0)" },
      { symbol: "x = h", name: "Vertical axis of symmetry" },
      { symbol: "a", name: "Vertical stretch/compression and direction of opening" }
    ],
    explanation: "Reveals the minimum or maximum value of a quadratic directly as constants in the equation.",
    traps: "Sign trap: y = 2(x - 3)^2 + 5 has vertex at (+3, 5), NOT (-3, 5). If y = 2(x + 4)^2 - 7, vertex is at (-4, -7). Also, question asks 'what value of x gives the minimum?' (answer is h), vs 'what IS the minimum value?' (answer is k)!",
    desmosTip: "Click directly on the apex/dip of any parabola in Desmos. The coordinates (h, k) pop up instantly as a grey dot."
  },
  {
    id: "adv-roots-properties",
    category: "advanced",
    categoryName: "Advanced Math Essentials",
    name: "Sum & Product of Roots (Vieta's Formulas)",
    latex: "x_1 + x_2 = -\\frac{b}{a}, \\qquad x_1 \\cdot x_2 = \\frac{c}{a}",
    vars: [
      { symbol: "x_1, x_2", name: "Solutions to ax^2 + bx + c = 0" },
      { symbol: "-b/a", name: "Sum of roots" },
      { symbol: "c/a", name: "Product of roots" }
    ],
    explanation: "Provides the sum and product of quadratic solutions without calculating the individual roots.",
    traps: "Notice the NEGATIVE sign on sum (-b/a) versus positive on product (c/a). If 2x^2 - 8x + 5 = 0, sum of roots is -(-8)/2 = +4.",
    desmosTip: "To check: find the two x-intercepts on Desmos, note x1 and x2, and sum them in line 2: 'x1 + x2'."
  },
  {
    id: "adv-exp-growth-decay",
    category: "advanced",
    categoryName: "Advanced Math Essentials",
    name: "Exponential Growth & Decay",
    latex: "f(t) = P(1 \\pm r)^t = a \\cdot b^t, \\qquad \\text{Growth: } b = 1 + r > 1, \\quad \\text{Decay: } 0 < b = 1 - r < 1",
    vars: [
      { symbol: "P", name: "Initial amount (y-intercept when t = 0)" },
      { symbol: "r", name: "Growth or decay rate per time unit (as decimal)" },
      { symbol: "t", name: "Number of time periods" },
      { symbol: "b", name: "Growth factor (b > 1) or decay factor (0 < b < 1)" }
    ],
    explanation: "Models quantities that multiply by a constant ratio over equal time intervals.",
    traps: "Time interval scaling: if a population triples every 5 years, the formula is f(t) = P * (3)^(t/5), NOT 3^(5t). Also, if decaying by 18%, the factor inside is 1 - 0.18 = 0.82, NOT 0.18!",
    desmosTip: "Fit exponential data using regression 'y_1 ~ a * b^(x_1)'. Desmos outputs a and b instantly."
  },
  {
    id: "adv-circle-equation",
    category: "advanced",
    categoryName: "Advanced Math Essentials",
    name: "Equation of a Circle in Coordinate Plane",
    latex: "(x - h)^2 + (y - k)^2 = r^2",
    vars: [
      { symbol: "(h, k)", name: "Center coordinates of the circle" },
      { symbol: "r", name: "Radius of the circle (length > 0)" },
      { symbol: "r^2", name: "Right-hand side constant" }
    ],
    explanation: "Locus of all points equidistant from center point (h, k).",
    traps: "The right side is r SQUARED. If equation is (x - 2)^2 + (y + 3)^2 = 49, radius is 7, NOT 49. Center is (+2, -3). When expanded as x^2 + y^2 + Dx + Ey + F = 0, complete the square for both x and y!",
    desmosTip: "Type ANY circle equation into Desmos (even un-factored like x^2 + y^2 - 6x + 8y = 25). Desmos plots it instantly! Click top, bottom, left, right edges to find center and radius in 5 seconds."
  },
  {
    id: "adv-exponent-rules",
    category: "advanced",
    categoryName: "Advanced Math Essentials",
    name: "Exponent & Radical Transformation Rules",
    latex: "x^{\\frac{a}{b}} = \\sqrt[b]{x^a} = (\\sqrt[b]{x})^a, \\quad x^{-n} = \\frac{1}{x^n}, \\quad x^a \\cdot x^b = x^{a+b}, \\quad \\frac{x^a}{x^b} = x^{a-b}, \\quad (x^a)^b = x^{ab}",
    vars: [
      { symbol: "a/b", name: "Rational exponent: numerator is power, denominator is root" },
      { symbol: "x^{-n}", name: "Negative exponent indicates reciprocal" }
    ],
    explanation: "Algebraic rules governing fractional exponents and radicals.",
    traps: "Remember that (x + y)^2 != x^2 + y^2. Similarly, sqrt(x^2 + y^2) != x + y! Also, 16^(3/4) = (16^(1/4))^3 = 2^3 = 8.",
    desmosTip: "Test if two algebraic expressions are equivalent by typing 'f(x) = original' and 'g(x) = candidate'. If their graphs coincide perfectly or f(2.7) == g(2.7), they are equivalent!"
  },

  // --- 4. DATA & STATISTICS ---
  {
    id: "data-compound-interest",
    category: "data",
    categoryName: "Data & Statistics",
    name: "Compound Interest Formula",
    latex: "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}",
    vars: [
      { symbol: "A", name: "Final balance / future value" },
      { symbol: "P", name: "Principal initial deposit" },
      { symbol: "r", name: "Annual nominal interest rate (decimal)" },
      { symbol: "n", name: "Compounding frequency per year (1=annual, 4=quarterly, 12=monthly, 365=daily)" },
      { symbol: "t", name: "Time in years" }
    ],
    explanation: "Calculates interest earned on both initial principal and accumulated prior interest.",
    traps: "Mixing up n and t. Monthly means n = 12. If compounded quarterly for 3 years, the exponent is n*t = 4 * 3 = 12 total compounding cycles.",
    desmosTip: "Type the full formula with numbers directly into Desmos for immediate numerical result."
  },
  {
    id: "data-percent-change",
    category: "data",
    categoryName: "Data & Statistics",
    name: "Percentage Change Formula",
    latex: "\\% \\Delta = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%",
    vars: [
      { symbol: "\\text{New}", name: "Final value after change" },
      { symbol: "\\text{Old}", name: "Original starting reference value (the baseline in denominator)" }
    ],
    explanation: "Relative difference expressed as a percentage of the original baseline.",
    traps: "Always divide by the ORIGINAL baseline, NOT the new value. If a price drops from $100 to $80, it's (80 - 100)/100 = -20%. If it increases from $80 back to $100, it's (100 - 80)/80 = +25% (different base!).",
    desmosTip: "In Desmos: (New - Old) / Old * 100 gives the exact signed percent change."
  },
  {
    id: "data-mean-median-range",
    category: "data",
    categoryName: "Data & Statistics",
    name: "Measures of Center & Spread",
    latex: "\\bar{x} = \\frac{\\sum x_i}{n}, \\quad \\text{Range} = \\text{Max} - \\text{Min}, \\quad \\text{IQR} = Q_3 - Q_1",
    vars: [
      { symbol: "\\bar{x}", name: "Arithmetic Mean (average, heavily skewed by outliers)" },
      { symbol: "\\text{Median}", name: "Middle value of ordered dataset (resistant to outliers)" },
      { symbol: "\\text{IQR}", name: "Interquartile Range: spread of middle 50% of observations" }
    ],
    explanation: "Summary statistics describing the central tendency and dispersion of a distribution.",
    traps: "Skewness rule: If distribution is skewed right (tail to the right), Mean > Median. If skewed left (tail to the left), Mean < Median. If symmetric, Mean \\approx Median. Outliers affect the Mean significantly, but have little or no effect on the Median!",
    desmosTip: "Type data into a Desmos list: 'L = [12, 15, 18, 22, 29]'. Then type 'mean(L)', 'median(L)', 'stats(L)' for full 5-number summary."
  },
  {
    id: "data-margin-error",
    category: "data",
    categoryName: "Data & Statistics",
    name: "Margin of Error & Sample Size",
    latex: "\\text{Confidence Interval} = \\hat{p} \\pm \\text{MOE}, \\qquad \\text{MOE} \\propto \\frac{1}{\\sqrt{n}}",
    vars: [
      { symbol: "\\hat{p}", name: "Sample estimate / point estimate" },
      { symbol: "\\text{MOE}", name: "Margin of error" },
      { symbol: "n", name: "Sample size" }
    ],
    explanation: "Reflects the precision and uncertainty associated with a random sample statistic.",
    traps: "To cut the margin of error in HALF, sample size n must QUADRUPLE (4x). Margin of error only accounts for random sampling variability, NOT sampling bias, nonresponse bias, or measurement errors. Findings can only be generalized to the population from which the random sample was selected.",
    desmosTip: "Confidence bounds: lower bound = estimate - MOE, upper bound = estimate + MOE. Plausible true population values fall within this interval."
  },
  {
    id: "data-std-dev",
    category: "data",
    categoryName: "Data & Statistics",
    name: "Standard Deviation Interpretation",
    latex: "\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}, \\qquad 68\\% - 95\\% - 99.7\\% \\text{ Rule}",
    vars: [
      { symbol: "\\sigma", name: "Standard deviation (spread around the mean)" },
      { symbol: "68\\%", name: "Data within 1 standard deviation of mean (\\mu \\pm 1\\sigma)" },
      { symbol: "95\\%", name: "Data within 2 standard deviations of mean (\\mu \\pm 2\\sigma)" },
      { symbol: "99.7\\%", name: "Data within 3 standard deviations of mean (\\mu \\pm 3\\sigma)" }
    ],
    explanation: "Measures typical distance between individual data points and the distribution mean.",
    traps: "College Board will show two histograms and ask which has a larger standard deviation. The distribution with values clustered closely around the center has a SMALLER standard deviation; the one with values spread out into the tails has a LARGER standard deviation.",
    desmosTip: "Type 'stdev(L)' or 'stdevp(L)' in Desmos with your dataset list."
  },

  // --- 5. TRIGONOMETRY ---
  {
    id: "trig-unit-circle",
    category: "trigonometry",
    categoryName: "Trigonometry & Advanced Angles",
    name: "Radians to Degrees Conversion",
    latex: "\\pi \\text{ radians} = 180^\\circ \\iff 1 \\text{ rad} = \\frac{180^\\circ}{\\pi}, \\quad 1^\\circ = \\frac{\\pi}{180} \\text{ rad}",
    vars: [
      { symbol: "\\pi", name: "Half circle in radians (approx 3.14159 rad)" },
      { symbol: "180^\\circ", name: "Half circle in degrees" }
    ],
    explanation: "Conversion factor between angular degree measurement and radian arc measurements.",
    traps: "Key landmark angles to memorize: 30° = pi/6, 45° = pi/4, 60° = pi/3, 90° = pi/2, 180° = pi, 270° = 3pi/2, 360° = 2pi.",
    desmosTip: "Type 'angle * (180/pi)' to convert radians to degrees, or 'angle * (pi/180)' to convert degrees to radians."
  },
  {
    id: "trig-cofunction",
    category: "trigonometry",
    categoryName: "Trigonometry & Advanced Angles",
    name: "Sine/Cosine Complementary Co-Function Identity",
    latex: "\\sin(x^\\circ) = \\cos(90^\\circ - x^\\circ) \\iff \\sin(A) = \\cos(B) \\iff A + B = 90^\\circ",
    vars: [
      { symbol: "A, B", name: "Complementary acute angles in any right triangle (A + B = 90 degrees or pi/2)" }
    ],
    explanation: "The sine of an angle equals the cosine of its complementary angle.",
    traps: "Tested frequently: 'If sin(4x - 10) = cos(3x + 9), find x.' Set the two angle expressions to sum to 90 degrees! (4x - 10) + (3x + 9) = 90 => 7x - 1 = 90 => 7x = 91 => x = 13. Do NOT set 4x - 10 = 3x + 9!",
    desmosTip: "Graph y = sin(x) and y = cos(90 - x) in DEGREE mode to verify they are identical curves."
  },
  {
    id: "trig-soh-cah-toa",
    category: "trigonometry",
    categoryName: "Trigonometry & Advanced Angles",
    name: "SOH CAH TOA Definitions",
    latex: "\\sin\\theta = \\frac{\\text{Opp}}{\\text{Hyp}}, \\quad \\cos\\theta = \\frac{\\text{Adj}}{\\text{Hyp}}, \\quad \\tan\\theta = \\frac{\\text{Opp}}{\\text{Adj}} = \\frac{\\sin\\theta}{\\cos\\theta}",
    vars: [
      { symbol: "\\text{Opp}", name: "Side opposite angle theta" },
      { symbol: "\\text{Adj}", name: "Side adjacent to angle theta (not hypotenuse)" },
      { symbol: "\\text{Hyp}", name: "Hypotenuse (longest side opposite 90 degree angle)" }
    ],
    explanation: "Trigonometric ratios defined on acute angles of right triangles.",
    traps: "Opposite and Adjacent swap depending on which acute angle you are referencing! Also, remember the fundamental identity sin^2(theta) + cos^2(theta) = 1.",
    desmosTip: "Ensure Desmos is set to DEGREE mode (wrench icon -> Degrees). Otherwise sin(30) returns -0.988 instead of 0.5!"
  },
  {
    id: "trig-arc-length",
    category: "trigonometry",
    categoryName: "Trigonometry & Advanced Angles",
    name: "Arc Length Formula",
    latex: "s = r\\theta \\quad (\\theta \\text{ in radians}) \\iff s = \\frac{\\theta^\\circ}{360^\\circ} \\cdot 2\\pi r \\quad (\\theta \\text{ in degrees})",
    vars: [
      { symbol: "s", name: "Arc length along circle circumference" },
      { symbol: "r", name: "Circle radius" },
      { symbol: "\\theta", name: "Central angle subtending the arc" }
    ],
    explanation: "Linear distance along the curved edge of a circular sector.",
    traps: "Using s = r*theta when theta is in DEGREES! s = r*theta works ONLY when theta is in RADIANS. If given 60 degrees and radius 6, either convert 60° to pi/3 rad (s = 6 * pi/3 = 2pi), or use (60/360)*2*pi*6 = 2pi.",
    desmosTip: "In Desmos, compute arc length in 2 seconds: type '(angle_degrees / 360) * 2 * pi * r'."
  },
  {
    id: "trig-sector-area",
    category: "trigonometry",
    categoryName: "Trigonometry & Advanced Angles",
    name: "Sector Area Formula",
    latex: "A = \\frac{1}{2}r^2\\theta \\quad (\\theta \\text{ in radians}) \\iff A = \\frac{\\theta^\\circ}{360^\\circ} \\cdot \\pi r^2 \\quad (\\theta \\text{ in degrees})",
    vars: [
      { symbol: "A", name: "Area of the circular slice (sector)" },
      { symbol: "r", name: "Radius of circle" },
      { symbol: "\\theta", name: "Central angle of the sector" }
    ],
    explanation: "2D surface area of a slice of a circle bounded by two radii and an arc.",
    traps: "Sector area is a fraction of the circle's TOTAL area (pi*r^2). Don't confuse it with arc length (fraction of 2*pi*r).",
    desmosTip: "Type '(angle / 360) * pi * r^2' directly into Desmos for instant sector area evaluation."
  }
];
