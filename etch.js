function changeColor (element) {
  element.style.backgroundColor = "white"
}

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "square";
  div.addEventListener("mouseover", function() {
    changeColor(div);
  })
  document.getElementById("container").appendChild(div);
}