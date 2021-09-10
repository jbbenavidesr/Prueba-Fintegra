import renderAges from "./renderAges";
import handleAgeRequest from "./handleAgeRequest";
import countries from "../data/countries";

/**
 * Handles the submitted form data, validates and sends to the api.
 */
function handleFormSubmit(event) {
    event.preventDefault();

    let formdata = new FormData(event.target);
    let names = formdata
        .get("names")
        .split(",")
        .map(function (name) {
            return name.trim();
        });
    let country;
    if (formdata.get("country")) {
        country = countries.find(function (item) {
            return formdata.get("country") === item.Country;
        })?.ISOCode;
    }
    let data = { names, country };

    let results = document.querySelector('[data-app="results"]');

    results.textContent = "Calculando la edad...";

    handleAgeRequest(data)
        .then(function (response) {
            renderAges(response, results);
        })
        .catch(function (error) {
            results.textContent =
                "Tuvimos problemas en nuestros cálculos, por favor intenta más tarde.";
            console.warn(error);
        });
}

export default handleFormSubmit;
