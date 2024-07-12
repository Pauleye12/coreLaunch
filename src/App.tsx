import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-[#191a1a]">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
