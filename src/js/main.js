import handleFormSubmit from "./components/handleFormSubmit";
import countryListAutocomplete from "./components/countryListAutocomplete";

countryListAutocomplete();

let form = document.querySelector('[data-app="form"]');

form.addEventListener("submit", handleFormSubmit);
