import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

function Bus() {
    const animatedItem = [useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0)];

    return (
        <div className="content place">
            <h2 {...animatedItem[0]} className="title">
                전세버스
            </h2>
            <div {...animatedItem[1]} className="address">
                <span>(세운고속관광) 대구 70바 5006</span>
                <span>기사님 번호 :<a href={'tel:010-5063-8989'}> 010-5063-8989</a></span>
                <div className="desc"><div className="spot">어린이회관<br/>8시 20분 출발</div> → <div className="spot">유통단지 전자관 정문<br/> 8시 40분 출발</div></div>
            </div>
        </div>
    );
}

export default Bus;
