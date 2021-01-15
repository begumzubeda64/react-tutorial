import React from 'react';
import './videos.scss';
import Video from './video';

const Videos = ({videos, onVideoClick}) => {
    return(
        <div className="videos-grid">
        {videos.map((video) => {
            return (
                <Video
                key={video.id}
                video={video}
                onVideoClick={onVideoClick}
                />
            )
        })}
        </div>
    )
}

export default Videos;