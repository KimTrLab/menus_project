'use client'; // state와 폼 이벤트를 사용하는 컴포넌트입니다.

import { useState } from 'react';

function MenuForm({ onAdd }) {
    const [name, setName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const trimmedName = name.trim();

        if (!trimmedName) return;

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

function MenuItem({ menu, onToggleFavorite, onDelete }) {
    return (
        <li>
            <span>
                {menu.name} {menu.isFavorite && '(즐겨찾기)'}
            </span>
            <button type="button" onClick={() => onToggleFavorite(menu.id)}>
                즐겨찾기 전환
            </button>
            <button type="button" onClick={() => onDelete(menu.id)}>
                삭제
            </button>
        </li>
    );
}

export default function CallbackPropsLecturePage() {
    const [menus, setMenus] = useState([
        { id: 1, name: '김치찌개', isFavorite: false },
        { id: 2, name: '비빔밥', isFavorite: true },
    ]);
    const [nextId, setNextId] = useState(3);

    function handleAddMenu(name) {
        setMenus((currentMenus) => [
            ...currentMenus,
            { id: nextId, name, isFavorite: false },
        ]);
        setNextId((currentId) => currentId + 1);
    }

    function handleToggleFavorite(id) {
        setMenus((currentMenus) =>
            currentMenus.map((menu) =>
                menu.id === id ? { ...menu, isFavorite: !menu.isFavorite } : menu
            )
        );
    }

    function handleDelete(id) {
        setMenus((currentMenus) => currentMenus.filter((menu) => menu.id !== id));
    }

    return (
        <main>
            <h1>Callback Props와 부모·자식 데이터 흐름</h1>
            <p>부모가 목록 state를 소유하고, 자식은 callback으로 변경을 요청합니다.</p>

            <MenuForm onAdd={handleAddMenu} />

            <h2>메뉴 목록</h2>
            <ul>
                {menus.map((menu) => (
                    <MenuItem
                        key={menu.id}
                        menu={menu}
                        onToggleFavorite={handleToggleFavorite}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </main>
    );
}
