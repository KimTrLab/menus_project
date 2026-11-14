import Link from 'next/link';
import { notFound } from 'next/navigation';
import { menus } from '../../menuData';

export default async function MenuDetailPage({ params }) {
    const { menuId } = await params;
    const menu = menus.find((item) => item.id === menuId);

    if (!menu) {
        notFound();
    }

    return (
        <main>
            <h1>{menu.name}</h1>
            <p>{menu.description}</p>
            <p>분류: {menu.category}</p>
            <p>가격: {menu.price.toLocaleString()}원</p>
            <p>메뉴 ID: {menu.id}</p>
            <Link href="/lecture/014_router2">메뉴 목록으로 돌아가기</Link>
        </main>
    );
}
