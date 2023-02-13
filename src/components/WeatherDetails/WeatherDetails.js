import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = (props) => {
    return (
      <div className="weather_details">
        {props.city && <p className="city"><span>City:</span> <span>{props.city}</span></p>}
        {props.country && <p className="country"><span>Country:</span> <span>{props.country}</span></p>}
        {props.temperature && <p className="temp"><span>Temperature:</span> <span>{props.temperature}</span></p>}
        {props.humidity && <p className="humidity"><span>Humidity:</span> <span>{props.humidity}</span></p>}
        {props.description && <p className="desc"><span>Description:</span> <span>{props.description}</span></p>}
        {props.error && <p className="error"><span>{props.error}</span></p>}
      </div>
    );
}

export default WeatherDetails;