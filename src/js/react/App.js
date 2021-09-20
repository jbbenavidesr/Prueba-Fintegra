import Header from "./components/Header";
import Intro from "./components/Intro";
import AgePredictor from "./components/AgePredictor";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState(function (prevState) {
            return {
                intro: !prevState.intro,
            };
        });
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.intro ? (
                    <Intro clickHandler={this.handleClick} />
                ) : (
                    <AgePredictor />
                )}
            </div>
        );
    }
}

export default App;
