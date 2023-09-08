const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display == "block") {
    navList.style.display = "none";
    hamburger.src = "images/icon-menu.svg";
  } else {
    navList.style.display = "block";
    hamburger.src = "images/icon-close.svg";
  }
});
