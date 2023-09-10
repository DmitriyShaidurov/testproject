const div = document.createElement("div");
const header = document.createElement("h1");
header.innerText = "Learn Js";
const a = document.createElement("a");
a.href = "https://developer.mozilla.org/ru/docs/Learn";
a.innerText = "MDN";
header.classList.add("test");

div.appendChild(header);
div.appendChild(a);
document.body.appendChild(div);

console.log(div);
console.log(header);

const aTag = document.querySelector("a");
console.log(aTag);
aTag.addEventListener("click", function (e) {
  e.preventDefault();
  /* window.location = "https://vk.com";
  console.log("test"); */
  test();
});

function test() {
  console.log(div);
}
