import { combineReducers } from "redux";
import WeatherReducer from './weather-reducer';

const RootReducer = combineReducers({
    weather: WeatherReducer
});

export default RootReducer;