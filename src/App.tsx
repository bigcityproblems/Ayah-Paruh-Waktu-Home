import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Pesan from "./pages/Pesan";
import { Navbar, Footer } from "./components/Navigation";

/**
 * ScrollToTop helper component to ensure navigation always starts at the top
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/pesantakterkirim" element={<Pesan />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
