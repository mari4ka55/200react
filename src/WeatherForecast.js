import React, {useState, useEffect} from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast (props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast]= useState (null);

useEffect(() => {
 setLoaded(false);
    
  }, [props.coordinates]);


function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded) {
    return(
<div className="WeatherForecast">
    <div className="row">
        <div className="col">
           <WeatherForecastDay data={forecast[0]} />
    </div>
    <div className="col">
           <WeatherForecastDay data={forecast[1]} />
    </div>
    <div className="col">
           <WeatherForecastDay data={forecast[2]} />
    </div>
    <div className="col">
           <WeatherForecastDay data={forecast[3]} />
    </div>
    <div className="col">
           <WeatherForecastDay data={forecast[4]} />
    </div>
</div>
</div>
);
} else {
let apiKey= "749d11da7cc4bf5dcb36a5fdf40ecee1";
let lat= props.coordinates.lat;
let lon= props.coordinates.lon;
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(handleResponse);

return null;


}
}