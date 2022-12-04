import React from 'react';
import AccountInfo from './Account/AccountInfo';
import { ACCOUNT_INFO } from '../utils/config';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const Account = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content account">
            <h2 className="title">마음 전하실 곳</h2>
            {ACCOUNT_INFO.map((account, idx) => {
                return <AccountInfo data={account} key={'AccountInfo' + idx} />;
            })}
        </div>
    );
};

export default Account;
