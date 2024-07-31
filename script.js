document
  .getElementById("change-color-btn")
  .addEventListener("click", function () {
    const colorBox = document.getElementById("color-box");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
  });
