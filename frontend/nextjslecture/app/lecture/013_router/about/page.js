import Link from 'next/link';

// app/lecture/013_router/about/page.js는 /lecture/013_router/about 경로에 해당합니다.
export default function AboutPage() {
    return (
        <main>
            <h1>소개 페이지</h1>
            <p>about/page.js는 /lecture/013_router/about 경로에 해당합니다.</p>
            {/* href에 이동할 내부 경로를 지정합니다. */}
            <Link href="/lecture/013_router">라우팅 예제로 돌아가기</Link>
        </main>
    );
}
