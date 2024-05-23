const currentYearElement = document.querySelector("#current-year");

function setCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const lastTwoDigits = currentYear.toString().slice(-2);
  currentYearElement.textContent = lastTwoDigits;
  // console.log(`Current year (20${lastTwoDigits}) updated dynamically`);
}

export default setCopyrightYear;
