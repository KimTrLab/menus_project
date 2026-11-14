'use client';

import { useState } from 'react';

export default function MenuNamePreviewPage() {
    // #1: 입력한 메뉴 이름을 화면에 미리 보여 줍니다.
    const [name, setName] = useState('');

    // 메뉴로 응용해 보자 #2: 입력한 이름을 메뉴 배열에 저장합니다.
    const [menus, setMenus] = useState([]);

    // #3: 메뉴 이름과 고유 번호를 가진 객체를 목록에 저장합니다.
    const [newMenuName, setNewMenuName] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [nextMenuId, setNextMenuId] = useState(1);

    // #2: 현재 배열에 새 메뉴 이름을 추가합니다.
    function handleAddMenu() {
        setMenus([...menus, name]);
        setName('');
    }

    function handleAddMenuItem() {
        setMenuItems([
            ...menuItems,
            { id: nextMenuId, name: newMenuName },
        ]);
        setNextMenuId(nextMenuId + 1);
        setNewMenuName('');
    }

    function handleDeleteMenuItem(id) {
        setMenuItems(menuItems.filter((menu) => menu.id !== id));
    }

    return (
        <main>
            {/* #1: 메뉴 이름 입력과 미리보기 */}
            <h1>메뉴 이름 미리보기</h1>
            <label htmlFor="menu-name">메뉴 이름</label>
            <input
                id="menu-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="메뉴 이름을 입력하세요"
            />
            <p>메뉴 카드 미리보기: {name || '메뉴 이름'}</p>
            <p>입력 중인 글자 수: {name.length}</p>

            {/* #2: 버튼을 누르면 메뉴 배열에 추가하고 목록에 보여 줍니다. */}
            <button type="button" onClick={handleAddMenu} disabled={!name}>
                메뉴 목록에 추가
            </button>
            <h2>추가한 메뉴 목록 ({menus.length})</h2>
            <ul>
                {menus.map((menu, index) => (
                    <li key={index}>{menu}</li>
                ))}
            </ul>

            {/* #3: 객체 배열에 메뉴를 추가하고, 원하는 항목을 삭제합니다. */}
            <section>
                <h2>#3 메뉴 추가하고 삭제하기</h2>
                <label htmlFor="new-menu">메뉴 이름</label>
                <input
                    id="new-menu"
                    value={newMenuName}
                    onChange={(event) => setNewMenuName(event.target.value)}
                    placeholder="새 메뉴 이름"
                />
                <button
                    type="button"
                    onClick={handleAddMenuItem}
                    disabled={!newMenuName}
                >
                    메뉴 추가
                </button>
                <ul>
                    {menuItems.map((menu) => (
                        <li key={menu.id}>
                            {menu.name}{' '}
                            <button
                                type="button"
                                onClick={() => handleDeleteMenuItem(menu.id)}
                            >
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}