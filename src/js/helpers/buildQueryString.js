/**
 * Build the query String based on the data object
 *
 * @param data Object with the data of names and location
 */
function buildQueryString(data) {
    let string = data.names
        .map(function (name, i) {
            return `${i == 0 ? "" : "&"}name=${name}`;
        })
        .join("");

    if (data.country) {
        string += `&country_id=${data.country}`;
    }
    return string;
}

export default buildQueryString;
