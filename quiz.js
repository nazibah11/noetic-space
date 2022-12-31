
let questions = [
    {
        id: 1,
        question: "Your Gender-",
        answer:"Male",
        options: [
            'Male',
            'Female',
            'Prefer Not to say',
            'Others'
        ]   
    },
    {
        id: 2,
        question: " Little interest or pleasure in doing things ",
        answer: "More than half of the day",
        options: [
          "Not at all",
          "Several days",
          "More than half of the day",
          "Nearly every day"
        ]
      },
      {
        id: 3,
        question: "Feeling down, depressed, or hopeless ",
        answer: "Not at all",
        options: [
          "Not at all",
          "Several days",
          "More than half of the day",
          "Nearly every day"
        ]
      },
      {
        id: 4,
        question: "Troubling with feeling sleep or too much sleep",
        answer: "Nearly every day",
        options: [
          "Not at all",
          "Several days",
          "More than half of the day",
          "Nearly every day"
        ]
      },
      {
        id: 5,
        question: "Poor appetite or overeating",
        answer: "Nearly every day",
        options: [
          "Not at all",
          "Several days",
          "More than half of the day",
          "Nearly every day"
        ]
      },
      {
        id: 6,
        question: "Feeling Tired or having little energy?",
        answer: "More than half of the day",
        options: [
          "Not at all",
          "Several days",
          "More than half of the day",
          "Nearly every day"
        ]
      },
      {
        id: 7,
        question: "How your mental health affected your work During the past 4 weeks?",
        answer: "More than half of the day",
        options: [
          "Not at all",
          "Several days",
          "More than half of the day",
          "Nearly every day"
        ]
      },
      {
        id: 8,
        question: "Feeling overwhelmed",
        answer: "More of the day",
        options: [
          "Not at all",
          "Several days",
          "More than half of the day",
          "Nearly every day"
        ]
      },
      {
        id: 9,
        question: "Moving or speaking slowly that other people could have noticed",
        answer: "Not at all",
        options: [
          "Not at all",
          "Several days",
          "More than half of the day",
          "Nearly every day"
        ]
      },
      {
        id: 10,
        question: "Thoughts that you would be better off dead or of hurting yourself in some way",
        answer: "Not at all",
        options: [
          "Not at all",
          "Several days",
          "More than half of the day",
          "Nearly every day"
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 2;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}