function highlightToday() {
  const openingDaysTableRows = document.querySelectorAll("#ordinary-opening-hours-table tr");
  const dateToday = new Date();
  let dayIndex = dateToday.getDay();

  const startWeekOnMonday = (i) => {
    return i === 0 ? 6 : i - 1;
  };
  dayIndex = startWeekOnMonday(dayIndex);
  openingDaysTableRows[dayIndex].classList.add("today");
}

export default highlightToday;
