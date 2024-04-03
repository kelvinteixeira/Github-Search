import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Profile } from "./Screens/Profile";
import { RepositoryInfo } from "./Screens/ReposityInfo";
import { PageNotFound } from "./components/PageNotFound";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/repository" element={<RepositoryInfo />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
