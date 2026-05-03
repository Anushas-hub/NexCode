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

/* 🔥 Navbar Controller */
function Layout() {
  const location = useLocation();

  return (
    <>
      {/* ✅ SIGNUP PAGE → different navbar */}
      {location.pathname === "/signup" ? <SignupNavbar /> : <Navbar />}

      <Routes>
        {/* HOME */}
        <Route path="/" element={
          <>
            <Hero />
            <Features />
          </>
        } />

        {/* OTHER PAGES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* SIGNUP */}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      {/* ❌ Signup page pe footer hata sakte hain (optional) */}
      {location.pathname !== "/signup" && <Footer />}
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