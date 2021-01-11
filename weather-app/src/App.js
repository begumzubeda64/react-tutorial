import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import './App.css';

const API_KEY = "b34a9ebe8be532b62261dd66131790be";

class App extends React.Component {
  state = {
    weather: {
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: ''
    },
    error: ''
  }
  getWeather = async (payload) => {
    const { city, country } = payload;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState(prevState => {
        return {
          ...prevState, weather: {
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description
          }, error: ''
        }
      });
    } else {
      this.setState(prevState => {
        return {
          ...prevState, weather: {
            temperature: '',
            city: '',
            country: '',
            humidity: '',
            description: ''
          }, error: 'Please enter the values...'
        }
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather data={this.state.weather} error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
