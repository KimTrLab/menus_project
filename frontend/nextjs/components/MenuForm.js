
"use client";

import { useEffect, useState } from "react";
import {
    getAllMenus,
    searchMenus
} from "@/services/api";

import MenuTable from "@/components/MenuTable";

export default function MenusPage() {
    const [menus, setMenus] = useState([]);
    const [keyword, setKeyword] = useState("");

    async function loadMenus() {
        try {
            const data = keyword.trim()
                ? await searchMenus(keyword)
                : await getAllMenus();

            setMenus(data);
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        loadMenus();
    }, []);

    function handleSearch(e) {
        e.preventDefault();
        loadMenus();
    }

    return (
        <section>
            <h2>전체 메뉴 목록</h2>

            <form onSubmit={handleSearch}>
                <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="메뉴 검색"
                />

                <button type="submit">검색</button>
            </form>

            <MenuTable
                menus={menus}
                onRefresh={loadMenus}
            />
        </section>
    );
}
