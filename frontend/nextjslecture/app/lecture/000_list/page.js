'use client';

import React from 'react';

export default function MapDataLecturePage() {
    // 1. JSON 형태의 객체 배열 데이터 생성
    const studentScores = [
        { name: '김철수', score: 85 },
        { name: '이영희', score: 92 },
        { name: '박민수', score: 78 },
        { name: '정지영', score: 95 },
    ];

    return (
        <div className="main-container">
            <div className="welcome-card">
                {/* badge 클래스 적용 */}
                <span className="badge">React Data Structure</span>

                {/* main-title, highlight 클래스 적용 */}
                <h1 className="main-title">
                    JSON <span className="highlight">객체 배열</span> 데이터 렌더링하기 📊
                </h1>

                {/* sub-text 클래스 적용 */}
                <p className="sub-text">
                    실무에서 가장 흔하게 사용하는 <code>Array</code>와 <code>JSON</code> 객체 구조의 데이터를 <code>map()</code> 메서드로 화면에 그립니다.
                </p>

                {/* 실습 영역: 리스트 박스 */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.1rem' }}>
                            학생 성적 리스트 (JSON 데이터)
                        </h3>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                            총 {studentScores.length}명
                        </span>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {studentScores.map(({ name, score }, index) => (
                            <li
                                key={name}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '12px 16px',
                                    background: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    alignItems: 'center'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{
                                        display: 'inline-flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '24px',
                                        height: '24px',
                                        background: '#e0f2fe',
                                        color: '#0284c7',
                                        borderRadius: '50%',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {index + 1}
                                    </span>
                                    <span style={{ fontWeight: '600', color: '#334155' }}>👤 {name} 학생</span>
                                </div>
                                <span style={{ color: '#2563eb', fontWeight: '700' }}>{score}점</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}