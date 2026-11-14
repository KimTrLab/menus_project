import Link from 'next/link';

export default function RouterLecturePage() {
    return (
        <main>
            <h1>Next.js App Router</h1>
            <p>
                메뉴 관리 화면을 페이지로 나누며 app 폴더와 URL의 관계를 확인합니다.
            </p>

            <h2>정적 경로</h2>
            <ul>
                <li>
                    <Link href="/lecture/013_router/about">소개 페이지</Link>
                </li>
                <li>
                    <Link href="/lecture/013_router/menus">메뉴 목록</Link>
                </li>
            </ul>

            <h2>동적 경로</h2>
            <p>
                menus/[id]/page.js의 [id]는 URL에 따라 달라지는 메뉴 ID입니다.
            </p>
            <ul>
                <li>
                    <Link href="/lecture/013_router/menus/1">김치찌개</Link>
                </li>
                <li>
                    <Link href="/lecture/013_router/menus/2">비빔밥</Link>
                </li>
            </ul>
        </main>
    );
}
