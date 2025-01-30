import { customEventPath } from "../../utils/customEvent.js";

function Header() {
  const headerContainer = document.createElement("header");
  headerContainer.id = `headerContainer`;

  const pageName = document.createElement("h1");
  pageName.innerText = `Randomix`;
  headerContainer.appendChild(pageName);

  const navContainer = document.createElement("nav");
  headerContainer.appendChild(navContainer);

  const navElement1 = document.createElement("div");
  navElement1.innerText = `Home`;
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
  const toHomePage = customEvent("/");

  document.dispatchEvent(toHomePage);
}

function redirectScratchPage() {
  const toScratchPage = customEvent("/scratch");

  document.dispatchEvent(toScratchPage);
}

function redirectSlotPage() {
  const toSlotPage = customEvent("/slot");

  document.dispatchEvent(toSlotPage);
}

export { Header };

// TEST

// const test = Header();
// document.querySelector("body").appendChild(test);