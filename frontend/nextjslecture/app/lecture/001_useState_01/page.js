'use client';

import { useState } from 'react';

export default function UseStateLecture() {
    // 기본형 상태 선언 (초기값 0)
    const [count, setCount] = useState(0);

    // boolean 상태 선언 (토글용)
    const [isOn, setIsOn] = useState(false);

    // 객체/입력값 상태 선언
    const [text, setText] = useState('');

    return (
        <div className="main-container">
            <div className="welcome-card">
                <span className="badge">React Hooks</span>
                <h1 className="main-title">
                    <span className="highlight">useState</span> 완벽 정복하기
                </h1>
                <p className="sub-text">
                    컴포넌트의 기억 저장소로, 값이 바뀌면 화면을 자동으로 리렌더링합니다.
                </p>

                {/* 1. 숫자 카운트 실습 */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '12px', marginBottom: '16px', textAlign: 'left' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>1. 숫자 상태 관리: {count}</h3>
                    <button className="start-button" onClick={() => setCount(count + 1)}>+1 증가</button>
                </div>

                {/* 2. 토글(Boolean) 실습 */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '12px', marginBottom: '16px', textAlign: 'left' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>2. 토글 상태: {isOn ? '🟢 켜짐' : '🔴 꺼짐'}</h3>
                    <button className="start-button" onClick={() => setIsOn(!isOn)}>상태 반전</button>
                </div>

                {/* 3. 입력값(Input) 실습 */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '12px', textAlign: 'left' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>3. 입력값 실습: {text || '입력해 주세요'}</h3>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="글자를 입력하세요"
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                    />
                </div>
            </div>
        </div>
    );
}