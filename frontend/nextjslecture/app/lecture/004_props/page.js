import { MenuCard } from './MenuCard';

export default function MenuPropsLecturePage() {
    const menus = [
        { id: 1, name: '김치찌개', category: '한식', price: 9000 },
        { id: 2, name: '비빔밥', category: '한식', price: 8500 },
        { id: 3, name: '파스타', category: '양식', price: 12000 },
    ];

    return (
        <main>
            <h1>메뉴 카드에 Props 전달하기</h1>
            <p>부모가 메뉴 데이터를 관리하고, 자식 카드가 전달받은 값을 표시합니다.</p>
            <ul>
                {menus.map((menu) => (
                    <MenuCard
                        key={menu.id}
                        name={menu.name}
                        category={menu.category}
                        price={menu.price}
                    />
                ))}
            </ul>
        </main>
    );
}