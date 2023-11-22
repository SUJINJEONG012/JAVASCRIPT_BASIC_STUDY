//추가 버튼 클릭 시 실행하는 함수

const onClickAdd = function(){
    //텍스트 박스의 엘리먼트를 얻는다.
    const textEl = document.getElementById("add-text");

    // 텍스스 박스의 값을 얻는다.
    const text = textEl.value;

    //텍스트 박스를 초기화 한다.
    textEl.value= "";

    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = text;
    const button = document.createElement("button");
    button.textContent = "삭제";

    //버튼 클릭시 행을 삭제하는 처리
    button.addEventListener("click", ()=>{
        //삭제 대상 행(li)을 얻는다.
        //close는 부모요소와 일치하는 문자열을 찾는 메서드
        const deleteTarget = button.closest("li");
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    //div태그 아래에 p태그와 button태그 설정
    div.appendChild(p);
    div.appendChild(button);
    //li태그 아래에 div태그 설정
    li.appendChild(div);
 

    //메모 목록 리스트에 li태그 설정
    document.getElementById("memo-list").appendChild(li);

};

//추가 버튼 클릭시 onClickAdd()함수를 실행하도록 등록
document.getElementById("add-button").addEventListener("click", ()=>{
 onClickAdd();
});

