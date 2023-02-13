import React from 'react';
import './WeatherForm.css';

const WeatherForm = (props) => {
    return (
      <form onSubmit={props.getWeather}>
          <div className="text_inputs">
            <input type="text" placeholder="Add City.." id="city"/>
            <input type="text" placeholder="Add Country.." id="country"/>
          </div>
          <input type="submit" value="Get Weather" id="submit"/>
          <div className="clear"></div>
      </form>
    );
}

export default WeatherForm;