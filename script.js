const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "#fff";
  }
}

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });

// sub.addEventListener("click", () => {
//   count.innerHTML--;
// });

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
