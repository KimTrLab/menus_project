import Link from 'next/link';

// app/lecture/004_router/page.js는 /lecture/004_router 경로에 해당합니다.
export default function RouterLecturePage() {
    return (
        <main>
            <h1>Next.js App Router</h1>
            <p>
                App Router에서는 app 폴더의 디렉터리와 page.js 파일로 URL 경로를 만듭니다.
            </p>

            {/* 폴더 이름이 경로가 되고, 해당 폴더의 page.js가 페이지를 정의합니다. */}
            <h2>정적 경로</h2>
            <ul>
                <li>
                    {/* Link는 Next.js 내부 페이지 사이를 이동할 때 사용합니다. */}
                    <Link href="/lecture/004_router/about">소개 페이지</Link>
                </li>
                <li>
                    <Link href="/lecture/004_router/posts">게시글 목록</Link>
                </li>
            </ul>

            <h2>동적 경로</h2>
            <p>
                {/* 대괄호 폴더 [id]는 URL마다 달라지는 경로 값을 나타냅니다. */}
                posts/[id]/page.js의 [id] 부분은 주소에 따라 달라지는 값입니다.
            </p>
            <ul>
                <li>
                    <Link href="/lecture/004_router/posts/1">게시글 1</Link>
                </li>
                <li>
                    <Link href="/lecture/004_router/posts/2">게시글 2</Link>
                </li>
            </ul>
        </main>
    );
}
