import React, { useState } from 'react';
import Accordion from './Accordion';

function AccountInfo({ data }) {
    let [isActive, setActive] = useState(false);
    let [isRealActive, setRealActive] = useState(false);

    function toggleGroomActive() {
        setActive(!isActive);

        if (isRealActive) {
            setTimeout(() => {
                setRealActive(false);
            }, 450);
        } else setRealActive(true);
    }

    function AccordionBox({ info }) {
        return (
            <div className={isActive ? 'accordionBox plus' : 'accordionBox minus'}>
                {info.map((accountInfo, idx) => {
                    return <Accordion data={accountInfo} key={'AccordionBox' + idx} />;
                })}
            </div>
        );
    }

    return (
        <div className="accountBox">
            <div>
                <button className="button arrow" onClick={toggleGroomActive} disabled={isRealActive ^ isActive}>
                    {data.type}측 계좌번호
                    <div className={isActive ? 'icon plus' : 'icon minus'}></div>
                </button>
            </div>
            {isRealActive ? <AccordionBox info={data.info} /> : null}
        </div>
    );
}

export default AccountInfo;
