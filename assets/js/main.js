import toggleScrollSpy from "./modules/toggleScrollSpy.module.js";
import { handleAccordionButtons, handleReviewButton, handleAddressButton, handlePostcodeButton } from "./modules/buttons.module.js";
import initMap from "./modules/initMap.module.js";
import setCopyrightYear from "./modules/setCopyrightYear.module.js";
import highlightToday from "./modules/highlightToday.module.js";
import toggleMobileMenu from "./modules/handleMobileMenu.js";

window.onload = () => {
  toggleScrollSpy();
  toggleMobileMenu();
  handleAccordionButtons();
  handleReviewButton();
  handlePostcodeButton();
  handleAddressButton();
  initMap();
  setCopyrightYear();
  highlightToday();
};

window.addEventListener("DOMContentLoaded", toggleScrollSpy);
window.addEventListener("resize", toggleScrollSpy);
