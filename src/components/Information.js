import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import photo from '../assets/img/info.jpg';

const Information = () => {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0)
    ];
    return (
        <div className="content information">
            <h2 {...animatedItem[0]} className="title">층별 안내</h2>
            <div {...animatedItem[1]}>
                <img src={photo} />
            </div>
            <div {...animatedItem[2]} className="info">
                <dl className="floor">
                    <dt>5층</dt>
                    <dd>예식장 / 신부대기실</dd>
                </dl>
                <dl className="floor">
                    <dt>4층</dt>
                    <dd>
                        연회장<span>예식 30분전 오픈</span>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt>3층</dt>
                    <dd>로비</dd>
                </dl>
                <dl className="floor">
                    <dt>2층</dt>
                    <dd>카페 / 보조신부대기실</dd>
                </dl>
                <dl className="floor">
                    <dt>1층</dt>
                    <dd>
                        연회장<span>2부진행</span>
                    </dd>
                </dl>
                <dl>
                    <dt>B1층</dt>
                    <dd>ATM<span>수수료 있음</span></dd>
                </dl>
                <div className="ref" align='left' vertical-align="middle">카페 이용 많이 부탁드립니다:D</div>
            </div>
        </div>
    );
};

export default Information;
