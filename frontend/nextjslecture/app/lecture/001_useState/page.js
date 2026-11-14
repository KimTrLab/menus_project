'use client';
// React의 useState 훅을 사용하기 위해 import합니다.
import { useState } from 'react';

export default function Lecture01Page() {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <main>
            <h1>메뉴 즐겨찾기</h1>
            <p>함수 컴포넌트가 JSX를 반환하고, state가 바뀌면 화면이 다시 렌더링됩니다.</p>

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