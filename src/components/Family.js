import React from 'react';
import AccountInfo from './Account/AccountInfo';
import { ACCOUNT_INFO } from '../utils/config';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const Family = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content family">
            <div>
                <div>
                    <div className="together">
                        함께 해주세요
                    </div>
                    <div>
                        <div>
                            <div className='quote'></div>
                            <div className='cursive'>
                                <i>숫자 '8'이 무엇을 의미하는지 알아? 바로 '무한대'야!</i>
                            </div>
                            <div className="movie">
                                - 벤자민 버튼의 시간은 거꾸로 간다
                            </div>
                            <div className='quote back'></div>
                        </div>
                        <div className="love">
                            우연한 만남이 8년간의 사랑이 되었고, <br/>
                            이제는 무한히 행복한 가정을 이루려고 합니다<br/>
                            부디 저희의 앞날을 축복해주세요
                        </div>
                    </div>
                </div>
                <div className="intro">
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
                            <span className="dot">·</span>
                            김점숙
                        </span>
                        <span className="relation">의 차녀</span>
                        <span className="name">선경</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Family;
