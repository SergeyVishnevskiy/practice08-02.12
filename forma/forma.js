const refs = {
  divRef: document.getElementById("root"),
  formRef: document.querySelector(".js-form"),
  h2Ref: document.querySelector("h2"),
};
refs.formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  let formRef = event.target.elements;
  let email = formRef.email;
  let name = formRef.name;
  let password = formRef.password;
  let rePassword = formRef.rePassword;

  const nameValid =
    name.value.length >= 4 && name.value.length <= 10 ? true : false;
  const emailValid = email.value.includes("@") ? true : false;
  const passwordValid = password.value.length >= 4 ? true : false;
  const rePasswordValid = password.value === rePassword.value ? true : false;

  if (nameValid && emailValid && passwordValid && rePasswordValid) {
    success();
  } else {
    reject();
  }
});

const success = () => {
  refs.h2Ref.innerText = "Успех";
  refs.h2Ref.style.color = "green";
};

const reject = () => {
  refs.h2Ref.innerText = "Вы не корректно заполнили форму";
  refs.h2Ref.style.color = "red";
};
