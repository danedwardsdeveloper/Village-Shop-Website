function toggleAccordionPanel(button) {
  button.classList.toggle("active");
  const panel = button.nextElementSibling;
  const toggleIcon = button.querySelector(".toggle-icon");

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    toggleIcon.classList.remove("upside-down");
    button.setAttribute("aria-expanded", "false");
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    toggleIcon.classList.add("upside-down");
    button.setAttribute("aria-expanded", "true");
  }
}

function handleAccordionButtons() {
  const accordionButtons = document.querySelectorAll(".accordion");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      toggleAccordionPanel(this);
    });
  });
}

function handleAddressButton() {
  const copyAddressButton = document.querySelector("#copy-address-button");
  const addressToCopy = "Greenbriar Market & Cafe, Acorn Lane, Sherwood Forest, NG25 0RQ";
  const originalButtonText = "Copy address";
  copyAddressButton.textContent = originalButtonText;
  copyAddressButton.addEventListener("click", () => {
    navigator.clipboard.writeText(addressToCopy);
    copyAddressButton.textContent = "Address copied ✅";
    setTimeout(() => {
      copyAddressButton.textContent = originalButtonText;
    }, 2000);
  });
}

function handlePostcodeButton() {
  const copyPostcodeButton = document.querySelector("#copy-postcode-button");
  const postcodeToCopy = "NG25 0RQ";
  const originalButtonText = "Copy postcode";
  copyPostcodeButton.textContent = originalButtonText;
  copyPostcodeButton.addEventListener("click", () => {
    navigator.clipboard.writeText(postcodeToCopy);
    copyPostcodeButton.textContent = "Postcode copied ✅";
    setTimeout(() => {
      copyPostcodeButton.textContent = originalButtonText;
    }, 2000);
  });
}

function handleReviewButton() {
  document.getElementById("review-button").addEventListener("click", function () {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
  });
}

export { handleAccordionButtons, handleReviewButton, handleAddressButton, handlePostcodeButton };
