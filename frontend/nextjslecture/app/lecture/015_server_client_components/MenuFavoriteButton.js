'use client';

import { useState } from 'react';

export default function MenuFavoriteButton({ menuName }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <button
            type="button"
            aria-pressed={isFavorite}
            onClick={() => setIsFavorite((current) => !current)}
        >
            {isFavorite ? '즐겨찾기 해제' : `${menuName} 즐겨찾기`}
        </button>
    );
}
