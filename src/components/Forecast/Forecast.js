import React, {useState} from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
    let [city,setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [responseObj,setResponseObj]= useState({});
    const uriEncodeCity = encodeURIComponent(city);
    function getForecast(e){
        e.preventDefault();
        //weather data fetch function goes here
        fetch(`${process.env.REACT_APP_API_URL}/weather?units=${unit}&q=${uriEncodeCity}&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(response =>{
                setResponseObj(response)
            })
    }
    return(
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter city"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <button type="submit">Get Forecast</button>
            </form>
            <Conditions
                responseObj={responseObj}
            />
        </div>
    );
}

export default Forecast;