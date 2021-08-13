//1)버튼을 선택해서 각 버튼에 이벤트 리스너를 부여해주기 

//부모노드의 형제들에  hidden의유무로 지우고 넣기로 할 수있었음 
//문제: 한개가 열릴시 다른 부분이 닫히는 것을 못함 
const btns= document.querySelectorAll("button");
const answer= document.querySelectorAll(".answer-text")





btns.forEach(openbtn=>{openbtn.addEventListener('click',function(e){
    const questions= e.currentTarget.parentNode;
  
    const result= questions.nextElementSibling;
    result.classList.toggle("hidden");})})

