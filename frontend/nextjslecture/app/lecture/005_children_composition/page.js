function MenuPanel({ title, children }) {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default function ChildrenCompositionLecturePage() {
    const panels = [
        {
            id: 1,
            title: '한식 메뉴',
            menus: [
                { id: 1, name: '김치찌개', category: '한식', price: 9000 },
                { id: 2, name: '비빔밥', category: '한식', price: 8500 },
            ],
        },
        {
            id: 2,
            title: '양식 메뉴',
            menus: [
                { id: 3, name: '파스타', category: '양식', price: 12000 },
                { id: 4, name: '스테이크', category: '양식', price: 18000 },
            ],
        },
    ];

    return (
        <main>
            <h1>메뉴 화면을 컴포넌트로 합성하기</h1>
            <p>공통 메뉴 패널을 만들고, children으로 각 패널의 내용을 채웁니다.</p>

            <MenuPanel title="오늘의 추천 메뉴">
                {/* MenuPanel 컴포넌트의 children으로 들어가는 내용입니다.*/}
                <article>
                    <h3>김치찌개</h3>
                    <p>한식 · 9,000원</p>
                </article>
            </MenuPanel>

            <MenuPanel title="최근 추가한 메뉴">
                {/* MenuPanel 컴포넌트의 children으로 들어가는 내용입니다.*/}
                <ul>
                    <li>비빔밥</li>
                    <li>파스타</li>
                </ul>
            </MenuPanel>

            <h2>데이터로 MenuPanel 반복하기</h2>
            <p>객체 배열의 각 항목으로 MenuPanel과 그 안의 메뉴 목록을 만듭니다.</p>
            {panels.map((panel) => (
                <MenuPanel key={panel.id} title={panel.title}>
                    <ul>
                        {panel.menus.map((menu) => (
                            <li key={menu.id}>
                                <strong>{menu.name}</strong>
                                <span>
                                    {' '}
                                    · {menu.category} · {menu.price.toLocaleString()}원
                                </span>
                            </li>
                        ))}
                    </ul>
                </MenuPanel>
            ))}
        </main>
    );
}
