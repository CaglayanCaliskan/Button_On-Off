const line = document.getElementById("line");
const btn = document.getElementById("button");
const text1 = document.getElementById("off");
const text2 = document.getElementById("on");

line.addEventListener("click", () => {
  btn.classList.toggle("button-click");
  text1.classList.toggle("text-change");
  text2.classList.toggle("text-change");
  line.classList.toggle("line-change");
});
