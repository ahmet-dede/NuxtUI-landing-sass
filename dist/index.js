function toggleClass() {
  const navbar = document.querySelector(".navbar-mobile");
  const isOpen = navbar.classList.contains("active");
  navbar.classList.toggle("active");
  document.querySelector("main").style.display = isOpen ? "block" : "none";
}
