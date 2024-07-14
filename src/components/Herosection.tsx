import { Link } from "react-router-dom";
const Herosection = () => {
  return (
    <div className=" heroBG w-full pt-[25px] flex justify-center items-center pb-16 ">
      {" "}
      <div className="max-w-[1100px] w-full flex-col flex items-center gap-6 ">
        <div className="text-center font-bold text-5xl flex flex-col items-center gap-1 text-[#ffffff] uppercase  ">
          <h1>Lauch With confidence </h1>
          <h1>Build on core</h1>
        </div>
        <div className="rocketBG w-[320px] h-[370px] flex justify-center items-center rounded-2xl border-2 border-[#00ECFF] ">
          <img src="./images/rocket.gif" alt="" />
        </div>
        <button className="uppercase heroBTN mt-2 p-[1px]  rounded-md h-[48px] ">
          <Link
            to={"/launch"}
            className=" bg-[#353535] h-full rounded-md text-center flex justify-center items-center px-3 "
          >
            Launch new token
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Herosection;
