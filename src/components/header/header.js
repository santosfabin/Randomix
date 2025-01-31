import { customEventPath } from "../../utils/customEvent.js";

function Header() {
  const headerContainer = document.createElement("header");
  headerContainer.id = `headerContainer`;

  const pageName = document.createElement("div");
  pageName.id = "pageName";
  headerContainer.appendChild(pageName);

  const navContainer = document.createElement("nav");
  headerContainer.appendChild(navContainer);

  const navElement1 = document.createElement("div");
  navElement1.innerText = `Default`;
  navElement1.addEventListener("click", redirectHomePage);
  navContainer.appendChild(navElement1);

  const navElement3 = document.createElement("div");
  navElement3.innerText = `Scratch`;
  navElement3.addEventListener("click", redirectScratchPage);
  navContainer.appendChild(navElement3);

  const navElement4 = document.createElement("div");
  navElement4.innerText = `Slot`;
  navElement4.addEventListener("click", redirectSlotPage);
  navContainer.appendChild(navElement4);

  return headerContainer;
}

function redirectHomePage() {
  const toHomePage = customEventPath("/Randomix");

  document.dispatchEvent(toHomePage);
}

function redirectScratchPage() {
  const toScratchPage = customEventPath("/Randomix/scratch");

  document.dispatchEvent(toScratchPage);
}

function redirectSlotPage() {
  const toSlotPage = customEventPath("/Randomix/slot");

  document.dispatchEvent(toSlotPage);
}

export { Header };