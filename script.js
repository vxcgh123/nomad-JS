const loginInput = document.querySelector("#login-Form input");
const loginButton = document.querySelector("#login-Form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);