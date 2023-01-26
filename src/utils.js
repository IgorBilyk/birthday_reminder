export const calculateDaysToBithday = (day, month) => {
  let myBirthday, today, bday, diff, days;
  myBirthday = [day, month]; // 6th of February
  today = new Date();
  bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
  if (today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear() + 1);
  }
  diff = bday.getTime() - today.getTime();
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days;
};
