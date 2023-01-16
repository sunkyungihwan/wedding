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
import photo9 from '../assets/img/pic09.jpg';
import phot10 from '../assets/img/pic10.jpg';
import phot11 from '../assets/img/pic11.jpg';
import phot12 from '../assets/img/pic12.jpg';
const images = [
    { original: photo1, thumbnail: photo1 },
    { original: photo2, thumbnail: photo2 },
    { original: photo3, thumbnail: photo3 },
    { original: photo4, thumbnail: photo4 },
    { original: photo5, thumbnail: photo5 },
    { original: photo6, thumbnail: photo6 },
    { original: photo7, thumbnail: photo7 },
    { original: photo8, thumbnail: photo8 },
    { original: photo9, thumbnail: photo9 },
    { original: phot10, thumbnail: phot10 },
    { original: phot11, thumbnail: phot11 },
    { original: phot12, thumbnail: phot12 }
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
