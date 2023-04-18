/* 검색어 */
const searchWordText = document.querySelector("#search-word-input");

/* 지역리스트 */
const prefectureList = document.querySelectorAll('#prefecture-list button');

//문자가 입력될때마다 데이터 체크 작업실행
searchWordText.addEventListener("keyup", ()=>{
    //입력한 검색어
    const searchWord = searchWordText.value;

    //지역리스트의 루프처리
    prefectureList.forEach((element) => {
        //검색어가 없으면 모두 표시
        if(!searchWord || searchWord === ''){
            element.classList.remove('hide');
            return;
        }

        //데이터 name가져오기
        const prefectureName = element.dataset.name;
        const phonetic = element.dataset.phonetic;

        if(searchWord.charAt(0)=== prefectureName.charAt(0)|| searchWord.charAt(0) === phonetic.charAt(0)){
            element.classList.remove('hide');
        }else{
            element.classList.add('hide');
        }
    
    });
});
