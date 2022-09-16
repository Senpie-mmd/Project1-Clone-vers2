const panels = document.querySelectorAll(".panel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentActive = 0;
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  })
}

function slider() {
  currentActive += 1;
  if (currentActive > (panels.length - 1)) {
    currentActive = 0;
  }
  removeActiveClasses();
  panels[currentActive].classList.add("active");
}

sliderinterval = setInterval(slider, 5000)

next.addEventListener("click", () => {
  clearInterval(sliderinterval);
  removeActiveClasses();
  currentActive++;
  if (currentActive > (panels.length - 1)) {
    currentActive = 0;
  }
  panels[currentActive].classList.add("active");
  sliderinterval = setInterval(slider, 5000)
  next.disabled = true;
  setTimeout(function(){next.disabled = false},1500);
})

  prev.addEventListener("click", () => {
    clearInterval(sliderinterval);
    removeActiveClasses();
    currentActive--;
    if (currentActive < 0) {
      currentActive = panels.length - 1;
    }
    panels[currentActive].classList.add("active");
    sliderinterval = setInterval(slider, 5000)
    prev.disabled = true;
    setTimeout(function(){prev.disabled = false},1500);
  })