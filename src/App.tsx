import { Route, Routes } from "react-router-dom";
import Blog from "./dashboard/Pages/Blog/Blog";
import Docs from "./dashboard/Pages/Docs/Docs";
import DocsReader from "./dashboard/Pages/DocsReader/DocsReader";
import Home from "./dashboard/Pages/Home/Home";
import NoPage from "./dashboard/Pages/NoPage/NoPage";
import Project from "./dashboard/Pages/Project/Project";
import Report from "./dashboard/Pages/Report/Repo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/report" element={<Report />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/read" element={<DocsReader />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
