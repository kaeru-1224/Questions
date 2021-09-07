//1)버튼을 선택해서 각 버튼에 이벤트 리스너를 부여해주기 

//부모노드의 형제들에  hidden의유무로 지우고 넣기로 할 수있었음 
//문제: 한개가 열릴시 다른 부분이 닫히는 것을 못함 

// html에 각 class를 일일이 두는 경우
const questions= document.querySelectorAll(".answer-text")
const btn1 =document.querySelector(".first")
const btn2 =document.querySelector(".second")
const btn3 =document.querySelector(".third")
const btn =document.querySelectorAll(".open-btn")

btn.forEach(btns=> {
    if(btns.classList.contains(1))
  {  btns.addEventListener('click',()=>{btn1.classList.toggle('hidden')})}
    else if(btns.classList.contains(2)){
        btns.addEventListener('click',()=>{btn2.classList.toggle('hidden')}) 
    }
    else{btns.addEventListener('click',()=>{btn3.classList.toggle('hidden')})

    }});

/*
const questions= document.querySelectorAll(".questions-text")

questions.forEach( question=> {
    const btn =question.querySelector("button");
    btn.addEventListener('click',()=>{
        questions.forEach(item=> {
           if(item===question){
              question.querySelector(".answer-text").classList.toggle("hidden");}
            else(item.querySelector(".answer-text").classList.add("hidden"))}
        )


    }); question.querySelector(".answer-text").classList.toggle("hidden")

        
        });*/
  
        


