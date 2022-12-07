import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import photo4 from '../assets/img/pic04.JPG';

const Information = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content information">
            <h2 className="title">층별 안내</h2>
            <div>
                <img src={photo4} />
            </div>
            <div></div>
        </div>
    );
};

export default Information;
