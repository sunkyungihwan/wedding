import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import photo from '../assets/img/info.jpg';

const Information = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content information">
            <h2 className="title">층별 안내</h2>
            <div>
                <img src={photo} />
            </div>
            <div className="info">
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
                    <dd>ATM</dd>
                </dl>
            </div>
        </div>
    );
};

export default Information;
