const themeChangeButton = document.querySelector('.theme-change-button');

//테마 변경 버튼 클릭시 처리 
themeChangeButton.addEventListener("click", ()=>{
    document.body.classList.toggle('theme-dark');
});