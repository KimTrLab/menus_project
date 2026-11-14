import MenuFavoriteButton from './MenuFavoriteButton';

const menus = [
    { id: 1, name: '김치찌개', category: '한식' },
    { id: 2, name: '비빔밥', category: '한식' },
];

export default function ServerClientComponentsPage() {
    return (
        <main>
            <h1>Server Component와 Client Component</h1>
            <p>
                이 페이지는 Server Component이고, 클릭 동작이 필요한 즐겨찾기 버튼만
                Client Component로 분리했습니다.
            </p>

            <ul>
                {menus.map((menu) => (
                    <li key={menu.id}>
                        <strong>{menu.name}</strong> · {menu.category}{' '}
                        <MenuFavoriteButton menuName={menu.name} />
                    </li>
                ))}
            </ul>
        </main>
    );
}
