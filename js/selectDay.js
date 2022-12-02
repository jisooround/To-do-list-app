import { state } from "../store/index.js";

export default function selectDay(date, select) {
  let selectYear = date.getFullYear();
  let selectMonth = date.getMonth() + 1;
  const listDateEl = document.getElementById("list-date");
  const d = `${selectYear}.${selectMonth}.${Number(select.textContent)}`
  listDateEl.textContent = d;
  state.selectedDate = d

  return selectYear, selectMonth, Number(select.textContent);
}