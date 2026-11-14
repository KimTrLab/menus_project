export function MenuCard({ name, category, price }) {
    return (
        <li>
            <strong>{name}</strong>
            <span> · {category} · {price.toLocaleString()}원</span>
        </li>
    );
}