import Link from 'next/link';
import { products } from './productData';

// 상품 상세 페이지를 각각 만들지 않고, 공통 동적 경로로 연결하는 예제입니다.
export default function DynamicRoutingExamplePage() {
    return (
        <main>
            <h1>동적 라우팅이 유리한 경우: 상품 상세 페이지</h1>
            <p>
                상품마다 페이지 파일을 따로 만들지 않고, URL의 상품 ID에 맞는 데이터로 같은 화면을 채웁니다.
            </p>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {/* 상품 수가 늘어도 페이지 파일은 그대로 두고 데이터만 추가합니다. */}
                        <Link href={`/lecture/005_router2/products/${product.id}`}>
                            {product.name} 상세 보기
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
