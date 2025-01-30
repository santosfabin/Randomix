import { Button } from "../button/button.js";
import { NotificationError } from "../modalError/modalError.js"

/**
 * Creates a div that contais a textArea and a button that will call the getList function.
 * 
 * @param {Randomizer} randomizer - A instance of the Randomizer class
 * @param {html Div} newContainer - The container of the page (slot-page, default-page, scratch-page)\
 * @returns {html Div} A html element
 */
function InputItens(randomizer, newContainer) {
  const container = document.createElement("div");
  const textArea = document.createElement("textarea");

  container.classList.add("containerItens");
  textArea.classList.add("textAreaItens");
  textArea.placeholder = "Separate items with commas";

  container.appendChild(textArea);
  container.appendChild(
    Button(
      "PLAY",
      "/src/assets/button/playButton.svg",
      "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
      () => {
        getList(textArea.value, randomizer, container, newContainer);
      }
    )
  );

  return container;
}

/**
 * Transforms the text value from the text area into a list of itens that cannot have repeted itens.
 * It removes the containerTextArea from the page, and after this, it adds newContainer to the page.
 * 
 * @param {string} text - The text of the textArea
 * @param {Randomizer} randomizer - A instance of the Randomizer class
 * @param {html Div} containerTextArea - The container of the textArea
 * @param {html Div} newContainer - The container of the page (slot-page, default-page, scratch-page)
 */
function getList(text, randomizer, containerTextArea, newContainer) {
  let list = text.replace(", ", ",").split(",");
  list = list
    .map((element) => {
      let item = element.trim();
      item = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
      return item;
    })
    .filter((element) => element != "");
  list = Array.from(new Set(list));
  if (list.length <= 1) {
    NotificationError("Put at least two items on the list");
    return;
  }
  randomizer.list = list;
  containerTextArea.remove();
  document.getElementById("randomix").appendChild(newContainer);
}

export { InputItens };