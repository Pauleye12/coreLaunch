import { Link } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useState } from "react";
import { useAccount } from "wagmi";
// import { Link as ScrollLink, Element } from "react-scroll";
// import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { open } = useWeb3Modal();
  // const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const [activeLink, setActiveLink] = useState<string>("/");

  // Handle click event
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="w-full z-10 fixed top-0 left-0 flex justify-center items-center px-7 bg-[#161616] border-b border-[#ffffff] h-[80px] ">
      <div className="max-w-[1200px] w-full flex justify-between items-center ">
        <div className="flex gap-6 items-center">
          <Link to={"/"}>
            <img src="../images/navlogo.png" alt="" />{" "}
          </Link>
          <div className="md:flex gap-2 hidden uppercase">
            {" "}
            <a
              onClick={() => handleLinkClick("/")}
              href="/#home"
              className="hover:text-[#00ECFF]"
            >
              Home
            </a>{" "}
            <a
              onClick={() => handleLinkClick("tokens")}
              className={
                activeLink === "tokens"
                  ? "text-[#00ECFF] cursor-pointer "
                  : "cursor-pointer"
              }
              href="/#tokens"
              // to="tokens"
              // smooth={true}
              // duration={500}
            >
              Tokens
            </a>{" "}
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => open()}
            className="px-5 py-1 border-r border-[#ffffff"
          >
            {address ? "Connected" : "Connect Wallet"}
          </button>
          <div className="flex justify-center items-center">
            <input
              className=" hidden "
              placeholder="Search Token"
              type="text"
              name=""
              id=""
            />
            <img src="../images/navsearch.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
