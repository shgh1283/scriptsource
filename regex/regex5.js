document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // 유효성 검사할 요소 찾기
  const id = document.querySelector("inputId");
  const email = document.querySelector("staticEmail");
  const password = document.querySelector("inputPassword");
  const name = document.querySelector("name");

  // 정규식 패턴 정의
  const regName = /^[가-힣]{2,5}$/;
  const regId = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#])[A-Za-z0-9!@#]{6,12}$/;
  const emailREG =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passEx =
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#_*])[A-Za-z0-9!@#_*]{8,12}$/;

  // closest(선택자) : 선택자와 일치한 부모 요소 중 가장 가까운 부모 요소
  console.log(id.closest("div"));

  if (regName.test(name.value)) {
    name.closest("div").lastElementChild.innerHTML = "이름을 확인해 주세요.";
  } else {
    name.closest("div").lastElementChild.innerHTML = "";
  }
  if (regId.test(id.value)) {
    // regId 다음 다음 span 찾기
    // regId.nextElementSilbing.nextElementSilbing.innerHTML
    id.closest("div").lastElementChild.innerHTML = "아이디를 확인해 주세요.";
  } else {
    id.closest("div").lastElementChild.innerHTML = "";
  }

  if (emailREG.test(email.value)) {
    email.closest("div").lastElementChild.innerHTML = "이메일를 확인해 주세요.";
  } else {
    email.closest("div").lastElementChild.innerHTML = "";
  }

  if (passEx.test(password.value)) {
    password.closest("div").lastElementChild.innerHTML =
      "비밀번호를 확인해 주세요.";
  } else {
    password.closest("div").lastElementChild.innerHTML = "";
  }
  // 폼 유효성 검사 이상이 없으면
  // e.target.submit();
});
