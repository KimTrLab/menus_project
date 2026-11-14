export default function MenuListLecturePage() {
    const menus = [
        { id: 1, name: '김치찌개', category: '한식', price: 9000 },
        { id: 2, name: '비빔밥', category: '한식', price: 8500 },
        { id: 3, name: '파스타', category: '양식', price: 12000 },
    ];

    return (
        <main>
            <h1>메뉴 목록</h1>
            <p>객체 배열의 각 메뉴를 map()으로 화면에 렌더링합니다.</p>
            <p>총 {menus.length}개 메뉴</p>
            <ul>
                {menus.map((menu) => (
                    <li key={menu.id}>
                        <strong>{menu.name}</strong>
                        <span> · {menu.category} · {menu.price.toLocaleString()}원</span>
                    </li>
                ))}
            </ul>
        </main>
    );
}