const smallCups = document.querySelectorAll(".cup-small");
const percentageEl = document.getElementById("percentage");
const remainedEl = document.getElementById("remained");
const litersEl = document.getElementById("liters");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => fillTheCups(idx));
});

updateBigCup();

function fillTheCups(idx) {
  if (idx === 7 && smallCups[idx].classList.contains("empty")) idx--;
  else if (
    smallCups[idx].classList.contains("empty") &&
    !smallCups[idx].nextElementSibling.classList.contains("empty")
  )
    idx--;
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("empty");
    } else {
      cup.classList.remove("empty");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.empty").length;
  const totalCups = smallCups.length;
  if (fullCups === 0) {
    percentageEl.style.visibility = "hidden";
    percentageEl.style.height = 0;
  } else {
    percentageEl.style.visibility = "visible";
    percentageEl.innerText = `${(fullCups / totalCups) * 100}%`;
    percentageEl.style.height = `${(fullCups / totalCups) * 280}px`;
  }
  if (fullCups === totalCups) {
    remainedEl.style.visibility = "hidden";
    remainedEl.style.height = 0;
  } else {
    remainedEl.style.visibility = "visible";
    litersEl.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
