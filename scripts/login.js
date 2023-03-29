'use strict';
let userNameEl = document.getElementById('input-username');
let passWordEl = document.getElementById('input-password');

let btnLogin = document.getElementById('btn-submit');

let userArr = [];
// getUserFromStorage();
// console.log(userArr);
// let storeName = userArr.userName;
// console.log(storeName);

let loginArr = [];

btnLogin.addEventListener('click', function () {
  getUserFromStorage();
  console.log(userArr);

  let dataLogin = {
    userName: userNameEl.value,
    passWord: passWordEl.value,
  };

  if (userNameEl.value === '') {
    alert('Please input User Name');
    return false;
  }
  if (passWordEl.value === '') {
    alert('Please input PassWord');
    return false;
  }

  if (
    userArr.some((e) => {
      return e.userName == userNameEl.value && e.passWord == passWordEl.value;
    })
  ) {
    alert('login pass');
    loginArr.push(dataLogin);
    saveLoginToStorage();
    window.location.href = '../index.html';
  } else {
    alert('er');
  }

  // if (
  //   userNameEl.value == userArr.userName &&
  //   passWordEl.value == userArr.passWord
  // ) {
  //   console.log('abc');

  //   loginArr.push(dataLogin);
  //   saveLoginToStorage();
  //   window.location.href = '../index.html';
  //} //else {
  //   alert('er');
  // }

  // loginArr.push(dataLogin);
  // saveLoginToStorage();
  // window.location.href = '../index.html';
});
