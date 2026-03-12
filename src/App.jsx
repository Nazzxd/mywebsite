import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import SEO from "./components/SEO";

function App() {
  return (
    <Router>
      <SEO />
      <Routes>
        <Route path="/" element={<><Header /><Pricing /></>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;