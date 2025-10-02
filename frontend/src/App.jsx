import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Tools from "./pages/Tools";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Full-height flex container */}
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Main content grows to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
