import React from 'react';
import ImageGallery from 'react-image-gallery';
import photo1 from '../assets/img/6MB_CAT.png';
const images = [
    { original: photo1, thumbnail: photo1 },
    { original: photo1, thumbnail: photo1 },
    { original: photo1, thumbnail: photo1 }
];
function Gallery() {
    return (
        <div className="content gallery">
            <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
        </div>
    );
}

export default Gallery;
