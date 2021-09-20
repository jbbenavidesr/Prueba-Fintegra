import buildQueryString from "../../helpers/buildQueryString";
import countries from "../../data/countries";
import AgeResult from "./AgeResult";

class AgePredictor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameList: [],
            country: "",
            result: false,
            isLoading: false,
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(event) {
        let { value, name } = event.target;
        if (name === "nameList") {
            value = value.split(",").map(function (name) {
                return name.trim();
            });
        }
        this.setState({
            [name]: value,
        });
    }

    submitHandler(event) {
        event.preventDefault();

        this.setState({
            isLoading: true,
            result: true,
        });

        let country = countries.find((item) => {
            return this.state.country === item.Country;
        })?.ISOCode;

        let query = buildQueryString({
            names: this.state.nameList,
            country,
        });

        fetch("https://api.agify.io?" + query)
            .then(function (response) {
                if (!response.ok) throw response;
                return response.json();
            })
            .then((result) => {
                this.setState({
                    result,
                    isLoading: false,
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
                                value={this.state.nameList.join(",")}
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
                {this.state.result ? (
                    <div className="wrapper">
                        {this.state.isLoading ? (
                            <p>Calculando la edad...</p>
                        ) : (
                            <AgeResult result={this.state.result} />
                        )}
                    </div>
                ) : (
                    ""
                )}
            </main>
        );
    }
}

export default AgePredictor;
