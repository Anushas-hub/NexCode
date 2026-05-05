import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignupNavbar from "./components/SignupNavbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import DownloadPage from "./pages/DownloadPage";

import DashboardPage from "./pages/DashboardPage";
import EditorPage from "./pages/EditorPage";

/* 🔥 Navbar Controller */
function Layout() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/signup" ||
    location.pathname === "/login";

  const isDashboard =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/editor");

  return (
    <>
      {/* ❌ Hide navbar in dashboard */}
      {!isDashboard && (isAuthPage ? <SignupNavbar /> : <Navbar />)}

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
            </>
          }
        />

        {/* AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* NORMAL */}
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>

      {/* ❌ Hide footer in dashboard */}
      {!isAuthPage && !isDashboard && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;