// input 돋보기
const searchEL = document.querySelector('.search');
const searchInputEl = searchEL.querySelector('input');

searchEL.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEL.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEL.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// FOOTER 올해 년도 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
//getFullYear로 올해 년도 2021날짜가 '.this-year'의 text로 나옴.