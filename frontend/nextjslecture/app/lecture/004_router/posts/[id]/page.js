import Link from 'next/link';
import { notFound } from 'next/navigation';

// URL의 id와 화면에 표시할 제목을 연결하는 예제 데이터입니다.
const posts = {
    '1': '첫 번째 게시글',
    '2': '두 번째 게시글',
};

// 이 파일이 [id] 폴더에 있으므로 Next.js가 URL의 동적 세그먼트를 params로 전달합니다.
export default async function PostDetailPage({ params }) {
    // Next.js 16의 params는 Promise이므로 await 후 id를 꺼냅니다.
    // /lecture/004_router/posts/1로 접속하면 id는 문자열 "1"입니다.

    // params는 { id: '1' } 형태의 객체입니다. 구조분해할당으로 id를 꺼냅니다.
    const { id } = await params;
    // id를 키로 사용해 posts 객체에서 제목을 가져옵니다.
    const title = posts[id];

    // 등록되지 않은 id라면 Next.js의 404 페이지를 표시합니다.
    if (!title) {
        notFound();
    }

    return (
        <main>
            <h1>{title}</h1>
            <p>동적 경로에서 전달된 게시글 ID: {id}</p>
            {/* 게시글 목록 경로로 돌아가는 내부 링크입니다. */}
            <Link href="/lecture/004_router/posts">게시글 목록으로 돌아가기</Link>
        </main>
    );
}
