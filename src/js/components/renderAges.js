import sanitizeHTML from "../helpers/sanitizeHTML";
import countries from "../data/countries";

function template(name, age, country) {
    return `<li>${sanitizeHTML(name)} tiene ${sanitizeHTML(`${age}`)} años${
        country ? ` en ${country}` : "."
    }</li>`;
}

function getCountry(id) {
    return countries.find(function (item) {
        return id === item.ISOCode;
    })?.Country;
}

/**
 * renders the list of ages based on the response
 */
function renderAges(response, display) {
    let html = `<h2>Segun nuestros cálculos...</h2>`;
    let list;
    if (Array.isArray(response)) {
        list = response
            .map(function (item) {
                let country;
                if (item.country_id) {
                    country = getCountry(item.country_id);
                }
                return template(item.name, item.age, country);
            })
            .join("");
    } else {
        let country;
        if (response.country_id) {
            country = getCountry(response.country_id);
        }
        list = template(response.name, response.age, country);
    }

    html += "<ul>" + list + "</ul>";
    display.innerHTML = html;
}

export default renderAges;
