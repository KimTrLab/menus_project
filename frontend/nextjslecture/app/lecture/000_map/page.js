'use client';

import React from 'react';

export default function MapDataLecturePage() {
    // 1. 자바스크립트 Map 자료형 생성 (키-값 쌍 데이터)
    const studentScores = new Map([
        ['김철수', 85],
        ['이영희', 92],
        ['박민수', 78],
        ['정지영', 95],
    ]);

    return (
        <div className="main-container">
            <div className="welcome-card">
                {/* badge 클래스 적용 */}
                <span className="badge">React Data Structure</span>

                {/* main-title, highlight 클래스 적용 */}
                <h1 className="main-title">
                    JavaScript <span className="highlight">Map</span> 자료형 렌더링하기 🗺️
                </h1>

                {/* sub-text 클래스 적용 */}
                <p className="sub-text">
                    <code>Map</code> 객체는 직접 렌더링할 수 없으므로,{' '}
                    <code>Array.from()</code>을 이용해 배열로 변환한 후 화면에 그려야 합니다.
                </p>

                {/* 실습 영역 (인라인 스타일로 주신 CSS 무드와 어울리도록 정돈) */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px', textAlign: 'left' }}>
                    <h3 style={{ marginTop: 0, marginBottom: '16px', color: '#1e293b', fontSize: '1.1rem' }}>
                        학생 성적 리스트 (Map 데이터)
                    </h3>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {Array.from(studentScores.entries()).map(([name, score]) => (
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
                                <span style={{ fontWeight: '600', color: '#334155' }}>👤 {name} 학생</span>
                                <span style={{ color: '#2563eb', fontWeight: '700' }}>{score}점</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}