import React, { useState } from 'react';

function Account() {
    const [isGroomActive, setGroomActive] = useState(false);

    function toggleGroomActive() {
        setGroomActive(!isGroomActive);
    }
    return (
        <div className="content account">
            <h2 className="title">마음 전하실 곳</h2>
            <div className="accountBox">
                <div>
                    <button className="button arrow" onClick={toggleGroomActive}>
                        신랑측 계좌번호
                        <div className={isGroomActive ? 'icon plus' : 'icon minus'}></div>
                    </button>
                </div>
                <div className="accordionBox">
                    <div className="accordion">
                        <div className="accordion-body">
                            <span>국민은행 636102-01-084239</span>
                            <br />
                            <span>최선경</span>
                        </div>
                        <div className="buttonWrap">
                            <button>복사하기</button>
                            <button>카카오 페이</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
