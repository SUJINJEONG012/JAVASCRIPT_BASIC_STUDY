/*
일정한동작을 함수로 만들어놓고 함수를 호출한다. 
함수도 반복적인 작업을한다.
*/

// 함수 작성코드 1,2가지 방법
function() {
 //실행 할 동작 입력
}

() => {}

// 함수 이름 붙이기 3가지 방법
function a() {}; //function 에 바로 이름넣어주는 => 함수선언문
const b = function(){}; // 변수에다가 함수를 넣어서 사용 => 함수표현식
const c = ()=> {}; //화살표함수는 변수에 이름을 적어서 저장 => 함수표현식이긴한데 화살표 함수


// 함수 선언
function a() {
  console.log("hello");
	console.log("Function");
}
//함수 호출
a(); 



function b(){
	return "반환값";
}
b(); //return 에 적은 반환값이 출력,


//함수 반환값은 기본값은 undefined, 생략이 된거지. 없는게 아님
//그리고 주의할점은 리턴은 함수를 종료시킨다. 반화해주면서 함수를 종료시키는 것.

function d(){
    return; // undefined은 생략가능. return undefined < 쓰지 않아도 괜찮
    }


 //함수안에 조건을 줘서 어디까지 실행할지 안 할지 정할수 있다.
 function d(){
  if(true){
    return;
  }  
  console.log("hello"); // if문안에 true이기 때문에 실행안됨, false일땐 실행
  // return undefiend 가 생략된거라고 볼 수 있다.
 }


 //반환값은 숫자, 문자열, null, undefined 객체 등 다 됨.
 //함수가 함수를 반환해주는건 교차함수라고 함


 