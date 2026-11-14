'use client'; // 버튼 이벤트와 useState를 사용하므로 클라이언트 컴포넌트로 선언합니다.

import { useState } from 'react';

const sampleMenus = [
    { id: 1, name: '김치찌개', category: '한식' },
    { id: 2, name: '비빔밥', category: '한식' },
    { id: 3, name: '불고기', category: '한식' },
];

export default function ConditionalRenderingLecturePage() {
    // 화면에서 보여 줄 상황을 바꾸어 조건별 UI를 확인합니다.
    const [view, setView] = useState('data');

    // 각 조건에 맞는 JSX를 반환합니다. 먼저 확인된 조건에서 반환하면 이후 코드는 실행되지 않습니다.
    function renderMenuContent() {
        if (view === 'loading') {
            return <p role="status">메뉴를 불러오는 중입니다...</p>;
        }

        if (view === 'error') {
            return <p role="alert">메뉴를 불러오지 못했습니다.</p>;
        }

        if (view === 'empty' || sampleMenus.length === 0) {
            return <p>등록된 메뉴가 없습니다.</p>;
        }

        return (
            <ul>
                {sampleMenus.map((menu) => (
                    <li key={menu.id}>
                        {menu.name} · {menu.category}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <main>
            <h1>React 조건부 렌더링</h1>
            <p>
                데이터 상태에 따라 로딩, 오류, 빈 목록 또는 결과 화면 중 하나를 보여줍니다.
            </p>
            <p>메뉴 조회 결과에 따라 사용자에게 맞는 안내와 목록을 보여줍니다.</p>

            <div>
                {/* 버튼을 눌러 각 조건에 해당하는 화면을 직접 확인합니다. */}
                <button type="button" onClick={() => setView('loading')}>
                    로딩 상태
                </button>
                <button type="button" onClick={() => setView('error')}>
                    오류 상태
                </button>
                <button type="button" onClick={() => setView('empty')}>
                    빈 목록
                </button>
                <button type="button" onClick={() => setView('data')}>
                    데이터 목록
                </button>
            </div>

            <section aria-live="polite">
                <h2>메뉴 목록</h2>
                {renderMenuContent()}
            </section>
        </main>
    );
}
