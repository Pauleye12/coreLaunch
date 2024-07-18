import Footer from "../components/Footer";
import Tablerow from "../components/Tablerow";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TokenProfile = () => {
  return (
    <div className="bg-[#191A1A] px-5 pt-[80px] flex justify-center pb-5">
      <div className="max-w-[1200px] pt-10 w-full flex flex-col gap-10 ">
        <div className="flex flex-col md:flex-row gap-7 justify-between">
          <div className="bg-[#1C4141] text-white flex flex-col gap-5 p-5 md:max-w-[50%] w-full rounded-2xl">
            <div className="flex gap-3 items-center ">
              <img src="../images/memeland.png" alt="" />
              <div className="flex flex-col items-start gap-1 ">
                <h1 className="uppercase text-2xl font-semibold ">memeland</h1>
                <p className="uppercase text-xl font-semibold ">$MEME</p>
                <p className="text-[#A7A7A7] text-sm  ">29/06/2024</p>
              </div>
            </div>
            <p className="text-sm w-full leading-6 ">
              Memeland (MEME) is a community-driven cryptocurrency celebrating
              internet culture. Use MEME to trade rare meme NFTs, earn rewards,
              and participate in a vibrant meme economy. Join the fun and power
              the meme revolution with Memeland! Vivamus nisl mi, malesuada eget
              nisl in, tempor tempus felis. Vestibulum at placerat sapien, vel
              interdum mi. Sed porta eros eros, egestas auctor justo feugiat
              consectetur.
            </p>
            <div className="flex mt-4 md:m-0 flex-col md:flex-row justify-between gap-3 w-full md:items-center">
              <div className="flex items-center gap-2">
                <img src="../images/user.png" alt="" />
                <p className="text-sm">
                  Created by:{" "}
                  <span className="ml-[2px] text-[#8BF0B7]">0xDaD...B433d</span>
                </p>
              </div>
              <button className="text-white bg-[#182323] px-3 py-[6px] flex items-center w-max gap-1 rounded-md">
                <img src="../images/copy2.png" alt="" /> 0xDaD...B433d
              </button>
            </div>
          </div>
          <div className="md:max-w-[50%] bg-[#191A1A] text-[12px] py-7 px-7 flex flex-col gap-7 w-full rounded-2xl border border-[#00ECFF] uploadShdw ">
            <div>
              <div className="bg-[#00ECFF05] tokenInfoShdw w-max rounded-lg flex gap-3 py-2 px-3 ">
                <button className="rounded-lg px-6 py-2 bg-[#000000] ">
                  Buy
                </button>
                <button className="rounded-lg px-6 py-2 bg-transparent ">
                  Sell
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 items-end ">
              <div className="bg-[#00ECFF05] tokenInfoShdw rounded-xl px-6 py-8 flex flex-col gap-[2px] w-full ">
                <div className="flex justify-between gap-5 items-center w-full ">
                  <p>From</p> <img src="../images/Core 3.png" alt="" />
                </div>
                <div className="flex font-medium justify-between gap-5 items-center w-full ">
                  <input
                    className="bg-transparent w-[60%] text-[36px] outline-none"
                    type="number"
                    placeholder="0.00"
                    name=""
                    id=""
                  />{" "}
                  <div className="flex text-3xl gap-2 items-center">
                    <p className="uppercase">MEME</p>{" "}
                    <img src="../images/tokenLogo.png" alt="" />
                  </div>
                </div>
                <div className="flex justify-between gap-3 items-center w-full ">
                  <p>Available</p>
                  <p className="uppercase">2,528 CORE</p>
                </div>
              </div>
              <p className="w-full flex gap-1 justify-end items-center ">
                <img src="../images/settings.png" alt="" /> Set max slippage
              </p>
            </div>
            <button className="w-full border border-white text-center h-[65px] flex justify-center items-center bg-[#00ECFF05] rounded-lg ">
              Place trade
            </button>
          </div>
        </div>
        <div className="border border-white p-3 greenShdw w-full rounded-xl ">
          <h1>Price Chart</h1>
        </div>
        <div className="border border-white p-6 flex flex-col gap-5 greenShdw w-full rounded-xl ">
          <div className="flex md:flex-row flex-col gap-5 w-full justify-between  ">
            <div className="flex gap-5 items-center w-full ">
              <h1 className="font-semibold text-[20px] ">Trades</h1>{" "}
              <div className="border border-white rounded-lg flex justify-between items-center p-3 max-w-[110px] w-full h-[37px] ">
                <p>All</p>
                <img src="../images/dropdown.png" alt="" />
              </div>
            </div>
            <div className="flex gap-2 items-center mr-14">
              <img
                className="rotate-180 opacity-[0.4] "
                src="../images/nextarrow.png"
                alt=""
              />{" "}
              <span>1</span>
              <img src="../images/nextarrow.png" alt="" />
            </div>
          </div>
          <div className="w-full overflow-x-auto ">
            <table className="w-full border-separate border-spacing-x-0 border-spacing-y-6 ">
              <tr className=" bg-[#00ECFF05] rounded-2xl text-start ">
                <th className=" rounded-l-2xl pl-10 px-3 py-4 text-start ">
                  Type
                </th>
                <th className="px-3 py-4 text-start">Account</th>
                <th className="px-3 py-4 text-start">CORE</th>
                <th className="px-3 py-4 text-start">MEME</th>
                <th className="px-3 py-4 text-start">Fee</th>
                <th className=" rounded-r-2xl px-3 py-4 text-start ">Date</th>
              </tr>
              {nums.map((index) => (
                <Tablerow key={index} />
              ))}
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TokenProfile;
