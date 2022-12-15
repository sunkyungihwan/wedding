import React from 'react';
import ImageGallery from 'react-image-gallery';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import photo1 from '../assets/img/pic01.jpg';
import photo2 from '../assets/img/pic02.jpg';
import photo3 from '../assets/img/pic03.jpg';
import photo4 from '../assets/img/pic04.jpg';
import photo5 from '../assets/img/pic05.jpg';
import photo6 from '../assets/img/pic06.jpg';
import photo7 from '../assets/img/pic07.jpg';
import photo8 from '../assets/img/pic08.jpg';
const images = [
    { original: photo1, thumbnail: photo1 },
    { original: photo2, thumbnail: photo2 },
    { original: photo3, thumbnail: photo3 },
    { original: photo4, thumbnail: photo4 },
    { original: photo5, thumbnail: photo5 },
    { original: photo6, thumbnail: photo6 },
    { original: photo7, thumbnail: photo7 },
    { original: photo8, thumbnail: photo8 }
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
