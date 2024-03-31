import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { RepositoryInfo } from "./screens/ReposityInfo";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/repository" element={<RepositoryInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
