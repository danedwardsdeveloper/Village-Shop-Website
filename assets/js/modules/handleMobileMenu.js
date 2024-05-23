function toggleMobileMenu() {
  const menuButton = document.getElementById("menu-button");
  const menu = document.querySelector("nav ul");
  const logo = menuButton.querySelector("div");
  const toggleDivider = () => {
    logo.classList.toggle("border-bottom");
  };
  const toggleMenuHeight = () => {
    menu.classList.toggle("collapsed");
  };

  menuButton.addEventListener("click", () => {
    console.log("Button clicked");
    toggleDivider();
    toggleMenuHeight();
    // if (menu.style.height === "auto") {
    //   // menu.style.display = "block";
    //   menu.style.height = "0";
    // } else {
    //   // menu.style.display = "none";
    //   menu.style.height = "auto";
    // }
  });
}

function closeMenu() {}

function handleMobileLinkListeners() {
  let windowWidth = window.innerWidth;
  if (windowWidth > 600) {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach.addEventListener("click", () => {
      closeMenu();
    });
  }
}

export default toggleMobileMenu;
