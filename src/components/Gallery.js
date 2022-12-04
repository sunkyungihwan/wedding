import React from 'react';
import ImageGallery from 'react-image-gallery';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import photo1 from '../assets/img/pic01.jpg';
import photo2 from '../assets/img/pic02.jpg';
import photo3 from '../assets/img/pic03.jpg';
const images = [
    { original: photo1, thumbnail: photo1 },
    { original: photo2, thumbnail: photo2 },
    { original: photo3, thumbnail: photo3 }
];
function Gallery() {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content gallery">
            <h2 className="title">갤러리</h2>
            <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
        </div>
    );
}

export default Gallery;
