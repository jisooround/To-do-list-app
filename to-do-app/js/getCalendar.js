import renderCalendar from './renderCalendar'

export default function getCalendar(date) {
  // 최초 호출
  date = new Date();
  renderCalendar(date);
  console.log(date);

  // 선언
  let selectYear = date.getFullYear();
  let selectMonth = date.getMonth() + 1;
  let selectDate = document.querySelectorAll('.this');

  // prev 버튼 클릭 이벤트
  const prevBtnEl = document.querySelector('.prev');
  prevBtnEl.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);

    // 화면에 출력
    renderCalendar(date);

    // 콘솔 확인
    console.log(selectYear, selectMonth);
  });

  // next 버튼 클릭 이벤트
  const nextBtnEl = document.querySelector('.next');
  nextBtnEl.addEventListener("click", () => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);

    // 화면에 출력
    renderCalendar(date);

    // 콘솔 확인
    console.log(selectYear, selectMonth);
  });

  // today 버튼 클릭 이벤트
  const todayBtnEl = document.querySelector('.today');
  todayBtnEl.addEventListener("click", () => {
    date = new Date();

    // 화면에 출력
    renderCalendar(date);
    console.log(date);

    // 콘솔 확인
    console.log(selectYear, selectMonth);
  });
}