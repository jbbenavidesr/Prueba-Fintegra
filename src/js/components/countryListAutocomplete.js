import countries from "../data/countries";

function countryListAutocomplete() {
    let input = document.querySelector('[data-list="countries"]');
    input.removeAttribute("type");
    input.setAttribute("list", "countries");

    let datalist = document.createElement("datalist");
    datalist.id = "countries";

    datalist.innerHTML = countries
        .map(function (country) {
            return `<option value="${country.Country}">`;
        })
        .join("");

    input.parentNode.appendChild(datalist);
}

export default countryListAutocomplete;
