export default function convertDate(selectDate) {
  const dateArr = selectDate.split('.');
  if (dateArr[1].length < 2) {
    dateArr[1] = '0' + dateArr[1];
  }
  if (dateArr[2].length < 2) {
    dateArr[2] = '0' + dateArr[2];
  }
  const resDate = dateArr.join('');

  return resDate;
}