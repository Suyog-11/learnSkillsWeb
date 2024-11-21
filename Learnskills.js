document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menubtn");
  const sidebar = document.querySelector(".sidebar");
  const close = document.querySelector(".ri-close-line");

  menu.addEventListener("click", (e) => {
    sidebar.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  close.addEventListener("click", (e) => {
    sidebar.classList.remove("active");
    document.body.style.overflow = "scroll";
  });
});
