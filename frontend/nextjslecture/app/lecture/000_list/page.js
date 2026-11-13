'use client'; // 이 파일을 클라이언트 컴포넌트로 지정합니다. 이 예제의 목록 렌더링만으로는 필수는 아닙니다.

import React from 'react';

// app/lecture/000_list/page.js는 /lecture/000_list 경로의 페이지입니다.
export default function MapDataLecturePage() {
    // 학생 한 명을 객체 하나로 표현하고, 여러 객체를 배열에 담습니다.
    const studentScores = [
        { name: '김철수', score: 85 },
        { name: '이영희', score: 92 },
        { name: '박민수', score: 78 },
        { name: '정지영', score: 95 },
    ];

    return (
        <div>
            <div>
                <span>React Data Structure</span>

                <h1>
                    JSON <span>객체 배열</span> 데이터 렌더링하기 📊
                </h1>

                <p>
                    실무에서 가장 흔하게 사용하는 <code>Array</code>와 <code>JSON</code> 객체 구조의 데이터를 <code>map()</code> 메서드로 화면에 그립니다.
                </p>

                {/* 실습 영역: 리스트 박스 */}
                <div>
                    <div>
                        <h3>
                            학생 성적 리스트 (JSON 데이터)
                        </h3>
                        <span>
                            총 {studentScores.length}명
                        </span>
                    </div>

                    <ul>
                        {/* 배열의 각 객체를 <li> 하나로 변환해 목록을 만듭니다. */}
                        {studentScores.map(({ name, score }, index) => (
                            // name은 이 목록에서 학생을 구분하는 고유한 key로 사용합니다.
                            <li key={name}>
                                <div>
                                    {/* 화면 번호는 0부터 시작하는 index에 1을 더해 표시합니다. */}
                                    <span>
                                        {index + 1}
                                    </span>
                                    <span>👤 {name} 학생</span>
                                </div>
                                <span>{score}점</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}