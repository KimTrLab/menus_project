
export default function MenuCard({ menu }) {
    return (
        <div className="card">
            <h3>{menu.name}</h3>
            <p>칼로리: {menu.calories} kcal</p>
            <p>{menu.description}</p>
        </div>
    );
}
