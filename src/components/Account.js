import React from 'react';

function Account() {
    return (
        <div className="content account">
            <div className="title">
                <h2>마음 전하실 곳</h2>
            </div>
            <div className="accordionDiv">
                <div className="accordion">
                    <button>신랑측 계좌번호</button>
                    <div class="arrow rotate">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="accountDiv">
                    <div className="account-body">
                        <span>국민은행 636102-01-084239</span>
                        <br />
                        <span>최선경</span>
                    </div>
                    <button>복사하기</button>
                    <button>카카오 페이</button>
                </div>
            </div>
        </div>
    );
}

export default Account;
