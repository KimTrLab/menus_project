export default function JavaScriptMapLecturePage() {
    const menuPrices = new Map([
        ['김치찌개', 9000],
        ['비빔밥', 8500],
        ['파스타', 12000],
    ]);

    return (
        <main>
            <h1>선택 확장: JavaScript Map 자료형</h1>
            <p>
                Map 자료형은 배열의 map() 메서드와 다릅니다. Map을 JSX 목록으로
                렌더링하려면 배열로 변환한 뒤 배열의 map()을 사용합니다.
            </p>
            <ul>
                {Array.from(menuPrices.entries()).map(([name, price]) => (
                    <li key={name}>
                        {name} · {price.toLocaleString()}원
                    </li>
                ))}
            </ul>
        </main>
    );
}