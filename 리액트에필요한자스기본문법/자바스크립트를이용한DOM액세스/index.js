// 버튼 추가
const button = document.createElement("button");
console.log(button);

button.textContent = "버튼";

const div1El = document.querySelector(".container");
console.log(div1El);
div1El.appendChild(button);

// h1삭제
const h1El = document.getElementById("title");
//body태그 얻기
const bodyEl = document.querySelector("body");
bodyEl.removeChild(h1El);
//body태그 아래부터 삭제, 내용이 전부 다 삭제됨
bodyEl.textContent = null; 
