document.getElementById("mixed").indeterminate = true;
const dialog = document.getElementById("example-dialog");
document
  .getElementById("open-dialog")
  .addEventListener("click", () => dialog.showModal());
document
  .querySelector("main > section > form")
  .addEventListener("submit", (event) => event.preventDefault());
