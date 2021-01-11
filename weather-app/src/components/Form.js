import React, { useState } from "react";

const Form = ({ getWeather }) => {
	const [ data, setData ] = useState({
		city: '',
		country: ''
	});

	const getWeatherData = (e) => {
		e.stopPropagation(); //stop submission
		e.preventDefault(); //stop submission
		getWeather(data);
	}

	const handleChange = (e) => {
		const val = e.target.value;
		const name = e.target.name;
		setData(state => {
			return {
				...state, [name]: val
			}
		})
	}
	
	return (
		<form onSubmit={getWeatherData}>
			<input value={data.city} onChange={handleChange} type="text" name="city" placeholder="City..."/>
			<input value={data.country} onChange={handleChange} type="text" name="country" placeholder="Country..."/>
			<button>Get Weather</button>
		</form>
	);
}

export default Form;