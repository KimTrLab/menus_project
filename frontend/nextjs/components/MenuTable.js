
"use client";

import Link from "next/link";
import { deleteMenu, recommendMenu } from "@/services/api";

export default function MenuTable({ menus, onRefresh }) {

    async function handleDelete(id) {
        if (!confirm("정말 삭제하시겠습니까?")) return;

        try {
            await deleteMenu(id);
            await onRefresh();
        } catch (error) {
            alert(error.message);
        }
    }

    async function handleRecommend(id) {
        try {
            await recommendMenu(id);
            await onRefresh();
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>칼로리</th>
                    <th>설명</th>
                    <th>추천</th>
                    <th>관리</th>
                </tr>
            </thead>

            <tbody>
                {menus.map((menu) => (
                    <tr key={menu.id}>
                        <td>{menu.id}</td>
                        <td>{menu.name}</td>
                        <td>{menu.calories} kcal</td>
                        <td>{menu.description}</td>

                        <td>
                            {menu.recommendation ?? 0}
                            <button onClick={() => handleRecommend(menu.id)}>
                                추천
                            </button>
                        </td>

                        <td>
                            <Link href={`/menus/${menu.id}/edit`}>
                                수정
                            </Link>

                            <button onClick={() => handleDelete(menu.id)}>
                                삭제
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
