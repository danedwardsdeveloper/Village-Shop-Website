const scrollArea = document.querySelector("main");

function handleScrollSpy() {
  const sections = document.querySelectorAll("section");
  scrollArea.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = scrollArea.scrollTop;

      if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight / 2) {
        let activeNavItem = document.querySelector(`a[href="#${section.id}"]`).parentNode.querySelector("p");

        let previousActive = document.querySelector(".hover-underline-animation.active");

        if (previousActive) {
          previousActive.classList.remove("active");
        }
        activeNavItem.classList.add("active");
      }
    });
  });
}

function disableScrollSpy() {
  scrollArea.removeEventListener("scroll", () => {
    scrollArea;
  });
}

function toggleScrollSpy() {
  let windowWidth = window.innerWidth;

  if (windowWidth > 600) {
    handleScrollSpy();
  } else {
    disableScrollSpy();
  }
}

export default toggleScrollSpy;
