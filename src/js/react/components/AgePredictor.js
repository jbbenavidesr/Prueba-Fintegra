class AgePredictor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameList: [],
            country: "",
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
    }

    render() {
        return (
            <main>
                <div className="wrapper">
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label for="names">
                                Nombres (Si es más de uno, separalos con comas)
                            </label>
                            <input
                                onChange={this.changeHandler}
                                type="text"
                                name="nameList"
                                value={this.state.nameList.join(", ")}
                            />
                        </div>
                        <div>
                            <label for="country">País (En inglés)</label>
                            <input
                                onChange={this.changeHandler}
                                type="text"
                                name="country"
                                value={this.state.country}
                            />
                        </div>
                        <button className="btn">Calcular edad</button>
                    </form>
                    <hr />
                </div>
                <div className="wrapper"></div>
            </main>
        );
    }
}

export default AgePredictor;
