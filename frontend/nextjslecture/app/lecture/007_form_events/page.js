'use client'; // 입력 이벤트와 state를 사용하는 폼은 클라이언트 컴포넌트입니다.

import { useState } from 'react';

const initialForm = {
    name: '',
    calories: '',
};

export default function FormEventsLecturePage() {
    // input의 value를 React state로 관리하는 controlled form입니다.
    const [form, setForm] = useState(initialForm);
    const [submittedMenu, setSubmittedMenu] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;

        // 변경된 필드만 바꾸고 나머지 입력값은 기존 state에서 복사합니다.
        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        // 브라우저의 기본 폼 제출(페이지 새로고침)을 막습니다.
        event.preventDefault();

        // 제출 시점의 입력값을 화면에 보여 줄 데이터로 저장합니다.
        setSubmittedMenu({
            name: form.name.trim(),
            calories: Number(form.calories),
        });
    }

    return (
        <main>
            <h1>React 폼 입력과 이벤트 처리</h1>
            <p>입력 이벤트로 state를 갱신하고, submit 이벤트에서 폼 데이터를 처리합니다.</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="menu-name">메뉴 이름</label>
                    <input
                        id="menu-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="menu-calories">칼로리</label>
                    <input
                        id="menu-calories"
                        name="calories"
                        type="number"
                        min="0"
                        value={form.calories}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">메뉴 등록</button>
                <button type="button" onClick={() => setForm(initialForm)}>
                    입력 초기화
                </button>
            </form>

            {submittedMenu && (
                <section aria-live="polite">
                    <h2>제출된 메뉴</h2>
                    <p>이름: {submittedMenu.name}</p>
                    <p>칼로리: {submittedMenu.calories} kcal</p>
                </section>
            )}
        </main>
    );
}
