'use client'; // state와 폼 이벤트를 사용하는 컴포넌트입니다.

import { useState } from 'react';

// 자식 컴포넌트는 입력값을 관리하고, 등록할 때 부모가 전달한 함수를 호출합니다.
function MenuNameForm({ onAdd }) {
    const [name, setName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const trimmedName = name.trim();

        if (!trimmedName) return;

        // 자식이 직접 부모의 목록 state를 바꾸지 않고, callback으로 값을 전달합니다.
        onAdd(trimmedName);
        setName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-menu-name">새 메뉴</label>
            <input
                id="new-menu-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button type="submit">추가</button>
        </form>
    );
}

export default function CallbackPropsLecturePage() {
    // 여러 자식 메뉴 항목이 함께 사용하는 목록은 부모가 소유합니다.
    const [menus, setMenus] = useState([
        { id: 1, name: '김치찌개' },
        { id: 2, name: '비빔밥' },
    ]);
    const [nextId, setNextId] = useState(3);

    function handleAddMenu(name) {
        setMenus((currentMenus) => [
            ...currentMenus,
            { id: nextId, name },
        ]);
        setNextId((currentId) => currentId + 1);
    }

    return (
        <main>
            <h1>Callback Props와 부모·자식 데이터 흐름</h1>
            <p>부모는 state와 변경 함수를 소유하고, 자식은 callback을 호출해 변경을 요청합니다.</p>

            {/* 함수를 props로 전달해 자식의 제출 동작을 부모 state와 연결합니다. */}
            <MenuNameForm onAdd={handleAddMenu} />

            <h2>메뉴 목록</h2>
            <ul>
                {menus.map((menu) => (
                    <li key={menu.id}>{menu.name}</li>
                ))}
            </ul>
        </main>
    );
}
