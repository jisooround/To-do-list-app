import renderCalendar from './renderCalendar'

export default function getCalendar(date, todos) {
  if(!date){
    date = new Date();
  }
  if(/\d{4}\.\d{1,}\.\d{1,}/.test(date)){
    console.log('date!!!', date)
    date = new Date(date);
  }
  renderCalendar(date, todos);

  // Prev 버튼 클릭 이벤트
  const prevBtnEl = document.querySelector('.prev');
  prevBtnEl.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);

    // 화면에 출력
    renderCalendar(date, todos);
  });

  // next 버튼 클릭 이벤트
  const nextBtnEl = document.querySelector('.next');
  nextBtnEl.addEventListener("click", () => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);

    // 화면에 출력
    renderCalendar(date, todos);
  });

  // Today 버튼 클릭 이벤트
  const todayBtnEl = document.querySelector('.today');
  todayBtnEl.addEventListener("click", () => {
    date = new Date();

    // 화면에 출력
    renderCalendar(date, todos);
  });
}