import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ThemeToggle";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Volunteer from "./pages/Volunteer";
import Sponsors from "./pages/Sponsors";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
