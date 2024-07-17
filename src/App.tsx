import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LaunchToken from "./pages/LaunchToken";
import TokenProfile from "./pages/TokenProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // <div className="bg-[#191a1a]">

    //   <Navbar />
    //   {/* <Home /> */}
    //   <LaunchToken />
    // </div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/launch" element={<LaunchToken />} />
        <Route path="/token/:id" element={<TokenProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
