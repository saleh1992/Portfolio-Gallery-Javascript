let btn = document.querySelectorAll(".btn");
let allGalleryDiv = document.querySelectorAll("#allGallery > div");
btn.forEach((loopBtn) => {
  loopBtn.addEventListener("click", () => {
    btn.forEach((loopBtnRemove) => {
      loopBtnRemove.removeAttribute("id", "active");
    });
    loopBtn.setAttribute("id", "active");
    allGalleryDiv.forEach((div) => {
      div.getAttribute("class").toLowerCase() == loopBtn.innerHTML.toLowerCase()
        ? div.removeAttribute("id", "hidden")
        : loopBtn.innerHTML == "Show All"
        ? div.removeAttribute("id", "hidden")
        : div.setAttribute("id", "hidden");
    });
  });
});
