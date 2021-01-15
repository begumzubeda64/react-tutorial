import React from 'react';
import Observer from 'react-intersection-observer';
import '../photos/photo.scss';

const Video = ({video, onVideoClick}) => {
    return (
        <article>
            <Observer rootMargin="50px 50px 50px 50px">
                <a
                    href="#"
                    onClick={onVideoClick}
                    className="photos-grid__link"
                    id={video.id}
                >
                    <video autoPlay loop muted>
                        <source src={video.url.mp4} />
                    </video>
                </a>
            </Observer>

        </article>

    )
}

export default Video;