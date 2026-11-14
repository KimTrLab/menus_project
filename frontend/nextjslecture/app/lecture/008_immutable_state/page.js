'use client'; // state 배열을 변경하는 사용자 이벤트를 처리합니다.

import { useState } from 'react';

export default function ImmutableStateLecturePage() {
    const [menus, setMenus] = useState([
        { id: 1, name: '김치찌개', isFavorite: false },
        { id: 2, name: '비빔밥', isFavorite: true },
    ]);
    const [nextId, setNextId] = useState(3);
    const [name, setName] = useState('');

    function handleAdd(event) {
        event.preventDefault();
        const trimmedName = name.trim();

        if (!trimmedName) return;

        setMenus((currentMenus) => [
            ...currentMenus,
            { id: nextId, name: trimmedName, isFavorite: false },
        ]);
        setNextId((currentId) => currentId + 1);
        setName('');
    }

    function handleToggleFavorite(id) {
        setMenus((currentMenus) =>
            currentMenus.map((menu) =>
                menu.id === id
                    ? { ...menu, isFavorite: !menu.isFavorite }
                    : menu
            )
        );
    }

    function handleDelete(id) {
        setMenus((currentMenus) =>
            currentMenus.filter((menu) => menu.id !== id)
        );
    }

    return (
        <main>
            <h1>메뉴 목록 state를 불변 업데이트하기</h1>
            <p>메뉴를 추가·즐겨찾기·삭제하며 배열과 객체를 새 값으로 갱신합니다.</p>

            <form onSubmit={handleAdd}>
                <label htmlFor="menu-name">메뉴 이름</label>
                <input
                    id="menu-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <button type="submit">추가</button>
            </form>

            <ul>
                {menus.map((menu) => (
                    <li key={menu.id}>
                        <span>{menu.name} {menu.isFavorite && '(즐겨찾기)'}</span>
                        <button
                            type="button"
                            onClick={() => handleToggleFavorite(menu.id)}
                        >
                            즐겨찾기 전환
                        </button>
                        <button type="button" onClick={() => handleDelete(menu.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
