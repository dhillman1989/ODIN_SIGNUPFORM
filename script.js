let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

let errorMessage = document.createElement("span");
errorMessage.classList.add("error");
errorMessage.innerText = "*Passwords do not match";

const validate = () => {
  if (password.value !== confirmPassword.value) {
    console.log("changed");
    password.setAttribute("invalid", true);
    confirmPassword.setAttribute("invalid", true);
    password.parentNode.append(errorMessage);
  } else {
    password.setAttribute("invalid", false);
    confirmPassword.setAttribute("invalid", false);
    password.parentNode.removeChild(errorMessage);
  }
};

password.onblur = () => {
  validate();
};
confirmPassword.onblur = () => {
  validate();
};
