import Link from 'next/link';
import { menus } from './menuData';

export default function DynamicRoutingExamplePage() {
    return (
        <main>
            <h1>동적 라우팅으로 메뉴 상세 페이지 만들기</h1>
            <p>
                메뉴마다 페이지 파일을 따로 만들지 않고, URL의 메뉴 ID에 맞는 데이터로 같은 상세 화면을 채웁니다.
            </p>

            <ul>
                {menus.map((menu) => (
                    <li key={menu.id}>
                        <Link href={`/lecture/014_router2/menus/${menu.id}`}>
                            {menu.name} 상세 보기
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
