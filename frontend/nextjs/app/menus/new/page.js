
"use client";

import { useRouter } from "next/navigation";
import MenuForm from "@/components/MenuForm";
import { addMenu } from "@/services/api";

export default function NewMenuPage() {
    const router = useRouter();

    async function handleSave(menuObject) {
        try {
            await addMenu(menuObject);
            alert("메뉴가 등록되었습니다.");
            router.push("/menus");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <section>
            <h2>새 메뉴 등록</h2>
            <MenuForm onSave={handleSave} />
        </section>
    );
}
