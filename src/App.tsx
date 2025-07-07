import { Navigate, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import TodoPage from "./pages/TodoPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/todos" element={<TodoPage />} />
            {/* 잘못된 경로는 홈으로 리디렉션 */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
