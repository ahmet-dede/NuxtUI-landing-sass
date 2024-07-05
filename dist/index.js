function toggleClass() {
  const navbar = document.querySelector(".navbar-mobile");
  const isOpen = navbar.classList.contains("active");
  navbar.classList.toggle("active");
  document.querySelector("main").style.display = isOpen ? "block" : "none";
}

for (let index = 0; index < 6; index++) {
  function togglePanel(index) {
    const panel = document.querySelectorAll(".div-toggle");
    const button = document.querySelectorAll(".questions button");
    const isOpen = button[index].classList.contains("toggled");
    button[index].classList.toggle("toggled");
    panel[index].style.display = isOpen ? "none" : "flex";
  }
}