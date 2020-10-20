const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("left-form");
const errorElement = document.getElementById("error");
const invalidElement = document.getElementById("invalid");
const name1 = document.getElementById("na");
const password1 = document.getElementById("pa");
const password2 = document.getElementById("pas");
const email = document.getElementById("ea");
document.querySelector(".btn1").addEventListener("click", function () {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("name is required");
    errorElement.innerText = messages.join(",");
  } else {
    errorElement.innerText = messages.join(",");
  }
  if (password.value.length < 6 || password.value.length >= 15) {
    messages.push("invalid password");
    errorElement.innerText = messages.join(",");
  }
});
document.querySelector(".btn2").addEventListener("click", function () {
  let message = [];
  if (name1.value === "" || name1.value === null) {
    message.push("name is required");
    invalidElement.innerText = message.join(",");
  }
  if (password1.value.length < 6 || password1.value.length >= 15) {
    message.push("invalid password");
    invalidElement.innerText = message.join(",");
  }
  if (password2.value !== password1.value) {
    message.push("match your password");
    invalidElement.innerText = message.join(",");
  } else {
    invalidElement.innerText = message.join(",");
  }
});
