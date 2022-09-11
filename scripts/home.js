'use strict';
const loginModal = document.getElementById('login-modal');
const mainContent = document.getElementById('main-content');
const message = document.getElementById('welcome-message');
const btnLogout = document.getElementById('btn-logout');

let loginArr;
getLoginFromStorage();
console.log(loginArr.length);
let userArr = [];
getUserFromStorage();

function clickHome() {
  if (loginArr.length === 0) {
    console.log('rong');

    mainContent.remove();
  } else {
    console.log('ko rong');

    loginModal.remove();
    //message.textContent = `Welcome ${loginArr[0].userName}`;
  }
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].userName === loginArr[0].userName) {
      message.textContent = `Welcome ${userArr[i].firstName} ${userArr[i].lastName}`;
    }
  }
}

clickHome();

btnLogout.addEventListener('click', function () {
  removeLoginFromStorage();
  window.location.reload(true);
});
