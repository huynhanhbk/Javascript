'use strict';
//Luu xuong LocalStorage
let saveUserToStorage = function () {
  localStorage.setItem('userArr', JSON.stringify(userArr));
};

//Lay du lieu tu localStorage theo key
let getUserFromStorage = function () {
  if (localStorage.getItem('userArr')) {
    userArr = JSON.parse(localStorage.getItem('userArr'));
  } else {
    userArr = [];
  }
};

//Luu du lieu Login
let saveLoginToStorage = function () {
  localStorage.setItem('loginArr', JSON.stringify(loginArr));
};

//Lay du lieu Login tu localStorage
let getLoginFromStorage = function () {
  if (localStorage.getItem('loginArr')) {
    loginArr = JSON.parse(localStorage.getItem('loginArr'));
  } else {
    loginArr = [];
  }
};

//Xóa dữ liệu Login
let removeLoginFromStorage = function () {
  localStorage.removeItem('loginArr');
};

//Luu du lieu Setting
let saveSettingToStorage = function () {
  localStorage.setItem('settingArr', JSON.stringify(settingArr));
};

//Lay du lieu Setting tu localStorage
let getSettingFromStorage = function () {
  if (localStorage.getItem('settingArr')) {
    settingArr = JSON.parse(localStorage.getItem('settingArr'));
  } else {
    settingArr = [];
  }
};

//Xóa dữ liệu Setting
let removeSettingFromStorage = function () {
  localStorage.removeItem('settingArr');
};

//Luu du lieu Todo
let saveTodoToStorage = function () {
  localStorage.setItem('todoArr', JSON.stringify(todoArr));
};

//Lay du lieu Todo tu localStorage
let getTodoFromStorage = function () {
  if (localStorage.getItem('todoArr')) {
    todoArr = JSON.parse(localStorage.getItem('todoArr'));
  } else {
    todoArr = [];
  }
};

//Xóa dữ liệu Todo
let removeTodoFromStorage = function () {
  localStorage.removeItem('todoArr');
};
