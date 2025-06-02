export const mathData = {
  Algorithmic_Thinking: {
    name: "Set Algorithmic Thinking (Section 1)",
    category: "basic-math interview",
    questions: [
      {
        id: 1,
        question: "What is the time complexity of binary search?",
        image:
          "https://fastly.picsum.photos/id/10/367/267.jpg?hmac=XRdepQX9y39tepelazZaEAxb6SbCWtual9_w28FPb6U",

        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
        correct: 2,
      },
      {
        id: 2,
        question: "Which algorithm uses a divide and conquer approach?",
        options: [
          "Bubble Sort",
          "Merge Sort",
          "Insertion Sort",
          "Selection Sort",
        ],
        correct: 1,
      },
      {
        id: 3,
        question: "What is the worst-case time complexity of quicksort?",
        image:
          "https://fastly.picsum.photos/id/10/367/267.jpg?hmac=XRdepQX9y39tepelazZaEAxb6SbCWtual9_w28FPb6U",

        options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
        correct: 1,
      },
      {
        id: 4,
        question: "Which data structure uses FIFO principle?",
        options: ["Stack", "Tree", "Queue", "Heap"],
        correct: 2,
      },
      {
        id: 5,
        question: "What is the space complexity of recursive Fibonacci?",
        options: ["O(1)", "O(n)", "O(log n)", "O(2ⁿ)"],
        correct: 3,
      },
      {
        id: 6,
        question: "Which sorting algorithm has O(n) best-case time?",
        options: ["Bubble Sort", "Quicksort", "Insertion Sort", "Merge Sort"],
        correct: 2,
      },
    ],
  },
  Set_Basic_Maths: {
    name: "Set Algorithmic Thinking (Section 2)",
    category: "basic-math interview",
    questions: [
      {
        id: 1,
        question: "What is the sum of first 40 natural numbers?",
        options: ["780", "800", "820", "840"],
        correct: 2,
      },
      {
        id: 2,
        question: "If 2x + 5 = 15, what is the value of x?",
        options: ["5", "6", "7", "8"],
        correct: 0,
      },
      {
        id: 3,
        question: "What is the product of 0.2 × 0.02?",
        options: ["0.04", "0.004", "0.0004", "0.4"],
        correct: 1,
      },
      {
        id: 4,
        question: "Simplify: 15 ÷ (2 + 1/2)",
        options: ["5", "6", "7", "8"],
        correct: 1,
      },
      {
        id: 5,
        question: "What is 25% of 200?",
        options: ["40", "50", "60", "70"],
        correct: 1,
      },
      {
        id: 6,
        question: "If a = 3, b = 2, what is a² + b²?",
        options: ["9", "10", "11", "13"],
        correct: 3,
      },
    ],
  },
  Logic_and_DataInterpretation: {
    name: "Set Logic and DataInterpretation (Section 3)",
    category: "basic-math interview",
    questions: [
      {
        id: 1,
        question:
          "In a class of 50, 20 play cricket, 25 play football. If 10 play both, how many play neither?",
        options: ["5", "10", "15", "20"],
        correct: 2,
      },
      {
        id: 2,
        question:
          "If all cats are mammals, and some mammals are pets, which is true?",
        options: [
          "All cats are pets",
          "Some cats are pets",
          "No cats are pets",
          "None of these",
        ],
        correct: 3,
      },
      {
        id: 3,
        question:
          "A is B's sister. C is B's mother. D is C's father. How is A related to D?",
        options: ["Granddaughter", "Daughter", "Niece", "Sister"],
        correct: 0,
      },
      {
        id: 4,
        question:
          "If 5 machines make 5 widgets in 5 minutes, how long for 100 machines to make 100 widgets?",
        options: ["5 minutes", "10 minutes", "50 minutes", "100 minutes"],
        correct: 0,
      },
      {
        id: 5,
        question: "Which number comes next: 2, 6, 12, 20, 30, ...?",
        options: ["40", "42", "44", "48"],
        correct: 1,
      },
      {
        id: 6,
        question: "If RED is coded as 27, how is GREEN coded?",
        options: ["42", "49", "56", "64"],
        correct: 2,
      },
    ],
  },
  Logic_and_DataInterpretation_2: {
    name: "Set Logic and DataInterpretation (Section 4)",
    category: "basic-math interview",
    questions: [
      {
        id: 1,
        question:
          "In a survey, 60% like tea, 50% like coffee. If 30% like both, what percentage like neither?",
        options: ["10%", "20%", "30%", "40%"],
        correct: 1,
      },
      {
        id: 2,
        question: "A clock shows 3:15. What is the angle between hands?",
        options: ["0°", "7.5°", "15°", "30°"],
        correct: 1,
      },
      {
        id: 3,
        question: "If 1st January is Friday, what day is 1st February?",
        options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
        correct: 2,
      },
      {
        id: 4,
        question:
          "Complete: If all Zips are Zaps, and some Zaps are Zops, then...",
        options: [
          "Some Zips are Zops",
          "No Zips are Zops",
          "All Zaps are Zips",
          "None must be true",
        ],
        correct: 3,
      },
      {
        id: 5,
        question:
          "A cube has 6 faces. If painted and cut into 64 smaller cubes, how many have no face painted?",
        options: ["8", "16", "24", "32"],
        correct: 0,
      },
      {
        id: 6,
        question:
          "If 3 workers build a wall in 12 days, how many days for 4 workers?",
        options: ["8", "9", "10", "16"],
        correct: 1,
      },
    ],
  },
  Set_Advance_Maths: {
    name: "Set Advance Maths (Section 5)",
    category: "advanced-math",
    questions: [
      {
        id: 1,
        question: "What is the derivative of sin(x²)?",
        options: ["cos(x²)", "2x cos(x²)", "x² cos(x²)", "2 cos(x²)"],
        correct: 1,
      },
      {
        id: 2,
        question: "What is ∫ eˣ dx?",
        options: ["eˣ + C", "xeˣ + C", "ln|x| + C", "x²eˣ + C"],
        correct: 0,
      },
      {
        id: 3,
        question: "What is the solution to dy/dx = y?",
        options: ["y = x² + C", "y = Ceˣ", "y = sin x + C", "y = ln|x| + C"],
        correct: 1,
      },
      {
        id: 4,
        question: "What is the rank of matrix [[1,2],[3,6]]?",
        options: ["0", "1", "2", "3"],
        correct: 1,
      },
      {
        id: 5,
        question: "If z = x + iy, what is |z|?",
        options: ["x² + y²", "√(x² + y²)", "x² - y²", "√(x² - y²)"],
        correct: 1,
      },
      {
        id: 6,
        question: "What is the Laplace transform of 1?",
        options: ["1/s", "s", "1/s²", "e⁻ˢ"],
        correct: 0,
      },
      {
        id: 7,
        question: "What is the general solution to y'' + y = 0?",
        options: ["Aeˣ", "A sin x + B cos x", "Aeˣ + Be⁻ˣ", "Ax + B"],
        correct: 1,
      },
    ],
  },
  Problems_on_Numbers: {
    name: "Problems on Numbers",
    category: "basic-math interview",
    questions: [
      {
        id: 1,
        question:
          "The sum of two numbers is 25, difference is 13. What is the larger number?",
        options: ["18", "19", "20", "21"],
        correct: 1,
      },
      {
        id: 2,
        question: "What is the unit digit of 7⁹⁵?",
        options: ["1", "3", "7", "9"],
        correct: 2,
      },
      {
        id: 3,
        question: "Which is prime?",
        options: ["51", "57", "61", "87"],
        correct: 2,
      },
      {
        id: 4,
        question:
          "A number divided by 357 gives remainder 37. What is remainder when same number divided by 17?",
        options: ["2", "3", "5", "7"],
        correct: 1,
      },
      {
        id: 5,
        question:
          "The product of two numbers is 4107. If their HCF is 37, find the larger number.",
        options: ["101", "107", "109", "111"],
        correct: 3,
      },
      {
        id: 6,
        question: "0.01 times 0.02 is?",
        options: ["0.0002", "0.002", "0.02", "0.2"],
        correct: 0,
      },
      {
        id: 7,
        question: "Which is divisible by 6?",
        options: ["123456", "234567", "345678", "456789"],
        correct: 2,
      },
    ],
  },
  HCF_LCM: {
    name: "Problems on H.C.F and L.C.M",
    category: ["basic-math", "advanced-math"],
    questions: [
      {
        id: 1,
        question: "HCF of 2/3, 4/5, 6/7 is?",
        options: ["1/105", "2/105", "1/35", "2/35"],
        correct: 1,
      },
      {
        id: 2,
        question: "LCM of 16, 24, 36 is?",
        options: ["72", "96", "144", "192"],
        correct: 2,
      },
      {
        id: 3,
        question:
          "Greatest number dividing 17, 23, 35, 59 to leave same remainder?",
        options: ["2", "4", "6", "12"],
        correct: 2,
      },
      {
        id: 4,
        question: "HCF of 2923 and 3239 is?",
        options: ["37", "47", "73", "79"],
        correct: 3,
      },
      {
        id: 5,
        question:
          "LCM of two numbers is 495, HCF is 5. If one number is 55, find the other.",
        options: ["35", "45", "55", "65"],
        correct: 1,
      },
      {
        id: 6,
        question:
          "Greatest number dividing 43, 91, 183 to leave same remainder?",
        options: ["4", "7", "9", "13"],
        correct: 0,
      },
    ],
  },
  Arithmetic: {
    name: "Arithmetic - Ratios, Averages, Percentages",
    category: ["basic-math", "advanced-math", "interview"],
    questions: [
      {
        id: 1,
        question:
          "A batsman scored 110 runs with 3 boundaries and 8 sixes. What percent did he make by running?",
        options: ["45%", "500⁄11%", "600⁄11%", "55%"],
        correct: 1,
      },
      {
        id: 2,
        question: "If 20% of a = b, then b% of 20 is?",
        options: ["4% of a", "8% of a", "12% of a", "16% of a"],
        correct: 0,
      },
      {
        id: 3,
        question:
          "Average of 7 numbers is 60. If average of first 3 is 50, last 3 is 70, what is the 4th number?",
        options: ["50", "60", "70", "80"],
        correct: 1,
      },
      {
        id: 4,
        question:
          "The ratio 5:3 represents 16L of milk and water. If 4L water added, new ratio?",
        options: ["5:4", "3:2", "4:3", "2:1"],
        correct: 0,
      },
      {
        id: 5,
        question: "A number increased by 20% gives 60. What is the number?",
        options: ["40", "45", "50", "55"],
        correct: 2,
      },
      {
        id: 6,
        question: "If a:b = 2:3, b:c = 4:5, c:d = 6:7, find a:d.",
        options: ["7:15", "16:35", "8:21", "12:35"],
        correct: 1,
      },
      {
        id: 7,
        question:
          "Population increased from 50,000 to 60,000. What is the percentage increase?",
        options: ["15%", "18%", "20%", "25%"],
        correct: 2,
      },
      {
        id: 8,
        question:
          "Average weight of 10 people is 65kg. If one leaves, average becomes 63kg. Weight of person who left?",
        options: ["80kg", "83kg", "85kg", "87kg"],
        correct: 1,
      },
    ],
  },
  Permutation_and_Combination: {
    name: "Permutation and Combination",
    category: "advanced-math",
    questions: [
      {
        id: 1,
        question:
          "How many 4-digit numbers can be formed from 1,2,3,4,5 without repetition?",
        options: ["60", "120", "180", "240"],
        correct: 1,
      },
      {
        id: 2,
        question:
          "In how many ways can 5 prizes be given to 3 boys if each can receive any number?",
        options: ["15", "125", "243", "1024"],
        correct: 2,
      },
      {
        id: 3,
        question: "How many diagonals in a hexagon?",
        options: ["6", "9", "12", "15"],
        correct: 1,
      },
      {
        id: 4,
        question: "Number of words from 'MATHS' starting with vowel?",
        options: ["12", "24", "36", "48"],
        correct: 1,
      },
      {
        id: 5,
        question:
          "How many ways to arrange 3 books in 5 shelves if each shelf can hold multiple books?",
        options: ["60", "125", "243", "1024"],
        correct: 1,
      },
      {
        id: 6,
        question: "In how many ways can 6 people sit around a circular table?",
        options: ["120", "240", "720", "5040"],
        correct: 0,
      },
    ],
  },
  applied_mathematics: {
    name: "Applied Mathematics - Speed, Profit & Loss, Interest",
    category: ["basic-math", "advanced-math", "interview"],
    questions: [
      {
        id: 1,
        question:
          "A train crosses a pole in 9 sec at 60 km/h. Length of train?",
        options: ["120m", "150m", "180m", "324m"],
        correct: 1,
      },
      {
        id: 2,
        question:
          "If cost price of 20 articles equals selling price of 16, find gain percent.",
        options: ["16%", "20%", "25%", "30%"],
        correct: 2,
      },
      {
        id: 3,
        question:
          "A boat goes 15 km upstream in 3 hrs. If speed of stream is 2 km/h, find downstream speed.",
        options: ["8 km/h", "10 km/h", "12 km/h", "15 km/h"],
        correct: 2,
      },
      {
        id: 4,
        question: "₹5000 at 10% CI for 2 years amounts to?",
        options: ["₹5500", "₹6000", "₹6050", "₹6100"],
        correct: 2,
      },
      {
        id: 5,
        question:
          "A man buys 10 oranges for ₹30, sells at 4 for ₹15. Profit percent?",
        options: ["20%", "25%", "30%", "35%"],
        correct: 1,
      },
      {
        id: 6,
        question:
          "Two trains 100m and 120m long run at 50 km/h and 40 km/h in opposite directions. Time to cross?",
        options: ["6.8 sec", "7.2 sec", "8.8 sec", "9.5 sec"],
        correct: 2,
      },
    ],
  },
  Probability: {
    name: "Probability - General Questions",
    category: ["basic-math", "advanced-math", "interview"],
    questions: [
      {
        id: 1,
        question:
          "A bag has 2 red, 3 green, 2 blue balls. Probability none of two drawn is blue?",
        options: ["10/21", "11/21", "2/7", "5/7"],
        correct: 0,
      },
      {
        id: 2,
        question: "Two dice thrown. Probability sum is 7?",
        options: ["1/6", "1/9", "1/12", "5/36"],
        correct: 0,
      },
      {
        id: 3,
        question: "A card drawn from deck. Probability it's a king or heart?",
        options: ["1/13", "4/13", "1/4", "4/17"],
        correct: 1,
      },
      {
        id: 4,
        question: "Probability of getting 53 Sundays in a leap year?",
        options: ["1/7", "2/7", "3/7", "4/7"],
        correct: 1,
      },
      {
        id: 5,
        question: "Three fair coins tossed. Probability of exactly two heads?",
        options: ["1/8", "1/4", "3/8", "1/2"],
        correct: 2,
      },
      {
        id: 6,
        question: "A speaks truth 60%, B 50%. Probability they contradict?",
        options: ["0.2", "0.4", "0.5", "0.6"],
        correct: 2,
      },
    ],
  },
  Differentiation_and_Integration: {
    name: "Differentiation and Integration",
    category: "basic-math interview",
    questions: [
      {
        id: 1,
        question: "What is d/dx (sin(2x))?",
        options: ["2 cos(2x)", "cos(2x)", "2 sin(2x)", "sin(2x)"],
        correct: 0,
      },
      {
        id: 2,
        question: "∫(1/x) dx = ?",
        options: ["ln|x| + C", "x ln x + C", "1/x² + C", "x + C"],
        correct: 0,
      },
      {
        id: 3,
        question: "What is the derivative of ln(x² + 1)?",
        options: ["1/(x²+1)", "2x/(x²+1)", "2x ln(x²+1)", "x/(x²+1)"],
        correct: 1,
      },
      {
        id: 4,
        question: "∫₀¹ x dx = ?",
        options: ["0", "0.25", "0.5", "1"],
        correct: 2,
      },
      {
        id: 5,
        question: "What is d/dx (eˣ cos x)?",
        options: [
          "eˣ (cos x - sin x)",
          "eˣ (cos x + sin x)",
          "eˣ cos x",
          "-eˣ sin x",
        ],
        correct: 0,
      },
      {
        id: 6,
        question: "∫ sec²x dx = ?",
        options: ["tan x + C", "sec x + C", "cot x + C", "csc x + C"],
        correct: 0,
      },
      {
        id: 7,
        question: "What is the derivative of x^x?",
        options: ["xˣ (1 + ln x)", "xˣ ln x", "xˣ⁻¹", "x^x / ln x"],
        correct: 0,
      },
    ],
  },
};
