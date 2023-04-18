// DOM 액세스 타이밍에 처리 실행
window.addEventListener("DOMContentLoaded", ()=>{
    //.box요소 개수 가져오기
    const boxNum = document.querySelectorAll('.box').length;
    //콘솔 출력
    console.log(`.box요소 개수는 ${boxNum} 입니다.`);
});