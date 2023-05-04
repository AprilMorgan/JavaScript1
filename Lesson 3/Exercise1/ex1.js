function changeColor() {
    let colors = ["green", "yellow", "red", "blue", "purple"];
    let random = Math.floor(Math.random() * colors.length);
    console.log(
        "The random number is:" +
        random +
        ", the random color is: " +
        colors[random]
    );
  document.body.style.backgroundColor = colors[random];
}