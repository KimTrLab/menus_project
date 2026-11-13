'use client';

import React from 'react';
import { StudentCard } from './StudentCard'; // 학생 한 명을 표시할 자식 컴포넌트를 가져옵니다.

export default function LecturePropsPage() {
    // 부모 컴포넌트가 관리하는 학생 데이터입니다. 각 항목은 고유한 id를 가집니다.
    const students = [
        { id: 1, name: '김철수', score: 85, subject: 'React' },
        { id: 2, name: '이영희', score: 92, subject: 'JavaScript' },
        { id: 3, name: '박민수', score: 78, subject: 'CSS' },
        { id: 4, name: '정지영', score: 95, subject: 'React' },
    ];

    return (
        <div>
            <div>
                <span>React Core Concept</span>

                <h1>
                    <span>Props</span>로 데이터 전달하기 📦
                </h1>

                <p>
                    부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용하는 속성(Properties) 개념입니다.
                </p>

                {/* 실습 박스 영역 */}
                <div>
                    <h3>
                        학생 성적 정보 카드 리스트
                    </h3>

                    <ul>
                        {/* 배열을 순회해 학생마다 자식 컴포넌트를 하나씩 만듭니다. */}
                        {/* key는 목록 항목을 구분하며 일반 props로 전달되지는 않습니다. */}
                        {/* name, score, subject 속성이 StudentCard의 props가 됩니다. */}
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