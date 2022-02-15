import "./App.css";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { Header } from "./components/Navbar";
import { Menu } from "./components/pages/menu/Menu";
import { Landing } from "./components/pages/landing/Landing";
import { Services } from "./components/pages/service/Services";
import { Contact } from "./components/pages/contact/Contact";
import { Blog } from "./components/pages/blog/Blog";
import { BlogDetail } from "./components/pages/blog/component/BlogDetail";
import { About } from "./components/pages/about/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blogdetail" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
