let questions = [{
    id: 1,
    question: "Which one of the following is an application of Stack Data Structure?",
    answer: "All of the above",
    options: [
      "Managing function calls",
      "The stock span problem",
      "Arithmetic expression evaluation",
      "All of the above"
    ]
  },
  {
    id: 2,
    question: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
    answer: "Merge Sort",
    options: [
      "Insertion Sort",
      "Quick Sort",
      "Heap Sort",
      "Merge Sort"
    ]
  },
  {
    id: 3,
    question: "A program P reads in 500 integers in the range [0..100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies? ",
    answer: "An array of 50 numbers",
    options: [
      "An array of 50 numbers",
      "An array of 100 numbers",
      "An array of 500 numbers",
      "A dynamically allocated array of 550 numbers"

    ]
  },
  {
    id: 4,
    question: " In order traversal of binary search tree will produce ",
    answer: "sorted list",
    options: [
      "unsorted list",
      "reverse of input",
      "sorted list",
      "None of these"
      
    ]
  },
  {
    id: 5,
    question: "What data structure is used for breadth first traversal of a graph?",
    answer: "queue",
    options: [
      "queue",
      "stack",
      "list",
      "None of these"
      
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
    question: "Maximum degree of any vertex in a simple graph of vertices n is",
    answer: " n - 1",
    options: [
      " 2n - 1",
      "n + 1",
      " n - 1",
      "None of these"
      
    ]
  },
  {
    id: 8,
    question: " Which of the following has search effeciency of Ο(1) −",
    answer: "Hash Table",
    options: [
      "Tree",
      "Hash Table",
      "Linked-List",
      "Heap"
      
    ]
  },
  {
    id: 9,
    question: " Shell sort uses",
    answer: "insertion sort",
    options: [
      "insertion sort",
      "merge sort",
      "selection sort",
      "quick sort"
      
    ]
  },
  {
    id: 10,
    question: "Which of the following uses memoization?",
    answer: " Dynamic programming approach",
    options: [
      "Greedy approach",
      "Divide and conquer approach",
      " Dynamic programming approach",
      "None of these"
      
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