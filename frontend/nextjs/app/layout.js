
import "./globals.css";

import Header from "@/components/Header";
import ChatSidebar from "@/components/ChatSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />

        <div className="app-layout">
          <ChatSidebar />

          <main className="main-area">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

// app/layout.js를 불러옵니다.
// app/page.js에 작성된 코드를 {children} 자리에 쏙 집어넣어 완성된 HTML을 만듭니다.
// 그 결과 브라우저 화면에는 [헤더 + 사이드바 + page.js의 내용]이 합쳐져서 나타나게 됩니다.

// 개발자가 layout.js라는 이름으로 파일을 만들고 그 안에 export default function RootLayout이라고 적어두면,
// Next.js가 프로젝트를 빌드하거나 실행할 때 "아, 이 파일이 우리 웹사이트 전체의 기본 레이아웃(RootLayout)이구나!" 하고 약속된 규칙에 따라 내부적으로 알아서 찾아냅니다.
// 사용자가 웹사이트에 접속하면 Next.js가 주도적으로 이 RootLayout을 가장 먼저 호출하고, 그 안에 필요한 페이지(page.js)를 쏙 집어넣어 완성된 HTML을 브라우저에 보내줍니다.
