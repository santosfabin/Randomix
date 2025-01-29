import { Button } from "../button/button.js";

function InputItens(randomizer, newContainer) {
  const container = document.createElement("div");
  const textArea = document.createElement("textarea");

  container.classList.add("containerItens");
  textArea.classList.add("textAreaItens");
  textArea.placeholder = "Separe os itens por vírgula";

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
    alert("Coloque no mínimo dois itens na lista");
    return;
  }
  randomizer.list = list;
  containerTextArea.remove();
  document.getElementById("app").appendChild(newContainer);
}

export { InputItens };