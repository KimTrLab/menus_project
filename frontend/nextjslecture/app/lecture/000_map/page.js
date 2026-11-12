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
        <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold' }}>
                React Data Structure
            </span>

            <h1 style={{ fontSize: '24px', marginTop: '12px', marginBottom: '12px' }}>
                JavaScript Map 자료형 렌더링하기 🗺️
            </h1>
            <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '24px' }}>
                <code>Map</code> 객체는 직접 렌더링할 수 없으므로,
                <code>Array.from()</code>을 이용해 배열로 변환한 후 화면에 그려야 합니다.
            </p>

            {/* 실습 박스 */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '16px', color: '#1e293b' }}>
                    학생 성적 리스트 (Map 데이터)
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {/* 
            2. Map을 배열로 변환하기 
            studentScores.entries() -> [키, 값] 형태의 이터레이터 반환
            Array.from()으로 감싸서 순회 가능한 배열로 변환
          */}
                    {Array.from(studentScores.entries()).map(([name, score]) => (
                        <li
                            key={name}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '12px 16px',
                                marginBottom: '8px',
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px',
                                alignItems: 'center'
                            }}
                        >
                            <span style={{ fontWeight: 'bold', color: '#334155' }}>👤 {name} 학생</span>
                            <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{score}점</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}