'use client';

import { useEffect, useState } from 'react';

export default function UseEffectLecture() {
    const [favoriteCount, setFavoriteCount] = useState(0);

    useEffect(() => {
        document.title = `즐겨찾기 ${favoriteCount}개 | 메뉴 관리`;
    }, [favoriteCount]);

    return (
        <main>
            <h1>메뉴 즐겨찾기 수와 useEffect</h1>
            <p>
                Effect는 React 화면 바깥의 브라우저 탭 제목을 현재 상태와 동기화합니다.
            </p>
            <p>즐겨찾기 메뉴: {favoriteCount}개</p>
            <button
                type="button"
                onClick={() => setFavoriteCount((count) => count + 1)}
            >
                메뉴 즐겨찾기 추가
            </button>
            <button
                type="button"
                onClick={() => setFavoriteCount((count) => Math.max(0, count - 1))}
            >
                즐겨찾기 해제
            </button>
        </main>
    );
}