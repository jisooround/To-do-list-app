import selectDay from "./selectDay.js";

export default function renderCalendar(date) {
  const yearEl = date.getFullYear();
  const monthEl = date.getMonth();
  let selectYear = date.getFullYear();
  let selectMonth = date.getMonth() + 1;
  let selectDate = document.querySelectorAll('.this');

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
  if (prevDayEl !== 6) {
    for (let i = 0; i < prevDayEl + 1; i++) {
      prevDates.unshift(prevDateEl - i);
    }
  }

  // 다음 달 날짜 계산
  for (let i = 1; i < 7 - currentDayEl; i++) {
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

  // console.log(dates)
  selectDate = document.querySelectorAll('.this');

  // 오늘 날짜 표시
  const today = new Date();
  if (monthEl === today.getMonth() && yearEl === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }

  // date 클릭시 date 반환
  for (let i = 0; i < selectDate.length; i++) {
    const select = selectDate[i];
    select.addEventListener("click", async () => {
      const selectdate = selectDay(date, select);
      const data = ([selectYear ,selectMonth, selectdate]);
      const value = new Date(data);
      console.log(value);
      return value;
    })
  };
};