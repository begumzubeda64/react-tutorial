import React from 'react';
import Observer from 'react-intersection-observer';
import './photo.scss';

const Photo = ({photo, onImageClick}) => {

    return (
        <article>
            <Observer rootMargin="100px 100px 100px 100px">
                <a
                    href="#"
                    onClick={onImageClick}
                    className="photos-grid__link"
                    id={photo.id}
                >
                    <figure
                        className="absolute-bg"
                        style={{
                            backgroundImage: `url(${photo.url})`
                        }}
                    />
                </a>
            </Observer>
        </article>
    )
    
}

export default Photo;
