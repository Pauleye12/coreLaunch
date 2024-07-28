import Herosection from "../components/Herosection";
import Tokendisplay from "../components/Tokendisplay";
import Footer from "../components/Footer";
import { useAccount } from "wagmi";
import { useTokens } from "../hooks/useToken";

const Home = () => {
  const { chainId } = useAccount();
  const { data } = useTokens(
    chainId ? chainId : 1115,
    "timestamp",
    10,
  );

  return (
    <div className="bg-[#191A1A] pt-[80px] pb-5">
      <Herosection />
      <Tokendisplay tokens={data || []} />
      <Footer />
    </div>
  );
};

export default Home;
