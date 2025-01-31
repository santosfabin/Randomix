function ShowItem() {
  const showSlotItem = document.createElement("div");

  showSlotItem.classList.add("showSlotItem");
  showSlotItem.style.height = "60px";
  showSlotItem.style.width = "135px";
  showSlotItem.style.border = "3px solid #3F6E56";
  showSlotItem.style.borderRadius = "20px";
  showSlotItem.style.position = "relative";
  showSlotItem.style.overflow = "hidden";
  showSlotItem.style.backgroundColor = "white";

  return showSlotItem;
}

export { ShowItem };
