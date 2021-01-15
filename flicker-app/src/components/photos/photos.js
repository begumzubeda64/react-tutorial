import React from 'react';
import './photos.scss';
import Photo from './photo';

const Photos = ({photos, onImageClick}) => {
    return(
        <div className="photos-grid">
        {photos.map((photo) => {
            return (
                <Photo
                key={photo.id}
                photo={photo}
                onImageClick={onImageClick}
                />
            )
        })}
        </div>
    )
}

export default Photos;