'use client'; // 입력 이벤트와 state를 사용하는 폼은 클라이언트 컴포넌트입니다.

import { useState } from 'react';

const initialForm = {
    name: '',
    price: '',
};

export default function FormEventsLecturePage() {
    const [form, setForm] = useState(initialForm);
    const [menus, setMenus] = useState([
        { id: 1, name: '김치찌개', price: 9000 },
        { id: 2, name: '비빔밥', price: 8500 },
    ]);
    // 기능개선: 잘못된 입력을 화면에 안내합니다.
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
        // 기능개선: 다시 입력하면 이전 오류 안내를 지웁니다.
        setErrorMessage('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        const name = form.name.trim();

        // 기능개선: 공백만 입력한 메뉴 이름은 등록하지 않습니다.
        if (!name) {
            setErrorMessage('메뉴 이름을 입력해 주세요.');
            return;
        }

        // 기능개선: 가격이 비어 있으면 등록하지 않고 안내합니다.
        if (!form.price) {
            setErrorMessage('가격을 입력해 주세요.');
            return;
        }

        setErrorMessage('');

        setMenus((currentMenus) => [
            ...currentMenus,
            {
                id: Math.max(...currentMenus.map((menu) => menu.id), 0) + 1,
                name,
                price: Number(form.price),
            },
        ]);
        setForm(initialForm);
    }

    return (
        <main>
            <h1>메뉴 등록 폼</h1>
            <p>입력값을 state로 관리하고 제출하면 메뉴 목록을 갱신합니다.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="menu-name">메뉴 이름</label>
                <input
                    id="menu-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="menu-price">가격</label>
                <input
                    id="menu-price"
                    name="price"
                    type="number"
                    min="0"
                    value={form.price}
                    onChange={handleChange}
                    required
                />

                <button type="submit">메뉴 추가</button>
                {/* 기능개선: 입력 초기화 시 오류 안내도 함께 지웁니다. */}
                <button
                    type="button"
                    onClick={() => {
                        setForm(initialForm);
                        setErrorMessage('');
                    }}
                >
                    입력 초기화
                </button>
            </form>

            {/* 기능개선: 오류가 있을 때 이유를 화면에 표시합니다. */}
            {errorMessage && <p role="alert">{errorMessage}</p>}

            <section>
                <h2>메뉴 목록 ({menus.length})</h2>
                <ul>
                    {menus.map((menu) => (
                        <li key={menu.id}>
                            {menu.name} · {menu.price.toLocaleString()}원
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
