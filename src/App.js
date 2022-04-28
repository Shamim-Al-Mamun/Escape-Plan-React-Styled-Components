import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Body/Home";
import GlobalStyle from "./globalStyles";
import Package from "./Components/Body/Package";
import About from "./Components/Body/About";
import Contact from "./Components/Body/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollButton from "./Components/ScrollButton";
import Testimonial from "./Components/Body/Testimonial";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Testimonial />
      <About />
      <Package />
      <Contact />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
