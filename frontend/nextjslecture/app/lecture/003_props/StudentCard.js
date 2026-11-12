'use client';

import React from 'react';

// 부모에게서 전달받은 props를 파라미터로 받습니다.
export function StudentCard({ name, score, subject }) {
    return (
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                alignItems: 'center'
            }}
        >
            <div>
                <span style={{ fontWeight: '600', color: '#334155' }}>👤 {name}</span>
                <span style={{ marginLeft: '8px', fontSize: '0.85rem', color: '#64748b' }}>({subject})</span>
            </div>
            <span style={{ color: '#2563eb', fontWeight: '700' }}>{score}점</span>
        </li>
    );
}