const box = document.querySelector(".alert-box");

// 함수에서 하는 일이 동일함 => block or none 의 값을 전달인자 처리 가능
const notification = (state, msg) => {
  box.style.display = state;
  // console.log(box.firstChild);

  box.firstChild.nodeValue = msg;
};
document
  .querySelector(".alert1")
  .addEventListener("click", () =>
    notification("block", "아이디를 입력해 주세요")
  );
document
  .querySelector(".alert2")
  .addEventListener("click", () =>
    notification("block", "비밀번호를 입력해 주세요")
  );
document
  .querySelector(".close")
  .addEventListener("click", () => notification("none"));
