// Library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
// Pages
import Home from "./pages/HomePage";
import Paintings from "./pages/PaintingsPage";
import Poems from "./pages/PoemsPage";
import Biography from "./pages/BiographyPage";
import Blog from "./pages/BlogPage";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
