import Tokencard from "./Tokencard";

const Tokendisplay = () => {
  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <div className="bg-[#191A1A] h-fit px-8 pt-40 w-full flex flex-col items-center mb-5 gap-10">
      <div className="flex w-full justify-between  ">
        <div className="text-sm font-medium font-[chakra-petch] flex gap-5 w-full items-center ">
          <div className="border border-white rounded-lg flex justify-between items-center gap-2 px-3 max-w-[177px] w-full h-[40px] py-2 ">
            <img src="./images/navsearch.png" alt="" />
            <input
              className="bg-transparent border-l border-white px-3  w-full outline-none  "
              placeholder="Search..."
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="border border-white rounded-lg flex justify-between items-center p-3 max-w-[120px] w-full h-[40px] ">
            <p>Filter</p>
            <img src="./images/dropdown.png" alt="" />
          </div>
        </div>
        <div className="flex gap-2 items-center mr-14">
          <img
            className="rotate-180 opacity-[0.4] "
            src="./images/nextarrow.png"
            alt=""
          />{" "}
          <span>1</span>
          <img src="./images/nextarrow.png" alt="" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap  justify-between gap-y-14 gap-x-5">
          {" "}
          {nums.map((index) => (
            <Tokencard key={index} />
          ))}{" "}
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 ">
        <img src="./images/Core 2.png" alt="" />
      </div>
    </div>
  );
};

export default Tokendisplay;
