menuButton.classlist.add('hide')
element.addEventListener("event", handlerFunction)

function handleResize() {
  const menu= document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize)