'use client';

import { useState } from 'react';

const initialMenus = [
    { id: 1, name: '김치찌개', isFavorite: false },
    { id: 2, name: '비빔밥', isFavorite: true },
];

function MenuItem({ menu, onEdit, onToggleFavorite, onDelete }) {
    return (
        <li>
            <span>
                {menu.name} {menu.isFavorite && '(즐겨찾기)'}
            </span>
            <button type="button" onClick={() => onEdit(menu)}>
                수정
            </button>
            <button type="button" onClick={() => onToggleFavorite(menu.id)}>
                즐겨찾기 전환
            </button>
            <button type="button" onClick={() => onDelete(menu.id)}>
                삭제
            </button>
        </li>
    );
}

function MenuList({ menus, onEdit, onToggleFavorite, onDelete }) {
    if (menus.length === 0) {
        return <p>등록된 메뉴가 없습니다. 새 메뉴를 추가해 보세요.</p>;
    }

    return (
        <ul>
            {menus.map((menu) => (
                <MenuItem
                    key={menu.id}
                    menu={menu}
                    onEdit={onEdit}
                    onToggleFavorite={onToggleFavorite}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default function MenuCRUDIntegratedExample() {
    const [menus, setMenus] = useState(initialMenus);
    const [name, setName] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [nextId, setNextId] = useState(3);
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const trimmedName = name.trim();

        if (!trimmedName) {
            setErrorMessage('메뉴 이름을 입력해 주세요.');
            return;
        }

        if (editingId === null) {
            setMenus([
                ...menus,
                { id: nextId, name: trimmedName, isFavorite: false },
            ]);
            setNextId(nextId + 1);
        } else {
            setMenus(
                menus.map((menu) =>
                    menu.id === editingId
                        ? { ...menu, name: trimmedName }
                        : menu
                )
            );
        }

        setName('');
        setEditingId(null);
        setErrorMessage('');
    }

    function handleEdit(menu) {
        setName(menu.name);
        setEditingId(menu.id);
        setErrorMessage('');
    }

    function handleToggleFavorite(id) {
        setMenus(
            menus.map((menu) =>
                menu.id === id
                    ? { ...menu, isFavorite: !menu.isFavorite }
                    : menu
            )
        );
    }

    function handleDelete(id) {
        setMenus(menus.filter((menu) => menu.id !== id));

        if (editingId === id) {
            setName('');
            setEditingId(null);
        }
    }

    function handleCancelEdit() {
        setName('');
        setEditingId(null);
        setErrorMessage('');
    }

    return (
        <main>
            <h1>메뉴 관리 종합예제</h1>
            <p>메뉴를 등록하고, 수정하고, 즐겨찾기하거나 삭제해 보세요.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="menu-name">메뉴 이름</label>
                <input
                    id="menu-name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                        setErrorMessage('');
                    }}
                    placeholder="예: 김치찌개"
                    required
                />
                <button type="submit">
                    {editingId === null ? '메뉴 추가' : '수정 저장'}
                </button>
                {editingId !== null && (
                    <button type="button" onClick={handleCancelEdit}>
                        수정 취소
                    </button>
                )}
            </form>

            {errorMessage && <p role="alert">{errorMessage}</p>}

            <section>
                <h2>메뉴 목록 ({menus.length})</h2>
                <MenuList
                    menus={menus}
                    onEdit={handleEdit}
                    onToggleFavorite={handleToggleFavorite}
                    onDelete={handleDelete}
                />
            </section>
        </main>
    );
}
