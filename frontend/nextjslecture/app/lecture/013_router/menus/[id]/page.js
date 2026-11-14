import Link from 'next/link';
import { notFound } from 'next/navigation';

const menus = {
    '1': { name: '김치찌개', category: '한식', price: 9000 },
    '2': { name: '비빔밥', category: '한식', price: 8500 },
};

export default async function MenuDetailPage({ params }) {
    const { id } = await params;
    const menu = menus[id];

    if (!menu) {
        notFound();
    }

    return (
        <main>
            <h1>{menu.name}</h1>
            <p>분류: {menu.category}</p>
            <p>가격: {menu.price.toLocaleString()}원</p>
            <p>동적 경로에서 전달된 메뉴 ID: {id}</p>
            <Link href="/lecture/013_router/menus">메뉴 목록으로 돌아가기</Link>
        </main>
    );
}
