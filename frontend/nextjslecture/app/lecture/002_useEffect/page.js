'use client';

import { useState, useEffect } from 'react';

export default function UseEffectLecture() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // 📌 유형 1: 마운트될 때 딱 1번만 실행 (의존성 배열이 빈 배열 `[]`)
    // 주로 API 호출, 초기 데이터 로드, 이벤트 리스너 등록에 사용합니다.
    useEffect(() => {
        console.log('컴포넌트가 처음 화면에 나타났을 때(Mount) 딱 1번 실행!');
    }, []);

    // 📌 유형 2: 특정 값이 바뀔 때마다 실행 (의존성 배열에 `count` 지정)
    // count 값이 변할 때마다 코드가 실행됩니다.
    useEffect(() => {
        console.log(`count 값이 ${count}(으)로 변경되었습니다!`);
    }, [count]);

    // 📌 유형 3: Cleanup (뒷정리) 함수 사용
    // 타이머, 구독, 이벤트 리스너 등을 해제할 때 메모리 누수를 막기 위해 사용합니다.
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 작동 중...');
        }, 1000);

        // cleanup return 함수: 컴포넌트가 사라질 때(Unmount) 실행됨
        return () => {
            clearInterval(timer);
            console.log('타이머 정리 완료!(Cleanup)');
        };
    }, []);

    return (
        <div className="main-container">
            <div className="welcome-card">
                <span className="badge">React Hooks</span>
                <h1 className="main-title">
                    <span className="highlight">useEffect</span> 3가지 활용법
                </h1>
                <p className="sub-text">
                    렌더링 이후에 실행되는 타이밍을 제어하는 훅입니다. F12 개발자 도구의 Console 창을 확인해보세요!
                </p>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px', textAlign: 'left' }}>
                    <div style={{ marginBottom: '16px' }}>
                        <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>Count 제어: {count}</h3>
                        <button className="start-button" onClick={() => setCount(count + 1)}>Count 올리기</button>
                    </div>

                    <div>
                        <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>이름 입력</h3>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="이름 입력"
                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}