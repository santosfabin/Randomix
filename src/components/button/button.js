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

export { Button };
