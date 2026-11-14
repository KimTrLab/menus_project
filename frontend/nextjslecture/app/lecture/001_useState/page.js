'use client';
// React의 useState 훅을 사용하기 위해 import합니다.
import { useState } from 'react';

export default function Lecture01Page() {
    // React 컴포넌트는 화면을 직접 조작하는 대신, 현재 props와 state에 맞는 JSX를 반환합니다.
    // props는 부모가 전달하는 입력값이고, state는 현재 컴포넌트가 기억하고 관리하는 상태값입니다.
    // state는 직접 바꾸지 않고 useState가 돌려준 setter 함수로 변경을 요청합니다.
    // JSX는 JavaScript 안에서 HTML과 비슷한 문법으로 화면의 구조와 내용을 표현합니다.
    // 이 예제는 props를 받지 않고, isFavorite state에 따라 JSX에 다른 문구를 표시합니다.
    // useState는 컴포넌트가 다시 실행된 뒤에도 state 값을 기억하고, 값을 갱신하도록 요청하는 함수를 제공합니다.
    // 버튼을 누르면 setIsFavorite이 새 state를 React에 요청하고, updater는 현재 값의 반대 값을 계산합니다.
    // React는 새 state로 컴포넌트를 다시 실행해 새 JSX 트리를 만들고, 이전 트리와 비교합니다(재조정).
    // 비교 결과 달라진 부분만 실제 DOM에 반영(commit)하므로, 직접 DOM을 바꾸지 않아도 화면이 state와 맞춰집니다.
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <main>
            <h1>메뉴 즐겨찾기</h1>
            <p>함수 컴포넌트가 JSX를 반환하고, state가 바뀌면 화면이 다시 렌더링됩니다.</p>
            <p>
                <a href="/lecture/001_useState/dom-direct-control.html">
                    React 없이 JavaScript로 DOM을 직접 바꾸는 HTML 예제 보기
                </a>
            </p>

            <article>
                <h2>김치찌개</h2>
                <p>오늘의 추천 메뉴</p>
                <p>{isFavorite ? '즐겨찾기에 저장됨' : '즐겨찾기에 저장되지 않음'}</p>
                <button
                    type="button"
                    onClick={() => setIsFavorite((current) => !current)}
                >
                    {isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
                </button>
            </article>
        </main>
    );
}