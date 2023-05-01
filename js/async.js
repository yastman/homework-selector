// setTimeout(function () {
//   let info = document.querySelector(".info");
//   info.classList.add("info--open");
//   info.innerText = "hello world";
//   console.log(info);
// }, 5000);
// setTimeout(function () {
//   let info = document.querySelector(".info");
//   info.classList.remove("info--open");
//   info.innerText = "";
//   console.log(info);
// }, 5000);
//
// let a = 0;
// setInterval(function () {
//   console.log(a++);
// }, 5000);

let numbersToAnimate = document.querySelectorAll(".services__number");
document.addEventListener("scroll", function () {
  numbersToAnimate.forEach(function (item) {
    if (item.getBoundingClientRect().top <= window.innerHeight / 2) {
      startAnimate(item);
    }
  });
});
function startAnimate(item) {
  let start = 0;
  let max = parseInt(item.getAttribute("data-max"));
  if (item.getAttribute("data-animated") === "false") {
    item.setAttribute("data-animated", "true");
    let interval = setInterval(function () {
      if (max >= start) {
        item.innerText = start;
        start++;
      } else {
        clearInterval(interval);
      }
    }, 10);
  }
}
