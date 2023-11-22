console.log("Test");

// getElementById 사용 
const title1 =  document.getElementById("title");
console.log(title1);

//querySelector 사용
const title2 = document.querySelector("#title");
console.log(title2);

//클래스명으로 엘리먼트 얻기
// const containers = document.getElementsByClassName("container");
// console.log(containers);

const container = document.querySelector(".container");
console.log(container);

const containers = document.querySelectorAll(".container");
console.log(containers);


// div 생성
const divEl= document.createElement("div");
//console.log(divEl);

// p태그 생성
const pEl = document.createElement("p");

// h2태그 생성
const h2El = document.createElement("h2")

// div 태그 아래 p,h2 태그 추가 => p태그가 위에오고
divEl.appendChild(pEl);
divEl.appendChild(h2El);
console.log("appendChild : " , divEl);

// div 아래 맨 앞에 p태그와 h2태그를 추가 > h2가 위에 오고
// divEl.prepend(pEl);
// divEl.prepend(h2El);
// console.log("prepend: " ,divEl);


