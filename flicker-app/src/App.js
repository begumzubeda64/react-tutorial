import React, { useEffect, useState } from 'react';
import './app.scss';
import Photos from './components/photos/photos';
import SearchBar from './components/search/search';
import Videos from './components/videos/videos';
import { searchForAsset } from './services/search-service';

const App = () => {
  const [ appState, setAppState ] = useState({
    loading: true,
    searchValue: 'cat',
    engine: 'flicker',
    photos: []
  });

  useEffect(() => {
    search();
  }, [appState.engine]);

  const search = () => {
    setAppState({ ...appState, loading: true, photos: [] });
    searchForAsset(appState.searchValue, appState.engine)
    .then(photos => {
      setAppState({ ...appState, photos: photos, loading: false });
    })
    .catch(err => {
      setAppState({ ...appState, photos: [], loading: false });
    })
  }

  const searchEngineChanged = (e) => {
    setAppState({ ...appState, engine: e.target.value });
  }

  const searchTermChanged = (e) => {
    setAppState({ ...appState, searchValue: e.target.value });
  }

  const onImageClick = (e) => {
    console.log('onImageClick', e.target.id);
  }
  
  return (
    <div className="App">
      <SearchBar 
      search={search} 
      engine={appState.engine}
      engineChanged={searchEngineChanged}
      searchTermChanged={searchTermChanged}
      searchValue={appState.searchValue}
      />
      <div>
        {appState.loading && (
          <div>Loading...</div>
        )}
        {appState.photos.length === 0 && !appState.loading && (
          <div>Can't find photos for {appState.searchValue}</div>
        )}
        {appState.photos.length > 0 && !appState.loading && (
          <>
            {
              appState.engine === "flicker" && (
                <Photos photos={appState.photos}
                onImageClick={onImageClick}
                />
              )
            }
            {
              appState.engine === "giphy" && (
                <Videos videos={appState.photos}
                onVideoClick={onImageClick}
                />
              )
            }
          </>
        )}
      </div>
    </div>
  );
}

export default App;
