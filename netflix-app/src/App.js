import React, { useState } from 'react';
import './assets/App.css';
import axios from 'axios';
import Header from './components/partials/header';
import TitleList from './components/title-list';
import SearchResult from './components/partials/search-result';
import Hero from './components/partials/hero';

const App = () => {
  const [ data, setData ] = useState([]);

  const performSearch = (val) => {
    const apiKey = '87dfa1c669eea853da609d4968d294be';
		axios.get('https://api.themoviedb.org/3/search/multi?query=' + val + '&api_key=' + apiKey)
    .then((data) => {
      setData(data.data);
    }).catch(err => {
      console.log(err);
      console.error(err.toString());
    });
  }
  
  return (
    <>
      <Header onSubmit={(val) => performSearch(val)} />
      <Hero />
      <SearchResult data={data} />
      <TitleList key="0" title="Top TV picks for Jack" url="discover/tv?sort_by=popularity.desc&page=1" />
      <TitleList key="1" title="Trending now" url="discover/movie?sort_by=popularity.desc&page=1" />
      <TitleList key="2" title="Most watched in Horror" url="genre/27/movies?sort_by=popularity.desc&page=1" />
      <TitleList key="3" title="Sci-Fi greats" url="genre/878/movies?sort_by=popularity.desc&page=1" />
      <TitleList key="4" title="Comedy magic" url="genre/35/movies?sort_by=popularity.desc&page=1" />
    </>
  );
}

export default App;
