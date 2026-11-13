'use client'; // effect와 요청 상태를 관리하므로 클라이언트 컴포넌트입니다.

import { useEffect, useState } from 'react';

const sampleMenus = [
    { id: 1, name: '김치찌개' },
    { id: 2, name: '비빔밥' },
    { id: 3, name: '불고기' },
];

// 네트워크 요청을 흉내 내는 함수입니다. 실패 버튼을 누르면 Promise를 거부합니다.
function requestMenus(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error('메뉴 데이터를 불러오지 못했습니다.'));
                return;
            }

            resolve(sampleMenus);
        }, 700);
    });
}

export default function AsyncDataLecturePage() {
    const [menus, setMenus] = useState([]);
    const [status, setStatus] = useState('loading');
    const [errorMessage, setErrorMessage] = useState('');
    const [shouldFail, setShouldFail] = useState(false);

    useEffect(() => {
        // effect callback 자체는 async로 만들지 않고, 안쪽에서 비동기 함수를 실행합니다.
        let isActive = true;

        async function loadMenus() {
            setStatus('loading');
            setErrorMessage('');

            try {
                const data = await requestMenus(shouldFail);

                // effect가 정리된 뒤에는 이전 요청 결과로 state를 갱신하지 않습니다.
                if (!isActive) return;

                setMenus(data);
                setStatus('success');
            } catch (error) {
                if (!isActive) return;

                setErrorMessage(error.message);
                setStatus('error');
            }
        }

        loadMenus();

        // 의존성 변경이나 언마운트로 effect가 정리될 때 이전 요청을 무시합니다.
        return () => {
            isActive = false;
        };
    }, [shouldFail]);

    return (
        <main>
            <h1>비동기 데이터와 요청 상태</h1>
            <p>요청 중, 성공, 실패 상태를 나누어 사용자에게 알맞은 화면을 보여줍니다.</p>

            <button
                type="button"
                onClick={() => setShouldFail((current) => !current)}
            >
                {shouldFail ? '성공 요청으로 바꾸기' : '실패 요청으로 바꾸기'}
            </button>

            <section aria-live="polite">
                <h2>메뉴 목록</h2>

                {status === 'loading' && <p role="status">메뉴를 불러오는 중입니다...</p>}
                {status === 'error' && <p role="alert">{errorMessage}</p>}
                {status === 'success' && (
                    <ul>
                        {menus.map((menu) => (
                            <li key={menu.id}>{menu.name}</li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}
