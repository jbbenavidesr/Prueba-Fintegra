import AgeItem from "./AgeItem";
import countries from "../../data/countries";

function getCountry(id) {
    return countries.find(function (item) {
        return id === item.ISOCode;
    })?.Country;
}

function AgeResult(props) {
    let resultList;
    if (Array.isArray(props.result)) {
        resultList = props.result.map((item) => {
            let country;
            if (item.country_id) {
                country = getCountry(item.country_id);
            }
            let result = {
                name: item.name,
                age: item.age,
                country,
            };
            return <AgeItem key={item.name} result={result} />;
        });
    } else {
        let country;
        if (props.result.country_id) {
            country = getCountry(props.result.country_id);
        }
        let result = {
            name: props.result.name,
            age: props.result.age,
            country,
        };
        resultList = <AgeItem result={result} />;
    }

    return (
        <div>
            <h2>Segun nuestros cálculos...</h2>
            <ul>{resultList}</ul>
        </div>
    );
}

export default AgeResult;
