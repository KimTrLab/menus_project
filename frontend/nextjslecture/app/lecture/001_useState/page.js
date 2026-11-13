'use client'; // 1. 브라우저에서 동작하는 인터랙션이 있으므로 반드시 최상단에 작성해야 합니다!

import { useState } from 'react';

export default function Lecture01Page() {
    // useState는 컴포넌트의 상태와 상태를 갱신하는 함수를 반환합니다.
    // count의 초기값은 0이며, setter를 호출하면 React가 새 값으로 다시 렌더링합니다.
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <span>Lecture 01</span>

                <h1>
                    <span>useState</span> 완벽 정복하기 🚀
                </h1>

                <p>
                    화면에서 실시간으로 변해야 하는 데이터(상태)를 관리할 때 사용하는 리액트의 가장 핵심적인 훅입니다.
                </p>

                {/* JSX 안의 {count}는 현재 상태값으로 바뀌어 화면에 표시됩니다. */}
                <div>
                    <h2>
                        오늘 공부 완료 횟수: <span>{count}</span>회
                    </h2>

                    <div>
                        {/* 클릭할 때 현재 값에 1을 더한 상태를 요청합니다. */}
                        <button
                            onClick={() => setCount(count + 1)}
                        >
                            +1 공부 완료!
                        </button>

                        {/* 초기화 버튼은 상태를 초기값 0으로 되돌립니다. */}
                        <button
                            onClick={() => setCount(0)}
                        >
                            초기화
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}