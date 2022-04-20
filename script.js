const loginForm = document.querySelector("#login-Form");
const loginInput = document.querySelector("#login-Form input");


function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value; 
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit); 