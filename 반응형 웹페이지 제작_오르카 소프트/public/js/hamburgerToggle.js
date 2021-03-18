function initHambugerMenu() {
  let menuTrigger = document.querySelector(".sub-tab");
  const active = document.querySelector(".nav");

  // console.log("initHambugerMenu");
  menuTrigger.addEventListener("click", function (event) {
    active.classList.toggle("active");
  });
}

// window.addEventListener(
//   "initIncludeAfter",
//   function () {
//     initHambugerMenu();
//   },
//   false
// );
