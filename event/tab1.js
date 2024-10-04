// tab - button 클릭시 짝 맞춰서 tab-content 보여주기
// const tabbtn = document.querySelector("ul.list li:first-child");
const firstLi = document.querySelector(".list li:nth-child(1)");
const secondLi = document.querySelector(".list li:nth-child(2)");
const lastLi = document.querySelector(".list li:nth-child(3)");

const firstDiv = document.querySelector(".container div:nth-child(2)");
const secondDiv = document.querySelector(".container div:nth-child(3)");
const lastDiv = document.querySelector(".container div:nth-child(4)");

firstLi.addEventListener("click", () => {
  firstDiv.classList.add("show");
  secondDiv.classList.remove("show");
  lastDiv.classList.remove("show");

  // orange 클래스명 부착과 제거
  firstLi.classList.add("orange");
  secondLi.classList.remove("orange");
  lastLi.classList.remove("orange");
});

secondLi.addEventListener("click", () => {
  secondDiv.classList.add("show");
  firstDiv.classList.remove("show");
  lastDiv.classList.remove("show");

  secondLi.classList.add("orange");
  firstLi.classList.remove("orange");
  lastLi.classList.remove("orange");
});

lastLi.addEventListener("click", () => {
  lastDiv.classList.add("show");
  secondDiv.classList.remove("show");
  firstDiv.classList.remove("show");

  lastLi.classList.add("orange");
  secondLi.classList.remove("orange");
  firstLi.classList.remove("orange");
});
