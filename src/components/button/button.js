function Button(text, imageURL, buttonColor, event) {
  const buttonContainer = document.createElement("button");
  buttonContainer.style.backgroundImage = buttonColor;
  buttonContainer.addEventListener("click", event);

  const imageContainer = document.createElement("div");
  imageContainer.style.backgroundImage = `url("${imageURL}")`;
  imageContainer.id = "imageButton";
  buttonContainer.appendChild(imageContainer);

  const textContainer = document.createElement("dv");
  textContainer.innerText = text;
  buttonContainer.appendChild(textContainer);

  return buttonContainer;
}

// // TESTES

// const buttonPLAY = Button(
//   "PLAY",
//   "/src/assets/button/playButton.svg",
//   "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
//   print
// );
// document.querySelector("body").appendChild(buttonPLAY);

// const buttonRETURN = Button(
//   "RETURN",
//   "/src/assets/button/returnButton.svg",
//   "linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)"
// );
// document.querySelector("body").appendChild(buttonRETURN);

// function print() {
//   console.log(1);
// }