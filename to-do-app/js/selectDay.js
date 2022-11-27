export default function selectDay(date, select) {
  let selectYear = date.getFullYear();
  let selectMonth = date.getMonth() + 1;
  const listDateEl = document.getElementById("list-date");

  // console.log(selectYear, selectMonth, Number(select.textContent));
  listDateEl.textContent = `${selectYear}.${selectMonth}.${Number(select.textContent)}`;
  return selectYear, selectMonth, Number(select.textContent);
}