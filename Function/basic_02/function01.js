/*객체 리터럴

배열, 함수도 객체이다. 
객체 리터럴은 함수나,배열이 아닌 것 들중에서 특정 모양을 가지면 
객체 리터럴이라고 부른다 

특정모양은 {} 중괄호를 사용하는 문법

*/

const angela = {
    name: '안젤라',
    year: 1992,
    month: 4,
    date: 24,
    gender: '여성',
};

/*
그럼 배열을 왜 사용하지 않고 리터럴을 사용하는걸까? 
가장 큰 차이점은 생김새
객체 리터럴은 속성이 있고, 속성의이름, 속성의값들이 있다.
배열은 이름이 안붙어있고, 인덱스만 있다.

이름이 필요하다 > 객체 리터럴
이름이 필요없다 > 배열
*/

console.log(angela.name);
console.log(angela['name']);

// 객체 수정 , 속성에 접근해서 수정 
angela.gender='F';
console.log(angela);

//객체 속성 제거
delete angela.gender;


// 객체의 속성 값으로 함수를 넣었을때 이 속성을 특별히 '메서드' 라 한다.

//debug 객체안에 test메서드
const debug= {
    test :  function (value){
        console.log(value);
    },
}
debug.test('Hello, World');

/*
객체간의 비교 , 객체는 서로 비교하면 false가 나옴. 배열도 마찬가지, 함수도 마찬가지
객체끼리 비교해서 true로 나오게 할려면, 변수안에 저장을 해놓고 비교를 해야한다.
*/

const a = {name: "angela"};
const array = [1,2,a];
console.log(a === array[2]);

// 객체가 아닌 값은 원시값

//참조할땐 true
const a2 = {name: 'angela'}
const b = a2;

a2.name ='Sujun';
b.name = 'Sujin';


const angela = {
    name : {
        first:'정',
        last:'수진',
    },
    gender : 'w',
};

angela.name.last;
angela['name']['last'];

