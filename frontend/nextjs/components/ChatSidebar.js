
"use client";

import { useState } from "react";
import { sendChat } from "@/services/api";

export default function ChatSidebar() {
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "안녕하세요! 음식 메뉴에 관해 질문해 주세요."
        }
    ]);

    async function handleSend() {
        const text = question.trim();

        if (!text || loading) return;

        setMessages((prev) => [
            ...prev,
            { role: "user", content: text }
        ]);

        setQuestion("");
        setLoading(true);

        try {
            const result = await sendChat(text);

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: result.answer }
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: `오류가 발생했습니다. ${error.message}`
                }
            ]);
        } finally {
            setLoading(false);
        }
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }

    return (
        <aside className="chat-sidebar">
            <h2>AI 메뉴 도우미</h2>

            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={
                            message.role === "user"
                                ? "user-message"
                                : "bot-message"
                        }
                    >
                        {message.content}
                    </div>
                ))}

                {loading && (
                    <div className="bot-message">
                        답변을 생각하고 있습니다...
                    </div>
                )}
            </div>

            <div className="chat-input-area">
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="메뉴에 관해 질문하세요."
                    rows={2}
                />

                <button
                    onClick={handleSend}
                    disabled={loading || !question.trim()}
                >
                    전송
                </button>
            </div>
        </aside>
    );
}
