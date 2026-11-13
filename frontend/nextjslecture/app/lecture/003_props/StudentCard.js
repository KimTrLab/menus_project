'use client'; // 부모 페이지에서 사용되는 학생 카드 컴포넌트입니다.

import React from 'react';

// 부모가 전달한 props에서 이름, 점수, 과목을 구조 분해해 사용합니다.
export function StudentCard({ name, score, subject }) {
    return (
        // 학생 한 명의 데이터를 목록 항목 하나로 표시합니다.
        <li>
            <div>
                <span>👤 {name}</span>
                <span>({subject})</span>
            </div>
            <span>{score}점</span>
        </li>
    );
}