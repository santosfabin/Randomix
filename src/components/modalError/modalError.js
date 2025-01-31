function NotificationError(message) {
  if (document.getElementById("notificationErrorContainer")) {
    document.getElementById("notificationErrorContainer").remove();
  }

  const containerError = document.createElement(`div`);
  containerError.innerText = message;
  containerError.id = "notificationErrorContainer";
  document.querySelector(`body`).appendChild(containerError);

  const closeButton = document.createElement(`div`);
  closeButton.id = "notificationErrorButton";
  closeButton.addEventListener("click", closeNotification);
  containerError.appendChild(closeButton);

  function closeNotification() {
    containerError.remove();
    clearTimeout(closeNotificationTimeout);
  }

  const closeNotificationTimeout = setTimeout(closeNotification, 5 * 1000);
}

export { NotificationError };
