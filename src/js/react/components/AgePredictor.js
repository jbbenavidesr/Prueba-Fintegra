import buildQueryString from "../../helpers/buildQueryString";
import countries from "../../data/countries";
import AgeResult from "./AgeResult";

class AgePredictor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameList: [],
            country: "",
            result: {},
            isLoading: false,
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(event) {
        let { value, name } = event.target;
        if (name === "nameList") {
            value = value.split(", ").map(function (name) {
                return name.trim();
            });
        }
        this.setState({
            [name]: value,
        });
    }

    submitHandler(event) {
        event.preventDefault();

        let { state, setState } = this;

        setState({
            isLoading: true,
        });

        let country = countries.find(function (item) {
            return state.country === item.Country;
        })?.ISOCode;

        let query = buildQueryString({
            names: state.nameList,
            country,
        });

        fetch("https://api.agify.io?" + query)
            .then(function (response) {
                if (!response.ok) throw response;
                return response.json();
            })
            .then(function (result) {
                setState({
                    result,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <main>
                <div className="wrapper">
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label htmlFor="names">
                                Nombres (Si es más de uno, separalos con comas)
                            </label>
                            <input
                                onChange={this.changeHandler}
                                type="text"
                                name="nameList"
                                id="names"
                                value={this.state.nameList.join(", ")}
                            />
                        </div>
                        <div>
                            <label htmlFor="country">País (En inglés)</label>
                            <input
                                onChange={this.changeHandler}
                                type="text"
                                name="country"
                                id="country"
                                value={this.state.country}
                            />
                        </div>
                        <button className="btn">Calcular edad</button>
                    </form>
                    <hr />
                </div>
                <div className="wrapper">
                    <AgeResult result={this.state.result} />
                </div>
            </main>
        );
    }
}

export default AgePredictor;
