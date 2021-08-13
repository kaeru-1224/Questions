const btn1 = document.querySelectorAll(".btn");
const a1= document.querySelectorAll(".answer-text")

function showAnswer(){
    a1.forEach(a1=>{if(a1[0]){console.log(a1[0])}} )

    
}


btn1.forEach(btn=> {btn.addEventListener('click',showAnswer)})