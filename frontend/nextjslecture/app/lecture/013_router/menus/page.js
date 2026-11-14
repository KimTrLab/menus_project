import Link from 'next/link';

const menus = [
    { id: 1, name: '김치찌개' },
    { id: 2, name: '비빔밥' },
];

export default function MenusPage() {
    return (
        <main>
            <h1>메뉴 목록</h1>
            <ul>
                {menus.map((menu) => (
                    <li key={menu.id}>
                        <Link href={`/lecture/013_router/menus/${menu.id}`}>
                            {menu.name} 상세 보기
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/lecture/013_router">라우팅 예제로 돌아가기</Link>
        </main>
    );
}
