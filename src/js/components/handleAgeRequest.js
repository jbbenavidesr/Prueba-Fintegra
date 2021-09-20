import buildQueryString from "../helpers/buildQueryString";

/**
 * This function handles the request to the agify api
 *
 * @param {Object} data Object with the data to send in the request
 */
function handleAgeRequest(data) {
    if (!data || !data.names) throw "Los datos enviados no son validos.";

    let query = buildQueryString(data);

    return fetch("https://api.agify.io?" + query)
        .then(function (response) {
            if (!response.ok) throw response;
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default handleAgeRequest;
