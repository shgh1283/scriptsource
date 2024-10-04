// tab1.js 개선

// tab - button 클릭시 짝 맞춰서 tab-content 보여주기
// const tabbtn = document.querySelector("ul.list li:first-child");
const allLi = document.querySelectorAll(".tab-button");

const allDiv = document.querySelectorAll(".tab-content");

allLi.forEach((li, idx) => {
  li.addEventListener("click", (e) => {
    // 이벤트가 일어난 대상
    console.log(e.target);

    // show 클래스명 모든 요소 제거
    allLi.forEach((item) => item.classList.remove("orange"));
    // orange 클래스명 모든 요소 제거
    allDiv.forEach((item) => item.classList.remove("show"));

    // 현재 이벤트가 일어난 대상의 orange 클래스명 부착
    e.target.classList.add("orange");
    // allDiv 인덱스를 이용해서 show 부착
    allDiv[idx].classList.add("show");
  });
});
