import React, { useRef, useEffect } from 'react';
import maker from '../assets/img/marker.png';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const options = {
    center: window.kakao ? new window.kakao.maps.LatLng(37.47417, 127.1151) : null, //지도의 중심좌표.
    level: 6
};

function Place() {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
        if (!window.kakao) return () => {};
        const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
        var markerPosition = new window.kakao.maps.LatLng(37.47417, 127.1151);

        const markerImage = new window.kakao.maps.MarkerImage(maker, new window.kakao.maps.Size(44, 47), {
            offset: new window.kakao.maps.Point(22, 47)
        });

        var marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });
        marker.setMap(map);
        map.setDraggable(false);
        map.setZoomable(false);
        map.addControl(new window.kakao.maps.ZoomControl(), window.kakao.maps.ControlPosition.RIGHT);

        var content =
            '<div class="customoverlay">' +
            '  <a href="https://map.kakao.com/link/map/1610731648" target="_blank">' +
            '    <span class="tag">빌라드지디</span>' +
            '  </a>' +
            '</div>';

        var position = new window.kakao.maps.LatLng(37.47417, 127.1151);

        new window.kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1
        });
        return () => {};
    }, []);

    return (
        <div {...animatedItem} className="content place">
            <h2 className="title">오시는 길</h2>
            <div className="address">
                <span>빌라드 지디 수서</span>
                <span>서울시 강남구 밤고개로21길 79 (율현동 68-8)</span>
                <a href={'tel:02-543-2555'}>02-543-2555</a>
            </div>
            <div className="map" ref={container}></div>
            <div className="transportation">
                <div className="transBox">
                    <div className="means">셔틀버스</div>
                    <div>
                        지하철 수서역 4번 출구 앞 10분 간격 셔틀버스 운행 <br />* SRT는 수서역 1번 출구로 나와서 4번
                        출구로
                    </div>
                </div>
                <div className="transBox">
                    <div className="means">버스</div>
                    <div>강남한양수자인APT정류장(도보 10분) 3426, 402</div>
                </div>
                <div className="transBox">
                    <div className="means">자차</div>
                    <div>
                        서울시 강남구 밤고개로21길 79(율현동) 빨간모자 쓴 주차 안내 직원을 찾아주세요 주차 공간이
                        협소하여❤️❤️‍🔥💓💗❣️💕🌿💖🥳 ⭐️✨🌟💫🤩🤵‍♂️👰‍♀️👑🍽️🍴🚗🚌🚃🚘🚅📞
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Place;
