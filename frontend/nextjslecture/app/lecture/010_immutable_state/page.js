'use client'; // state 배열을 변경하는 사용자 이벤트를 처리합니다.

import { useState } from 'react';

export default function ImmutableStateLecturePage() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'React 복습하기', done: false },
        { id: 2, title: '컴포넌트 정리하기', done: true },
    ]);
    const [nextId, setNextId] = useState(3);
    const [title, setTitle] = useState('');

    function handleAdd(event) {
        event.preventDefault();
        const trimmedTitle = title.trim();

        if (!trimmedTitle) return;

        // 기존 배열을 직접 수정하지 않고 새 배열에 새 항목을 추가합니다.
        setTasks((currentTasks) => [
            ...currentTasks,
            { id: nextId, title: trimmedTitle, done: false },
        ]);
        setNextId((currentId) => currentId + 1);
        setTitle('');
    }

    function handleToggle(id) {
        // map()으로 새 배열을 만들고, 변경 대상 객체도 새 객체로 복사합니다.
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    }

    function handleDelete(id) {
        // filter()는 삭제 대상을 제외한 새 배열을 반환합니다.
        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.id !== id)
        );
    }

    return (
        <main>
            <h1>배열 state의 불변 업데이트</h1>
            <p>배열이나 객체를 직접 수정하지 않고 새 값으로 교체합니다.</p>

            <form onSubmit={handleAdd}>
                <label htmlFor="task-title">할 일</label>
                <input
                    id="task-title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <button type="submit">추가</button>
            </form>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>
                            {task.done ? '완료' : '진행 중'}: {task.title}
                        </span>
                        <button type="button" onClick={() => handleToggle(task.id)}>
                            상태 변경
                        </button>
                        <button type="button" onClick={() => handleDelete(task.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
