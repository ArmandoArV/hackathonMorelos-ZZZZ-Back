function getDayMonthYearString(day, month, year) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${day} ${monthNames[month - 1]} ${year}`;
}

module.exports = { getDayMonthYearString };
