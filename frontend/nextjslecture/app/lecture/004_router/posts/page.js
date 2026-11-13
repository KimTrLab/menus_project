import Link from 'next/link';

// 실제 API 대신 화면에 표시할 게시글 데이터를 배열로 준비합니다.
const posts = [
    { id: 1, title: '첫 번째 게시글' },
    { id: 2, title: '두 번째 게시글' },
];

export default function PostsPage() {
    return (
        <main>
            <h1>게시글 목록</h1>
            <ul>
                {/* 게시글마다 목록 항목과 동적 상세 페이지 링크를 생성합니다. */}
                {posts.map((post) => (
                    <li key={post.id}>
                        {/* 템플릿 문자열에 id를 넣어 /posts/1 같은 경로를 만듭니다. */}
                        <Link href={`/lecture/004_router/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/lecture/004_router">라우팅 예제로 돌아가기</Link>
        </main>
    );
}
