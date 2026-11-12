
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
