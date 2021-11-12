const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HEDDIEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HEDDIEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function paintGreeting(username){
    greeting.classList.remove(HEDDIEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HEDDIEN_CLASSNAME);
    loginForm.addEventListener("submit",onSubmit);
}else{
    paintGreeting(saveUsername);
}