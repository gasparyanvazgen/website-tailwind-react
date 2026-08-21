// application entry point: mounts React once and enables Strict Mode during development.

import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS is loaded by the bundler.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// GitHub Pages returns 404.html for deep links; restore the original route before React Router starts.
const redirect = new URLSearchParams(window.location.search).get("redirect");
if (redirect) {
  const base = process.env.PUBLIC_URL || "";
  const target = redirect.startsWith("/") ? redirect : `/${redirect}`;
  window.history.replaceState(null, "", `${base}${target}`);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// if you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
