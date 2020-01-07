import React from 'react';
import ReactDOM from 'react-dom';
import WeatherDisplay from './components/seasons/weather'
import Spinner from './components/spinner/spinner'

class App extends React.Component {

    state = {
        lat: null,
        errorMessage: ''
    };
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <WeatherDisplay lat={this.state.lat} />
        }
        
        return <Spinner message="Precisamos de sua localização" />;

    }

}

ReactDOM.render(<App />, document.querySelector('#root'));