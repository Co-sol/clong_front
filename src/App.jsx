import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateGroupPage from "./pages/CreateGroupPage";
import TutorialPage from "./pages/TutorialPage";
import CreateSpacePage from "./pages/CreateSpacePage";
import NoGroupPage from "./pages/NoGroupPage";
import { useAuthStatus } from "./hooks/useAuthStatus";

function App() {
  const { isLoggedIn, hasGroup } = useAuthStatus();

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/noGroup" element={<NoGroupPage />} />
      <Route path="/createGroup" element={<CreateGroupPage />} />
      <Route path="/tutorial" element={<TutorialPage />} />
      <Route path="/createSpace" element={<CreateSpacePage />} />
      <Route
        path="/redirect"
        element={
          isLoggedIn ? (
            hasGroup ? (
              <Navigate to="/createSpace" replace />
            ) : (
              <Navigate to="/createGroup" replace />
            )
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="*" element={<div>잘못된 페이지입니다.</div>} />
    </Routes>
  );
}

export default App;
