import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TechnologySection />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;