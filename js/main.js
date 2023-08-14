let signUp = document.querySelector("#signUp");
let signIn = document.querySelector("#signIn");
let logOut = document.querySelector("#logOut");

signIn?.addEventListener("click", function () {
  window.location.href = "index.html";
});
let nameSignUp = document.querySelector("#nameSignUp");
let emailSignUp = document.querySelector("#emailSignUp");
let passSignUp = document.querySelector("#passSignUp");
let signUpBtn = document.querySelector("#signUpBtn");
let success = document.querySelector(".success");
let required = document.querySelector(".required");
let emailError = document.querySelector(".email-exist");
let userList = [];
if (localStorage.getItem("userList")) {
  userList = JSON.parse(localStorage.getItem("userList"));
}
function addUser() {
  if (emailExist()) {
    let userOb = {
      name: nameSignUp.value,
      email: emailSignUp.value,
      pass: passSignUp.value,
    };
    userList.push(userOb);
    successMessage();
    localStorage.setItem("userList", JSON.stringify(userList));
  }
}

signUpBtn?.addEventListener("click", addUser);

function successMessage() {
  if (
    nameSignUp.value == "" ||
    emailSignUp.value == "" ||
    passSignUp.value == ""
  ) {
    required.classList.replace("d-none", "d-block");
    success.classList.replace("d-block", "d-none");
  } else {
    required.classList.replace("d-block", "d-none");
    success.classList.replace("d-none", "d-block");
  }
}

function emailExist() {
  if (userList == null) {
    return true;
  }
  for (let i = 0; i < userList.length; i++) {
    if (emailSignUp.value == userList[i].email) {
      emailError.classList.replace("d-none", "d-block");
      required.classList.replace("d-block", "d-none");
      success.classList.replace("d-block", "d-none");
      return false;
    } else {
      emailError.classList.replace("d-block", "d-none");
    }
  }
  return true;
}

/////SignIN
let emailSignIn = document.querySelector("#emailSignIn");
let passSignIn = document.querySelector("#passSignIn");
let loginBtn = document.querySelector("#loginBtn");
let incorrectMess = document.querySelector(".incorrectMess");

signUp?.addEventListener("click", function () {
  window.location.href = "Signup.html";
});
if (localStorage.getItem("userList")) {
  userList = JSON.parse(localStorage.getItem("userList"));
}

function registration() {
  if (userList == null) {
    incorrectMess.classList.replace("d-none", "d-block");
    return false;
  }
  for (let i = 0; i < userList.length; i++) {
    if (
      emailSignIn.value == userList[i].email &&
      passSignIn.value == userList[i].pass
    ) {
      incorrectMess.classList.replace("d-block", "d-none");
      localStorage.setItem("currentUser", JSON.stringify(userList[i]));
      return true;
    } else {
      incorrectMess.classList.replace("d-none", "d-block");
      required.classList.replace("d-block", "d-none");
    }
  }
  return false;
}
function requiredMessage() {
  if (emailSignIn.value == "" || passSignIn.value == "") {
    required.classList.replace("d-none", "d-block");
    incorrectMess.classList.replace("d-none", "d-block");

    return false;
  } else {
    required.classList.replace("d-block", "d-none");
    incorrectMess.classList.replace("d-block", "d-none");
    return true;
  }
}
loginBtn?.addEventListener("click", function () {
  if (registration() && requiredMessage()) {
    window.location.href = "home.html";
  }
});

if (localStorage.getItem("currentUser") != null) {
  let homeWelcome = document.querySelector("#homeWelcome");
  let current = JSON.parse(localStorage.getItem("currentUser"));

  if (homeWelcome == null) {
  } else {
    homeWelcome.innerHTML = `welcome ${current.name}`;
  }
}
/////home
logOut?.addEventListener("click", function () {
  window.location.href = "index.html";
});
