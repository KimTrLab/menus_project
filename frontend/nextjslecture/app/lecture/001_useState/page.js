'use client'; // 1. 브라우저에서 동작하는 인터랙션이 있으므로 반드시 최상단에 작성해야 합니다!

import { useState } from 'react';

export default function Lecture01Page() {
    // 2. useState 선언
    // count: 현재 상태 값 (초기값은 0)
    // setCount: count 값을 변경해 주는 전용 함수
    const [count, setCount] = useState(0);

    return (
        <div className="main-container">
            <div className="welcome-card">
                {/* badge 클래스 적용 */}
                <span className="badge">Lecture 01</span>

                {/* main-title, highlight 클래스 적용 */}
                <h1 className="main-title">
                    <span className="highlight">useState</span> 완벽 정복하기 🚀
                </h1>

                {/* sub-text 클래스 적용 */}
                <p className="sub-text">
                    화면에서 실시간으로 변해야 하는 데이터(상태)를 관리할 때 사용하는 리액트의 가장 핵심적인 훅입니다.
                </p>

                {/* 실습 박스 영역 */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#1e293b' }}>
                        오늘 공부 완료 횟수: <span style={{ color: '#2563eb', fontSize: '2rem', fontWeight: '700' }}>{count}</span>회
                    </h2>

                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        {/* start-button 클래스 재사용 및 색상 커스텀 */}
                        <button
                            onClick={() => setCount(count + 1)}
                            className="start-button"
                            style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
                        >
                            +1 공부 완료!
                        </button>

                        <button
                            onClick={() => setCount(0)}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: '#ef4444',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                transition: 'background-color 0.2s ease'
                            }}
                        >
                            초기화
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}