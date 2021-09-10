import handleFormSubmit from "./components/handleFormSubmit";

let form = document.querySelector('[data-app="form"]');

form.addEventListener("submit", handleFormSubmit);
