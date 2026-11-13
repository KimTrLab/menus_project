'use client'; // useState와 useEffect는 클라이언트 컴포넌트에서 사용합니다.

import { useState, useEffect } from 'react';

export default function UseEffectLecture() {
    // 버튼과 입력창에서 변경할 값을 각각 state로 관리합니다.
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // 빈 의존성 배열은 마운트 후 effect를 실행하고, 의존값 변경으로는 다시 실행하지 않습니다.
    // 개발 모드의 Strict Mode에서는 effect와 정리 과정이 확인 목적으로 추가 실행될 수 있습니다.
    useEffect(() => {
        console.log('컴포넌트가 처음 화면에 나타났을 때(Mount) 딱 1번 실행!');
    }, []);

    // 의존성 배열에 count를 지정해, 처음 마운트된 뒤 count가 바뀔 때마다 실행합니다.
    useEffect(() => {
        console.log(`count 값이 ${count}(으)로 변경되었습니다!`);
    }, [count]);

    // 타이머처럼 컴포넌트 바깥과 연결되는 작업은 effect에서 시작하고 정리합니다.
    useEffect(() => {
        // 1초마다 로그를 출력하는 타이머를 시작합니다.
        const timer = setInterval(() => {
            console.log('타이머 작동 중...');
        }, 1000);

        // effect가 정리될 때 타이머를 해제해 작업이 계속 남지 않게 합니다.
        return () => {
            clearInterval(timer);
            console.log('타이머 정리 완료!(Cleanup)');
        };
    }, []);

    return (
        <div>
            <div>
                <span>React Hooks</span>
                <h1>
                    <span>useEffect</span> 3가지 활용법
                </h1>
                <p>
                    렌더링 이후에 실행되는 타이밍을 제어하는 훅입니다. F12 개발자 도구의 Console 창을 확인해보세요!
                </p>

                {/* 버튼으로 count를 변경해 의존성 배열이 있는 effect의 로그를 확인합니다. */}
                <div>
                    <div>
                        <h3>Count 제어: {count}</h3>
                        <button onClick={() => setCount(count + 1)}>Count 올리기</button>
                    </div>

                    <div>
                        <h3>이름 입력</h3>
                        {/* 이름 입력값은 state와 연결되지만 현재 effect의 의존성에는 포함하지 않았습니다. */}
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="이름 입력"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}