'use client'; // 1. 브라우저에서 실행되는 컴포넌트임을 명시

import React from 'react';
// import './globals.css'; <-- 2. page.js에서는 CSS를 직접 임포트하지 않습니다! (삭제)

export default function HomePage() {
  return (
    <div className="main-container">
      <div className="welcome-card">
        <span className="badge">React Study</span>
        <h1 className="main-title">
          환영합니다.<br />
          <span className="highlight">김티와 함께 하는 리액터 공부</span> 입니다.
        </h1>
        <p className="sub-text">
          오늘도 한 걸음씩 차근차근 성장해 볼까요?
        </p>
        <button
          className="start-button"
          onClick={() => alert('공부를 시작합니다!')}
        >
          공부를 시작합니다!
        </button>
      </div>
    </div>
  );
}