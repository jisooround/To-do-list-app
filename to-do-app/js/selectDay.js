export default function selectDay(date, select) {
  let selectYear = date.getFullYear();
  let selectMonth = date.getMonth() + 1;
  const listDateEl = document.getElementById("list-date");

  listDateEl.textContent = `${selectYear}.${selectMonth}.${Number(select.textContent)}`;

  return selectYear, selectMonth, Number(select.textContent);
}