import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full z-10 fixed top-0 left-0 flex justify-center items-center px-7 bg-[#161616] border-b border-[#ffffff] h-[80px] ">
      <div className="max-w-[1200px] w-full flex justify-between items-center ">
        <div className="flex gap-6 items-center">
          <img src="../images/navlogo.png" alt="" />{" "}
          <div className="flex gap-2 uppercase">
            {" "}
            <Link to={"/"} className="text-[#00ECFF]">
              Home
            </Link>{" "}
            <Link to={"/"}>Tokens</Link>{" "}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-1 border-r border-[#ffffff">
            Connect Wallet
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
