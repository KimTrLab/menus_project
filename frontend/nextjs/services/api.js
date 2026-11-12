
const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

// 공통 API 요청 함수
async function request(url, options = {}) {
    const response = await fetch(`${API_SERVER}${url}`, options);

    if (!response.ok) {
        throw new Error(`서버 요청 실패: ${response.status}`);
    }

    // DELETE 요청에서 응답 본문이 없는 경우
    if (response.status === 204) {
        return null;
    }

    return response.json();
}

// 전체 메뉴 조회
export async function getAllMenus() {
    return request("/menus");
}

// 메뉴 검색
export async function searchMenus(keyword) {
    const params = new URLSearchParams({ word: keyword });
    return request(`/menus/search?${params}`);
}

// 메뉴 한 건 조회
export async function getMenuOne(id) {
    return request(`/menus/${id}`);
}

// 메뉴 등록
export async function addMenu(menuObject) {
    return request("/menus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menuObject)
    });
}

// 메뉴 수정
export async function updateMenu(menuObject) {
    return request("/menus", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menuObject)
    });
}

// 메뉴 삭제
export async function deleteMenu(id) {
    return request(`/menus/${id}`, {
        method: "DELETE"
    });
}

// 메뉴 추천
export async function recommendMenu(id) {
    return request(`/menus/recommend/${id}`, {
        method: "POST"
    });
}

// AI 채팅
export async function sendChat(question) {
    return request("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
    });
}
