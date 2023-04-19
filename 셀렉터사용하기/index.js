// //foo요소
// document.querySelector("#foo");
// //list 요소 두 번째 item요소
// document.querySelector('.list .item:nth-child(2)');


const logElement = document.querySelector('#log');
logElement.innerHTML = '안녕하세요.';

//box forEach 리스트 가져오기 
// const BoxList = document.querySelectorAll('.box');
// BoxList.forEach((targetBox)=>{
// console.log(targetBox);
// }); 


//box for문 리스트 가져오기 
// const boxList = document.querySelectorAll('.box');
// const boxLength = boxList.length;

// for( let index =0; index < boxLength; index++){
//     console.log(boxList[index]);
// }

document.querySelectorAll('.box').forEach((targetBox)=>{
 targetBox.addEventListener("click", ()=>{
    alert(`${targetBox.textContent} 클릭`);
 });
});