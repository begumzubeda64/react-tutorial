import React from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';
const API_KEY = 'AIzaSyDgUHYyAwxPEbYgpUlCVZjIfoALhIjQXaI';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  handleChange(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  componentDidMount(){
    this.handleChange("react");
  }

  onVideoSelect(video){
    this.setState({
      selectedVideo: video
    });
  }

  render(){
    return (
      <div className="app-container">
        <SearchBar handleChange={(term) => this.handleChange(term)} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
          onVideoSelect={(video) => this.onVideoSelect(video)} 
          videos={this.state.videos} />
        </div>
      </div>
    );
  }
  
}

export default App;
