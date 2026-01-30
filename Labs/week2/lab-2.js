const isLeapYear = (year) => {
  if (year === 1700 || 1800 || 1900 || 2100 || 2200 || 2300) {
    return false;
  }
  if (year % 4) {
    return true;
  } else {
    return false;
  }
};

const getDayOfTheWeek = (year, month, day) => {
  const lastTwo = year.toString().slice(2, 4);
  const lastTwoMod = lastTwo % 12;
  const remainderFour = Math.trunc(lastTwoMod / 4);
  if (month === "January" || "October") {
    const monthCode = 1;
  } else if (month === "April" || "July") {
    const monthCode = 0;
  } else if (month === "February" || "November" || "March") {
    const monthCode = 4;
  } else if (month === "September" || "December") {
    const monthCode = 6;
  } else if (month === "June") {
    const monthCode = 5;
  } else if (month === "August") {
    const monthCode = 3;
  } else {
    const monthCode = 2;
  }
  if (isLeapYear(year)) {
    if (month === "January" || "February") {
      monthCode -= 1;
    } else if (year >= 1600 && year < 1700) {
      monthCode += 6;
    } else if (year >= 1700 && year < 1800) {
      monthCode += 4;
    } else if (year >= 1800 && year < 1900) {
      monthCode += 2;
    }
  }
  const dayOfTheWeek =
    (lastTwo + lastTwoMod + remainderFour + day + monthCode) % 7;
  return;
};

console.log(getDayOfTheWeek(2070));
