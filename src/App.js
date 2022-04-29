import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Body/Home";
import GlobalStyle from "./globalStyles";
import Package from "./Components/Body/Package";
import About from "./Components/Body/About";
import Contact from "./Components/Body/Contact";
import Footer from "./Components/Footer/Footer";
// import ScrollButton from "./Components/ScrollButton";
import ScrollToTop from "./Components/ScrollToTop";
import Testimonial from "./Components/Body/Testimonial";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Package />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
