import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import photo from '../assets/img/info.jpg';

const Information = () => {
    const animatedItem = [useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0)];
    return (
        <div className="content information">
            <h2 {...animatedItem[0]} className="title">
                층별 안내
            </h2>
            <div {...animatedItem[1]}>
                <img src={photo} />
            </div>
            <div {...animatedItem[2]} className="info">
                <dl className="floor">
                    <dt>5층</dt>
                    <dd>
                        예식장 / 신부대기실<span></span>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt>4층</dt>
                    <dd>
                        연회장<span>오픈시간 - 13:00 ~ 15:30</span>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt>3층</dt>
                    <dd>로비 (접수대 & 포토테이블 & 축의대)</dd>
                </dl>
                <dl className="floor">
                    <dt>2층</dt>
                    <dd>카페 / 보조신부대기실</dd>
                </dl>
                <dl className="floor">
                    <dt>1층</dt>
                    <dd>
                        연회장 (2부진행) / 포토박스 <span>오픈시간 - 14:00 ~ 15:30</span>
                    </dd>
                </dl>
                <dl>
                    <dt>B1층</dt>
                    <dd>ATM</dd>
                </dl>
                <div className="ref" align="left" vertical-align="middle">
                    하객 동선 : 1층(로비) → 3층(축의대) → 5층(예식장) → 1층(연회장)
                </div>
            </div>
        </div>
    );
};

export default Information;
