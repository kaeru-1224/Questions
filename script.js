//1)버튼을 선택해서 각 버튼에 이벤트 리스너를 부여해주기 

//부모노드의 형제들에  hidden의유무로 지우고 넣기로 할 수있었음 
//문제: 한개가 열릴시 다른 부분이 닫히는 것을 못함 
/*
const btns= document.querySelectorAll("button");



btns.forEach(openbtn=>{openbtn.addEventListener('click',function(e){
    const answer= document.querySelectorAll(".answer-text")
    const questions= e.currentTarget.parentNode;
    const result= questions.nextElementSibling;
    answer.forEach(
        e=> {
            const hidden =e.classList.contains("hidden");
            if(hidden!==3){
                result.classList.toggle("hidden")
            }
        }
    )
})})*/


const questions= document.querySelectorAll(".questions-text")

questions.forEach( question=> {
    const btn =question.querySelector("button");
    btn.addEventListener('click',()=>{
        questions.forEach(item=> {
           if(item===question){
            question.querySelector(".answer-text").classList.toggle("hidden");}
            else( question.querySelector(".answer-text").classList.toggle("hidden"))}
        )


    }); question.querySelector(".answer-text").classList.toggle("hidden")

        
        });
  
        


