// central route map with route-level code splitting so visitors download only the page they open.
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const Article = lazy(() => import("./pages/Article"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const Project = lazy(() => import("./pages/Project"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="grid min-h-screen place-items-center bg-primary text-secondary">
      <p className="text-sm font-medium text-secondary/60">Loading page…</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<Article />} /> */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
