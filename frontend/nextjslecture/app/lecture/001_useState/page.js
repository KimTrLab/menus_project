'use client'; // 1. 브라우저에서 동작하는 인터랙션이 있으므로 반드시 최상단에 작성해야 합니다!

import { useState } from 'react';

export default function Lecture01Page() {
    // 2. useState 선언
    // count: 현재 상태 값 (초기값은 0)
    // setCount: count 값을 변경해 주는 전용 함수
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold' }}>
                Lecture 01
            </span>

            <h1 style={{ fontSize: '28px', marginTop: '12px', marginBottom: '8px' }}>
                useState 완벽 정복하기 🚀
            </h1>
            <p style={{ color: '#666', lineHeight: '1.5' }}>
                화면에서 실시간으로 변해야 하는 데이터(상태)를 관리할 때 사용하는 리액트의 가장 핵심적인 훅입니다.
            </p>

            {/* 실습 박스 */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px', marginTop: '24px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>
                    오늘 공부 완료 횟수: <span style={{ color: '#2563eb', fontSize: '32px' }}>{count}</span>회
                </h2>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button
                        onClick={() => setCount(count + 1)}
                        style={{ padding: '10px 20px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        +1 공부 완료!
                    </button>

                    <button
                        onClick={() => setCount(0)}
                        style={{ padding: '10px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        초기화
                    </button>
                </div>
            </div>
        </div>
    );
}