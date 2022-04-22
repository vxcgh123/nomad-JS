const loginForm = document.querySelector("#login-Form");
const loginInput = document.querySelector("#login-Form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value; 
  console.log(username);
}

function handleLinkClick(event) {
  event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit); 
link.addEventListener("click", handleLinkClick);