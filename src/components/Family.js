import React from 'react';
import AccountInfo from './Account/AccountInfo';
import { ACCOUNT_INFO } from '../utils/config';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const Family = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content account">
            <div>
                <span>
                    이동관
                    <span>·</span>
                    김태선
                </span>
                <span>의 차남</span>
                <span>이기환</span>
            </div>
            <div>
                <span>
                    최용찬
                    <span>·</span>
                    김점숙
                </span>
                <span>의 차녀</span>
                <span>최선경</span>
            </div>
        </div>
    );
};

export default Family;
