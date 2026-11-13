'use client'; // Hook과 입력 이벤트를 사용하는 컴포넌트는 클라이언트 컴포넌트여야 합니다.

import { useState } from 'react';

export default function UseStateLecture() {
    // 숫자 상태: 증가 버튼으로 값을 바꿉니다.
    const [count, setCount] = useState(0);

    // 불리언 상태: 켜짐/꺼짐처럼 두 상태를 표현합니다.
    const [isOn, setIsOn] = useState(false);

    // 문자열 상태: 아래 입력창에서 사용자가 입력한 값을 저장합니다.
    const [text, setText] = useState('');

    return (
        <div>
            <div>
                <span>React Hooks</span>
                <h1>
                    <span>useState</span> 완벽 정복하기
                </h1>
                <p>
                    컴포넌트의 기억 저장소로, 값이 바뀌면 화면을 자동으로 리렌더링합니다.
                </p>

                {/* 1. 숫자 카운트 실습 */}
                <div>
                    <h3>1. 숫자 상태 관리: {count}</h3>
                    {/* setter로 숫자를 바꾸면 화면의 count도 갱신됩니다. */}
                    <button onClick={() => setCount(count + 1)}>+1 증가</button>
                </div>

                {/* 2. 토글(Boolean) 실습 */}
                <div>
                    <h3>2. 토글 상태: {isOn ? '🟢 켜짐' : '🔴 꺼짐'}</h3>
                    {/* 현재 불리언 값의 반대값으로 상태를 전환합니다. */}
                    <button onClick={() => setIsOn(!isOn)}>상태 반전</button>
                </div>

                {/* 3. 입력값(Input) 실습 */}
                <div>
                    <h3>3. 입력값 실습: {text || '입력해 주세요'}</h3>
                    {/* value와 onChange를 연결해 React state가 입력값을 관리하는 controlled input입니다. */}
                    {/* 이벤트 객체의 target.value에서 사용자가 입력한 문자열을 가져와 state를 갱신합니다. */}
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="글자를 입력하세요"
                    />
                </div>
            </div>
        </div>
    );
}