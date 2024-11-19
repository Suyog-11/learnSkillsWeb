const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  sidebar.classList.add("active");
  document.body.style.overflow = "hidden";
});
close.addEventListener("click", () => {
  sidebar.classList.remove("active");
  document.body.style.overflow = "scroll";
});
