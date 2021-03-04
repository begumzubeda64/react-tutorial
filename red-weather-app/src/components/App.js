import '../App.css';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

function App() {
  return (
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  );
}

export default App;
