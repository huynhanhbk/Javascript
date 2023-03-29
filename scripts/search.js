let newsContainer = document.getElementById('news-container');
let btnPrevious = document.getElementById('btn-prev');
let btnNext = document.getElementById('btn-next');

let inputSearch = document.getElementById('input-query');
let text = inputSearch.value;
let settingArr = [];
getSettingFromStorage();

const apiKey = 'd7dcbf43333e48aeb1c4ebc416ee738f';
let pageSize = settingArr[0].pageSize;
let page = document.getElementById('page-num').innerHTML;

//Ham tim kiem
function searchNews() {
  //page = 1;
  //let text = inputSearch.value;
  if (inputSearch.value === '') {
    alert('Please input key');
    return false;
  }

  text = inputSearch.value;

  getNewsData(text, pageSize, page).then(
    (display) => (newsContainer.innerHTML = display) //hung ket qua vao bien display
  );
}

//https://newsapi.org/v2/top-headlines?q=bitcoin&country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}
const getNewsData = async function (text, pageSize, page) {
  let url = `https://newsapi.org/v2/everything?q=${text}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
  console.log(url);

  let res = await fetch(url);
  let data = await res.json();
  let articles = data.articles;
  console.log(data);
  console.log(articles);
  paging(page, data.totalResults, pageSize);
  return renderNews(articles);
};

//Hàm chức năng phân trang
function paging(page, totalResults, pageSize) {
  let maxPage =
    totalResults % pageSize === 0
      ? totalResults / pageSize
      : Math.floor(totalResults / pageSize) + 1;
  if (totalResults <= pageSize) {
    btnNext.setAttribute('style', 'display:none');
    btnPrevious.setAttribute('style', 'display:none');
  } else if (page == 1) {
    btnPrevious.setAttribute('style', 'display:none');
    btnNext.removeAttribute('style');
  } else if (page < maxPage) {
    btnPrevious.removeAttribute('style');
    btnNext.removeAttribute('style');
  } else if (page >= maxPage) {
    btnNext.setAttribute('style', 'display:none');
  }
}

//Hiển thị news ra màn hình
function renderNews(articles) {
  let html = '';
  for (let i = 0; i < articles.length; i++) {
    html += `
    <article>
        <figure class="left-column" >
        <img class="img-new" src="${articles[i].urlToImage}" />
        </figure>
        <figure class="right-column">
          <h2>${articles[i].title}</h2>
          <p>${articles[i].description}</p>
          <a class="btn-view" href="${articles[i].url}" target="_blank">View</a>
        </figure>
        
      </article>
    `;
  }
  return html;
}

// tạo chức năng cho nút next
btnNext.addEventListener('click', function () {
  let page = document.getElementById('page-num').innerHTML;
  page++;
  document.getElementById('page-num').innerHTML = page;
  getNewsData(text, pageSize, page).then(
    (display) => (newsContainer.innerHTML = display)
  );
});

// tạo chức năng cho nút previous
btnPrevious.addEventListener('click', function () {
  let page = document.getElementById('page-num').innerHTML;
  page--;
  document.getElementById('page-num').innerHTML = page;
  getNewsData(text, pageSize, page).then(
    (display) => (newsContainer.innerHTML = display)
  );
});
