import React, { useState } from 'react';
import Accordion from './Accordion';

function AccountInfo({ data }) {
    const [isActive, setGroomActive] = useState(false);

    function toggleGroomActive() {
        setGroomActive(!isActive);
    }

    function AccordionBox({ info }) {
        return (
            <div className="accordionBox">
                {info.map((accountInfo, idx) => {
                    return <Accordion data={accountInfo} key={'AccordionBox' + idx} />;
                })}
            </div>
        );
    }

    return (
        <div className="accountBox">
            <div>
                <button className="button arrow" onClick={toggleGroomActive}>
                    {data.type}측 계좌번호
                    <div className={isActive ? 'icon plus' : 'icon minus'}></div>
                </button>
            </div>
            {isActive ? <AccordionBox info={data.info} /> : null}
        </div>
    );
}

export default AccountInfo;
