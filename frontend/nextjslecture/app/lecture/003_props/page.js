'use client';

import React from 'react';
import { StudentCard } from './StudentCard'; // 자식 컴포넌트 임포트

export default function LecturePropsPage() {
    // 1. 부모가 관리하는 데이터 (JSON 객체 배열)
    const students = [
        { id: 1, name: '김철수', score: 85, subject: 'React' },
        { id: 2, name: '이영희', score: 92, subject: 'JavaScript' },
        { id: 3, name: '박민수', score: 78, subject: 'CSS' },
        { id: 4, name: '정지영', score: 95, subject: 'React' },
    ];

    return (
        <div className="main-container">
            <div className="welcome-card">
                {/* badge 클래스 적용 */}
                <span className="badge">React Core Concept</span>

                {/* main-title, highlight 클래스 적용 */}
                <h1 className="main-title">
                    <span className="highlight">Props</span>로 데이터 전달하기 📦
                </h1>

                {/* sub-text 클래스 적용 */}
                <p className="sub-text">
                    부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용하는 속성(Properties) 개념입니다.
                </p>

                {/* 실습 박스 영역 */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '12px', textAlign: 'left' }}>
                    <h3 style={{ margin: '0 0 16px 0', color: '#1e293b', fontSize: '1.1rem' }}>
                        학생 성적 정보 카드 리스트
                    </h3>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {/* 2. .map()을 돌며 자식 컴포넌트에 props로 데이터 전달 */}
                        {students.map((student) => (
                            <StudentCard
                                key={student.id}
                                name={student.name}
                                score={student.score}
                                subject={student.subject}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}