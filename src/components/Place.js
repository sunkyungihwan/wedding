import React, { useRef, useEffect } from 'react';
import maker from '../assets/img/marker.png';

const options = {
    center: new window.kakao.maps.LatLng(37.47417, 127.1151), //지도의 중심좌표.
    level: 6
};

function Place() {
    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
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
        <div className="content place">
            <h2 className="title">오시는 길</h2>
            <div>빌라드 지디 수서</div>
            서울시 강남구 밤고개로21길 79(율현동 68-8) 02-543-2555
            <div className="map" ref={container}></div>
            <div>
                SRT SRT수서역 1번 출구로 나와 지하철 수서역 4번 출구 앞 10분 간격 셔틀버스 운행 지하철 3호선 수서역 4번
                축구 앞 10분 간격 셔틀버스 운행 (5번 출구 에스컬레이터 이용 후 이동 추천) 버스
                강남한양수자인APT정류장(도보 10분) 3426, 402 자차 서울시 강남구 밤고개로21길 79(율현동) 빨간모자 쓴 주차
                안내 직원을 찾아주세요 주차 공간이 협소하여
            </div>
        </div>
    );
}

export default Place;
