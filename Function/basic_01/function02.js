/* 
매개변수와 인수, (파라미터,아큐먼트)
함수를 선언할땐 파라미터(매개변수), 함수를 호출할땐 아큐먼트(인수)
*/

function a(parameter){
    console.log(parameter);
};
a('argument'); //argument 

//a 함수선언에 parameter에 매개변수 넣고, a함수 호출할때 'argument'를 매개변수에 대입해서 호출함




function a1(w,x,y,z){
   console.log(w,x,y,z);
   console.log(arguments);
};

a1('Hello','Parameter', 'Argument');

//console.log(arguments); 선언하지 않았는데 쓸 수 있는건 function 함수 안에선 기본으로 사용 할 수있음. 화살표 함수안에선 X




