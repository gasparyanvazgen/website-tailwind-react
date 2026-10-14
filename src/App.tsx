// central route map - temporary under development mode

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

function RouteFallback() {
  return (
    <div className="grid min-h-screen place-items-center bg-primary text-white">
      <p className="text-sm font-medium text-neutral-400">Loading…</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Redirect any other path (e.g., /contact, /projects) straight to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;