import React from 'react';
import photo1 from '../assets/img/pic00.JPG';

function Home() {
    return (
        <div className="content home">
            <div className="title">
                <img src={photo1} />
            </div>
            <div className="location">
                <p>
                    2023. 02. 25. 토요일 낮 13:30 <br />
                    빌라드 지디 수서
                </p>
            </div>
        </div>
    );
}

export default Home;
