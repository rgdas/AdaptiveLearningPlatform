let questions = [{
    id: 1,
    question: " Which of the following option leads to the portability and security of Java?",
    answer: "Bytecode is executed by JVM",
    options: [
      "The applet makes the Java code secure and portable",
      "Bytecode is executed by JVM",
      "Use of exception handling",
      "Dynamic binding between objects"
    ]
  },
  {
    id: 2,
    question: "Which of the following is not a Java features?",
    answer: "Use of pointers",
    options: [
      "Object-oriented",
      "Architecture Neutral",
      "Dynamic",
      "Use of pointers"
    ]
  },
  {
    id: 3,
    question: "The \u0021 article referred to as a ",
    answer: "Unicode escape sequence",
    options: [
      "Octal escape",
      "Hexadecimal",
      "Unicode escape sequence",
      "Line feed"

    ]
  },
  {
    id: 4,
    question: "  _____ is used to find and fix bugs in the Java programs. ",
    answer: "JDB",
    options: [
      "JVM",
      "JRE",
      "JDK",
      "JDB"
      
    ]
  },
  {
    id: 5,
    question: "What is the return type of the hashCode() method in the Object class?",
    answer: "int",
    options: [
      "Object",
      "int",
      "long",
      "void"
      
    ]
  },
  {
    id: 6,
    question: "Minimum number of queues required for priority queue implementation?",
    answer: "2",
    options: [
      "5",
      "4",
      "2",
      "3"
      
    ]
  },
  {
    id: 7,
    question: "Which of the following is a valid long literal?",
    answer: " 0xnf029L",
    options: [
      " ABH8097",
      "L990023",
      " 904423",
      "0xnf029L"
      
    ]
  },
  {
    id: 8,
    question: " What does the expression float a = 35 / 0 return?",
    answer: "Infinity",
    options: [
      "0",
      "Not a Number",
      "Infinity",
      "Run time exception"
      
    ]
  },
  {
    id: 9,
    question: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
    answer: "Javadoc tool",
    options: [
      "Javadoc tool",
      "javap tool",
      "javaw command",
      "javah command"
      
    ]
  },
  {
    id: 10,
    question: "Which package contains the Random class?",
    answer: " java.util package",
    options: [
      "java.lang package",
      "java.awt package",
      "java.util package",
      "java.io package"
      
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