// children을 사용하면 화면 조각을 재사용 가능한 컴포넌트에 조합할 수 있습니다.
function LessonPanel({ title, children }) {
    return (
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
        </section>
    );
}

export default function ChildrenCompositionLecturePage() {
    return (
        <main>
            <h1>React 컴포넌트 합성과 children</h1>
            <p>부모 컴포넌트가 자식 컴포넌트에 표시할 내용을 조합해서 전달합니다.</p>

            {/* 여는 태그와 닫는 태그 사이의 JSX가 LessonPanel의 children이 됩니다. */}
            <LessonPanel title="children이란?">
                <p>컴포넌트 사이에 작성한 요소는 children prop으로 전달됩니다.</p>
                <ul>
                    <li>재사용할 바깥 구조는 LessonPanel이 담당합니다.</li>
                    <li>안에 들어갈 내용은 사용하는 쪽에서 정합니다.</li>
                </ul>
            </LessonPanel>

            <LessonPanel title="왜 합성을 사용할까요?">
                <p>공통 레이아웃을 재사용하면서 페이지마다 다른 내용을 끼워 넣을 수 있습니다.</p>
            </LessonPanel>
        </main>
    );
}
