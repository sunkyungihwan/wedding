import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const Family = () => {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0)
    ];
    return (
        <div className="content family">
            <div>
                <div>
                    <div {...animatedItem[0]} className="together">
                        함께 해주세요
                    </div>
                    <div>
                        <div {...animatedItem[1]}>
                            <div className="quote"></div>
                            <div className="cursive">
                                <i>네 번의 모든 계절들과 열두 달의 시간을<br/>
                                너와 숨이 차게 매일 사랑하며 함께 할게</i>
                            </div>
                            <div className="movie">- 마음을 드려요 IU</div>
                            <div className="quote back"></div>
                        </div>
                        <div {...animatedItem[2]} className="love">
                            우연한 만남이 8년간의 사랑이 되었고, <br />
                            이제 행복한 가정을 이루려고 합니다
                            <br />
                            부디 저희의 앞날을 축복해주세요
                        </div>
                    </div>
                </div>
                <div {...animatedItem[3]} className="intro">
                    <div>
                        <span className="parent">
                            이동관
                            <span className="dot">·</span>
                            김태선
                        </span>
                        <span className="relation">의 차남</span>
                        <span className="name">기환</span>
                    </div>
                    <div>
                        <span className="parent">
                            최용찬
                            <span className="dot">·</span>
                            김점숙
                        </span>
                        <span className="relation">의 차녀</span>
                        <span className="name">선경</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Family;
