import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import bride from '../assets/img/bride.png';
import groom from '../assets/img/groom.png';
import married from '../assets/img/married.png';
import open from '../assets/img/open.png';

const Information = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content move">
            <h2 className="title">시간별 안내</h2>
            <div className="info">
                <div className="boxWrap">
                    <div className="box start"></div>
                    <div className="box">
                        <img src={married}></img>
                        <div>
                            보조대기실<span>(2층)</span>
                        </div>
                    </div>
                    <div className="box">
                        <img src={bride}></img>
                        <div>
                            신부대기실<span>(5층)</span>
                        </div>
                    </div>
                    <div className="box">
                        <img className="open" src={open}></img>
                        <div>
                            연회장<span>(4층)</span>
                        </div>
                    </div>
                    <div className="box last"></div>
                </div>
                <div className="boxWrap grid">
                    <div className="box start"></div>
                    <div className="box">
                        <div className="top">
                            <div className="time">12:00</div>
                        </div>
                        <div className="bottom"></div>
                    </div>
                    <div className="box">
                        <div className="time">12:30</div>
                        <img src={groom}></img>
                        <div>
                            로비<span>(3층)</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="time">13:00</div>
                    </div>
                    <div className="box last"></div>
                </div>
                <div className="boxWrap">
                    <div className="box start"></div>
                    <div className="box">
                        <div className="time">14:40</div>
                        <img src={married}></img>
                        <div>
                            2부 시작<span>(1층)</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="time">14:00</div>
                        <img className="open" src={open}></img>
                        <div>
                            연회장<span>(1층)</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="time">13:30</div>
                        <img src={married}></img>
                        <div>
                            예식 시작<span>(5층)</span>
                        </div>
                    </div>
                    <div className="box last"></div>
                </div>
                <div className="ref" align="left" vertical-align="middle">
                    <div className="route">
                        <div>13:00까지 신랑, 신부가 5층에서 사진을 찍고있을 수 있습니다</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
