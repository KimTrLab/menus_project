
"use client";

import { useEffect, useState } from "react";
import { getAllMenus } from "@/services/api";
import MenuCard from "@/components/MenuCard";

export default function Home() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenus() {
      try {
        const data = await getAllMenus();

        // 메뉴를 무작위로 섞고 3개 선택
        const selected = [...data]
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);

        setMenus(selected);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadMenus();
  }, []);

  if (loading) return <p>메뉴를 불러오는 중입니다.</p>;

  return (
    <section>
      <h2>오늘의 추천 메뉴</h2>

      <div className="recommend-list">
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </section>
  );
}
