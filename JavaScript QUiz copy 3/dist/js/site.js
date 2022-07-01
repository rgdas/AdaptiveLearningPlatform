let questions = [{
    id: 1,
    question: "The correct sequence of HTML tags for starting a webpage is -",
    answer: "HTML, Head, Title, Body",
    options: [
      "Head, Title, HTML, body",
      "HTML, Body, Title, Head",
      "HTML, Head, Title, Body",
      "HTML, Head, Title, Body"
    ]
  },
  {
    id: 2,
    question: "CSS stands for -",
    answer: "Cascading style sheets",
    options: [
      "Cascade style sheets",
      "Cascading style sheets",
      "Color and style sheets",
      "None of the above"
    ]
  },
  {
    id: 3,
    question: "Which type of JavaScript language is ___ ",
    answer: "Object-Based",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level"

    ]
  },
  {
    id: 4,
    question: " input tag is - ",
    answer: "an empty tag.",
    options: [
      "a format tag.",
      "an empty tag.",
      "All of the above",
      "None of the above"
      
    ]
  },
  {
    id: 5,
    question: "Which of the following property is used as the shorthand property for the padding properties?",
    answer: "padding",
    options: [
      "padding-left",
      "padding",
      "padding-right",
      "All of the above"
      
    ]
  },
  {
    id: 6,
    question: "Which one of the following also known as Conditional Expression:",
    answer: "immediate if",
    options: [
      "Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "immediate if"
      
    ]
  },
  {
    id: 7,
    question: "Are the negative values allowed in padding property?",
    answer: " No",
    options: [
      " Yes",
      "No",
      "Can't say",
      "May be"
      
    ]
  },
  {
    id: 8,
    question: " Which of the following command is used to install create-react-app?",
    answer: "npm install -g create-react-app",
    options: [
      "npm install -g create-react-app",
      "npm install create-react-app",
      "npm install -f create-react-app",
      "install -g create-react-app"
      
    ]
  },
  {
    id: 9,
    question: " The hr tag in HTML is used for -",
    answer: "horizontal ruler",
    options: [
      "horizontal ruler",
      "new paragraph",
      "vertical ruler",
      "new line"
      
    ]
  },
  {
    id: 10,
    question: "Which of the following are the advantages of React.js?",
    answer: " All of the above",
    options: [
      "React.js can increase the application's performance with Virtual DOM.",
      "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
      " React.js can render both on client and server side.",
      "All of the above"
      
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