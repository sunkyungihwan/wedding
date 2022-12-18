import React from 'react';
import AccountInfo from './Account/AccountInfo';
import { ACCOUNT_INFO } from '../utils/config';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const Family = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content family">
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
                    <span  className="dot">·</span>
                    김점숙
                </span>
                <span className="relation">의 차녀</span>
                <span className="name">선경</span>
            </div>
        </div>
    );
};

export default Family;
