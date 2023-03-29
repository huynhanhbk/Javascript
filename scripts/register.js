'use strict';
let firstNameEl = document.getElementById('input-firstname');
let lastNameEl = document.getElementById('input-lastname');
let userNameEl = document.getElementById('input-username');
let passWordEl = document.getElementById('input-password');
let passWordConfirmEl = document.getElementById('input-password-confirm');

let btnRegister = document.getElementById('btn-submit');

let userArr = [];
getUserFromStorage();
console.log(userArr);

function resetForm() {
  firstNameEl.value = '';
  lastNameEl.value = '';
  userNameEl.value = '';
  passWordEl.value = '';
  passWordConfirmEl.value = '';
}

btnRegister.addEventListener('click', function () {
  const data = {
    firstName: firstNameEl.value,
    lastName: lastNameEl.value,
    userName: userNameEl.value,
    passWord: passWordEl.value,
    passWordConfirm: passWordConfirmEl.value,
  };

  //validate();
  if (firstNameEl.value === '') {
    alert('Please input First Name');
    return false;
  }
  if (lastNameEl.value === '') {
    alert('Please input Last Name');
    return false;
  }
  if (passWordEl.value === '') {
    alert('Please input PassWord');
    return false;
  } else if (passWordEl.value.length <= 8) {
    alert('PassWord minimum 8 characters');
    return false;
  }
  if (passWordConfirmEl.value === '') {
    alert('Please input Confirm PassWord');
    return false;
  } else if (passWordConfirmEl.value != passWordEl.value) {
    alert('PassWord did not match ');
    return false;
  }
  for (let i = 0; i < userArr.length; i++) {
    if (userNameEl.value === userArr[i].userName) {
      alert('Username already exists');
      return false;
    } else if (userNameEl.value === '') {
      alert('Please input User Name');
      return false;
    }
  }
  let user = new User(
    `${data.firstName}`,
    `${data.lastName}`,
    `${data.userName}`,
    `${data.passWord}`
  );

  userArr.push(user);
  resetForm();
  saveUserToStorage();
  window.location.href = '../pages/login.html';
});
