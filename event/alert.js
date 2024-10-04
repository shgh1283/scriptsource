const box = document.querySelector(".alert-box");

// const showbtn = () => {
//   box.style.display = "block";
// };
// const hidebtn = () => {
//   box.style.display = "none";
// };
// document.querySelector(".show").addEventListener("click", showbtn);

// document.querySelector(".close").addEventListener("click", hidebtn);

// 함수에서 하는 일이 동일함 => block or none 의 값을 전달인자 처리 가능
const notification = (state) => (box.style.display = state);
document
  .querySelector(".show")
  .addEventListener("click", () => notification("block"));
document
  .querySelector(".close")
  .addEventListener("click", () => notification("none"));
