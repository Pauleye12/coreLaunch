import Herosection from "../components/Herosection";
import Tokendisplay from "../components/Tokendisplay";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#191A1A] pt-[80px] pb-5">
      <Herosection />
      <Tokendisplay />
      <Footer />
    </div>
  );
};

export default Home;
