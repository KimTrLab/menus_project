'use client'; // 이 파일을 클라이언트 컴포넌트로 지정합니다. 이 예제의 목록 렌더링만으로는 필수는 아닙니다.

import React from 'react';

// app/lecture/000_map/page.js는 /lecture/000_map 경로의 페이지입니다.
export default function MapDataLecturePage() {
    // Map은 키와 값의 쌍을 저장합니다. 여기서는 학생 이름을 키, 점수를 값으로 사용합니다.
    const studentScores = new Map([
        ['김철수', 85],
        ['이영희', 92],
        ['박민수', 78],
        ['정지영', 95],
    ]);

    return (
        <div>
            <div>
                <span>React Data Structure</span>

                <h1>
                    JavaScript <span>Map</span> 자료형 렌더링하기 🗺️
                </h1>

                <p>
                    <code>Map</code> 객체는 직접 렌더링할 수 없으므로,{' '}
                    <code>Array.from()</code>을 이용해 배열로 변환한 후 화면에 그려야 합니다.
                </p>

                {/* 실습 영역 */}
                <div>
                    <h3>
                        학생 성적 리스트 (Map 데이터)
                    </h3>

                    <ul>
                        {/* entries()의 [키, 값] 쌍을 배열로 바꾼 뒤 JSX 목록으로 렌더링합니다. */}
                        {Array.from(studentScores.entries()).map(([name, score]) => (
                            // 학생 이름으로 각 목록 항목을 구분합니다.
                            <li key={name}>
                                <span>👤 {name} 학생</span>
                                <span>{score}점</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}