import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { WEDDING_INVITATION_URL } from '../utils/config';

const Information = () => {
    const copy = () => {
        alert('청첩장 주소가 복사됐습니다');
    };
    return (
        <div className="content footer">
            <div className="shared">
                <CopyToClipboard text={WEDDING_INVITATION_URL} onCopy={copy}>
                    <button>청첩장 주소 복사하기</button>
                </CopyToClipboard>
            </div>
            <div className="copyright">
                Copyright 2022. <span>Sunkyungihwan</span>. All rights reserved.
            </div>
        </div>
    );
};

export default Information;
