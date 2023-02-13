import React, {Component} from 'react';
import WeatherForm from './components/WeatherForm/WeatherForm';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import './App.css';

const KEY = process.env.REACT_APP_KEY;

class App extends Component {
  state = {
    city: "",
    country: "",
    temperature: "",
    humidity: "",
    description: "",
    error: ""
  }

  // getWeather Function
  getWeather = async (e) => {
    e.preventDefault();
    let cityValue    = e.target.elements.city.value; // or >> e.target.city.value
    let countryValue = e.target.elements.country.value; // or >> e.target.city.value
    let request = await fetch(`${process.env.REACT_APP_BASE_URL}?q=${cityValue},${countryValue}&appid=${KEY}`);
    let data = await request.json();
    //console.log(data);
    if(cityValue && countryValue && request.status != 404) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: "",
        country: "",
        temperature: "",
        humidity: "",
        description: "",
        error: "Please Add a Valid City and Country Name.."
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1 style={{color: "#fff"}}>Weather Map</h1>
        <WeatherForm getWeather = {this.getWeather}/>
        <WeatherDetails 
          city = {this.state.city}
          country = {this.state.country}
          temperature = {this.state.temperature}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;