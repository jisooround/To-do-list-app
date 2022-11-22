export default function getCalendar() {
  let date = new Date();

  const renderCalendar = () => {
  const yearEl = date.getFullYear();
  const monthEl = date.getMonth();

  // month 정보
  document.querySelector('.month').textContent = `${yearEl}. ${monthEl + 1}`;

  // 마지막 날짜 알아내기
  const prevEl = new Date(yearEl, monthEl, 0);
  const currentEl = new Date(yearEl, monthEl + 1, 0);

  // 지난 달 마지막 날짜와 요일
  const prevDateEl = prevEl.getDate();
  const prevDayEl = prevEl.getDay();

  // 이번 달 마지막 일과 요일
  const currentDateEl = currentEl.getDate();
  const currentDayEl = currentEl.getDay();

  // 지난 달, 이번 달, 다음 달 날짜 가져오기
  const prevDates = [];
  const currentDates = [...Array(currentDateEl + 1).keys()].slice(1);
  const nextDates = [];

  // 지난 달 날짜 계산
  if(prevDayEl !== 6){
    for(let i = 0; i < prevDayEl + 1; i++){
      prevDates.unshift(prevDateEl - i);
    }
  }

  // 다음 달 날짜 계산
  for(let i = 1; i < 7 - currentDayEl; i++){
    nextDates.push(i);
  }

  // 지난 달 + 이번 달 + 다음 달 합치기
  const dates = prevDates.concat(currentDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(currentDateEl);

  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';
    dates[i] = `<div class = "date ${condition}">${date}</div>`;
  })

  document.querySelector('.dates').innerHTML = dates.join('');
  
  // 오늘 날짜 표시
  const today = new Date();
  if(monthEl === today.getMonth() && yearEl === today.getFullYear()) {
  for(let date of document.querySelectorAll('.this')) {
    if(+date.innerText === today.getDate()) {
      date.classList.add('today');
      break;
    }
  }
}
};

// prev 버튼 클릭 이벤트
const prevBtnEl = document.querySelector('.prev');
prevBtnEl.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

// next 버튼 클릭 이벤트
const nextBtnEl = document.querySelector('.next');
nextBtnEl.addEventListener("click", () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// today 버튼 클릭 이벤트
const todayBtnEl = document.querySelector('.today');
todayBtnEl.addEventListener("click", () => {
  date = new Date();
  renderCalendar();
});

renderCalendar();
}