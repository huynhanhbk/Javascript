'use strict';

let pageSizeEl = document.getElementById('input-page-size');
let categoryEl = document.getElementById('input-category');

let btnSaveSetting = document.getElementById('btn-submit');

let settingArr = [];

btnSaveSetting.addEventListener('click', function () {
  const dataSetting = {
    pageSize: pageSizeEl.value,
    category: categoryEl.value.toLowerCase(),
  };
  if (pageSizeEl.value === '') {
    alert('Please input News per page');
    return false;
  }

  settingArr.push(dataSetting);
  removeSettingFromStorage();
  saveSettingToStorage();
});
