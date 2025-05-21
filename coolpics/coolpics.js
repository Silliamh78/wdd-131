menuButton.classList.add('hide')
element.addEventListener("hide", handlerFunction)

function handleResize() {
  const menu= document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize)