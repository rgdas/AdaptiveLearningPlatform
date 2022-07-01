let questions = [{
    id: 1,
    question: "Which of the following is the original creator of the C++ language?",
    answer: "Bjarne Stroustrup",
    options: [
      "Dennis Ritchie",
      "Ken Thompson",
      "Bjarne Stroustrup",
      "Brian Kernighan"
    ]
  },
  {
    id: 2,
    question: "What is a lint?",
    answer: "Analyzing tool",
    options: [
      "C interpreter",
      "C compiler",
      "Interactive debugger",
      "Analyzing tool"
    ]
  },
  {
    id: 3,
    question: "Which of the following is the correct syntax to read the single character to console in the C++ language?",
    answer: "get(ch)",
    options: [
      "Read ch()",
      "Scanf(ch)",
      "get(ch)",
      "Scanf(ch)"

    ]
  },
  {
    id: 4,
    question: " Why is a macro used in place of a function? ",
    answer: "It reduces code size.",
    options: [
      "It reduces code size.",
      "It reduces execution time.",
      "It reduces code size.t",
      "It increases code size."
      
    ]
  },
  {
    id: 5,
    question: "The C++ language is ______ object-oriented language. ",
    answer: "Semi Object-oriented or Partial Object-oriented",
    options: [
      "Not Object oriented",
      "Pure Object oriented",
      "Semi Object-oriented or Partial Object-oriented",
      "None of the above"
      
    ]
  },
  {
    id: 6,
    question: "In the C language, the constant is defined _______. ",
    answer: "Anywhere, but starting on a new line",
    options: [
      "Anywhere, but starting on a new line",
      "After main",
      "Before main",
      "None of the above"
      
    ]
  },
  {
    id: 7,
    question: "Which of the following features is required to be supported by the programming language to become a pure object-oriented programming language?",
    answer: "All of the above",
    options: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "All of the above"
    ]
  },
  {
    id: 8,
    question: "A pointer is a memory address. Suppose the pointer variable has p address 1000, and that p is declared to have type int*, and an int is 4 bytes long. What address is represented by expression p + 2?",
    answer: "1008",
    options: [
      "1006",
      "1008",
      "1004",
      "1006"
      
    ]
  },
  {
    id: 9,
    question: "Which of the following comment syntax is correct to create a single-line comment in the C++ program?",
    answer: "//Comment",
    options: [
      "/Comment/",
      "Comment//",
      "//Comment",
      "None of the above"
      
    ]
  },
  {
    id: 10,
    question: "C++ is a ___ type of language.",
    answer: " Middle-level language",
    options: [
      "Low-level language",
      "Middle-level language",
      "High-level Language",
      "None of above"
      
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);

};

function next() {


  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (const element of option) {
    element.onclick = function () {
      for (const element of option) {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
        }
      }
      element.classList.add("active");
    };
  }
}