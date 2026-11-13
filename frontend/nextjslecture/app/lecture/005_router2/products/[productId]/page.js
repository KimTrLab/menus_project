import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../../productData';

// [productId] 경로의 값에 따라 같은 페이지 컴포넌트가 서로 다른 상품을 보여 줍니다.
export default async function ProductDetailPage({ params }) {
    // Next.js 16의 params는 Promise이므로 await로 URL 값을 읽습니다.
    // 예: /products/keyboard로 접속하면 productId는 "keyboard"입니다.
    const { productId } = await params;
    const product = products.find((item) => item.id === productId);

    // URL에 해당하는 상품이 없으면 Next.js의 404 페이지로 처리합니다.
    if (!product) {
        notFound();
    }

    return (
        <main>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>가격: {product.price.toLocaleString()}원</p>
            <p>상품 ID: {product.id}</p>
            <Link href="/lecture/005_router2">상품 목록으로 돌아가기</Link>
        </main>
    );
}
