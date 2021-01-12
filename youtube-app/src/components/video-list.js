import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos, onVideoSelect}) => {
    const videoItems = videos.map((i, index) => {
        return <VideoListItem onVideoSelect={onVideoSelect} key={index} video={i} />
    });
    
    return (
    <div className="video-detail col-md-4">
        {videoItems}
    </div>
    );
}

export default VideoList;