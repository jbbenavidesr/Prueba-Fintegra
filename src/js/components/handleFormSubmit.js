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

    let country = countries.find(function (item) {
        return formdata.get("country") === item.Country;
    })["ISO Code"];

    let data = { names, country };

    let results = document.querySelector('[data-app="results"]');

    results.textContent = "Calculando la edad...";

    handleAgeRequest(data).then(function (response) {
        renderAges(response, results);
    });
}

export default handleFormSubmit;
