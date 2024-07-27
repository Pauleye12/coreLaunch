import { useState } from "react";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Loader from "../components/Loader";
import Tablerow from "../components/Tablerow";
import BuyModal from "../components/BuyModal";
import SellModal from "../components/SellModal";
import SlippageModal from "../components/SlippageModal";

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mockTableData = [
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },

  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },

  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },

  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },

  {
    tradeType: "Sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },

  {
    tradeType: "Sel",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },

  {
    tradeType: "Sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Sell",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
  {
    tradeType: "Buy",
    time: "6:20:18pm",
    account: "0x123...7890",
    coreAmt: "0.00001",
    tokenAmt: "1,234,543.345",
    fee: "0.00001",
    date: "July 24, 2024",
  },
];
const ModalText = {
  mainText: "Token Swap Successful",
  subText: "Congratulations! Your token has been successfully swapped.",
};

const bondingPercentage = "30";

const TokenProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [tradeAction, setTradeAction] = useState("buy");
  const [validAmount, setValidAmount] = useState(true);
  const [showSlippage, setShowSlippage] = useState(false)
  const [slippageValue, setSlippageValue] = useState<number>(2)

  //Amount Input
  const [passedSellAmount, setPassedSellAmount] = useState<number>(0);

  const [passedBuyAmount, setPassedBuyAmount] = useState<number>(0);

  //Table pagination shenenigans
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10;
  const totalPages = mockTableData
    ? Math.ceil(mockTableData.length / itemsPerPage)
    : 0;

  const currentItems = mockTableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const [copied, setCopied] = useState(true);

  // const handleTradeToken = () => {
  //   setShowLoader(true);
  //   setTimeout(() => {
  //     setShowLoader(false);
  //     setShowModal(true);
  //   }, 3000);
  // };

  const handleBuy = () => {
    if (passedBuyAmount > 0) {
      setValidAmount(true);
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        setShowModal(true);
      }, 3000);
    } else {
      setValidAmount(false);
    }
  };

  const handleSell = () => {
    if (passedSellAmount > 0) {
      setValidAmount(true);
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        setShowModal(true);
      }, 3000);
    } else {
      setValidAmount(false);
    }
  };

  const handleCopyTokenAddress = async () => {
    // setCopied(false);
    // if (token?.address) {
    //   try {
    //     await navigator.clipboard.writeText(token.address);
    //     setCopied(true);
    //     setTimeout(() => {
    //       setCopied(false);
    //     }, 3000);
    //   } catch (err) {
    //     console.error("Failed to copy content: ", err);
    //     setCopied(false);
    //   }
    // } else {
    //   alert("No token address found");
    // }
  };

  const BuyDetails = {
    walletBalance: "243.00",
    tokenName: "MEME",
  };

  const SellDetails = {
    walletBalance: "243000000.00",
    tokenName: "MEME",
  };
  return (
    <div className="bg-[#191A1A] px-5 pt-[80px] flex justify-center">
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
            <p className="text-sm w-full leading-7 tracking-wider  ">
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

              <button
                onClick={handleCopyTokenAddress}
                className="text-white relative bg-[#182323] px-3 py-[6px] flex items-center w-max gap-1 rounded-md"
              >
                <img src="../images/copy2.png" alt="" /> 0xDaD...B433d
                {/* {copied && (
                  <p className="text-white absolute bottom-[-30px] left-0 bg-[#182323] px-3 py-[6px]  text-[10px] w-full text-center gap-1 rounded-md">
                    Address Copied
                  </p>
                )} */}
              </button>
            </div>
          </div>
          <div className="md:max-w-[50%] w-full">
            <div className=" bg-[#191A1A] text-[12px] py-4 px-7 flex flex-col gap-4 w-full rounded-2xl border border-[#0f1c1d] uploadShdw ">
              <div>
                <div className="bg-[#00ECFF05] tokenInfoShdw w-max rounded-lg flex gap-3 py-2 px-3 ">
                  <button
                    onClick={() => setTradeAction("buy")}
                    className={
                      tradeAction === "buy"
                        ? "rounded-lg px-6 py-2 bg-[#000000] "
                        : "rounded-lg px-6 py-2 bg-transparent "
                    }
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setTradeAction("sell")}
                    className={
                      tradeAction === "sell"
                        ? "rounded-lg px-6 py-2 bg-[#000000] "
                        : "rounded-lg px-6 py-2 bg-transparent "
                    }
                  >
                    Sell
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2 items-end ">
                {tradeAction === "buy" ? (
                  <BuyModal
                    BuyDetails={BuyDetails}
                    setPassedAmount={setPassedBuyAmount}
                    passedAmount={passedBuyAmount ?? 0}
                  />
                ) : (
                  <SellModal
                    SellDetails={SellDetails}
                    setPassedAmount={setPassedSellAmount}
                    passedAmount={passedSellAmount ?? 0}
                  />
                )}

                <p onClick={()=>setShowSlippage(true)} className="w-full flex gap-1 justify-end items-center cursor-pointer ">
                  <img src="../images/settings.png" alt="" /> Set max slippage
                </p>
              </div>
              {!validAmount && (
                <p className="text-red-500">Enter a valid amount to swap</p>
              )}
              <button
                onClick={tradeAction === "buy" ? handleBuy : handleSell}
                className="w-full border border-white text-center h-[55px] flex justify-center items-center bg-[#00ECFF05] rounded-lg "
              >
                Place trade
              </button>
              <div className="w-full flex flex-col gap-2 items-center ">
                <p className="w-full">
                  Bonding Curve Progress: {bondingPercentage}%
                </p>
                <div className="h-3 bg-[#1C4141] rounded-full w-full ">
                  <div
                    className="h-full bg-[#00ECFF] rounded-full"
                    style={{
                      width: `${bondingPercentage}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
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
                onClick={handlePreviousPage}
                className={
                  currentPage === 1
                    ? "rotate-180 opacity-[0.4] "
                    : "rotate-180 "
                }
                src="../images/nextarrow.png"
                alt=""
              />{" "}
              <span>{currentPage}</span>
              <img
                onClick={handleNextPage}
                src="../images/nextarrow.png"
                alt=""
                className={currentPage === totalPages ? "opacity-[0.4] " : " "}
              />
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
              {currentItems.map((items, index) => (
                <Tablerow items={items} key={index} />
              ))}
            </table>
          </div>
        </div>
        <Footer />
      </div>
      {showModal && <Modal data={ModalText} setShowModal={setShowModal} />}
      {showLoader && <Loader text="Swapping Token..." />}
      {showSlippage && <SlippageModal setShowSlippage={setShowSlippage} slippageValue={slippageValue} setSlippageValue={setSlippageValue}  /> }
    </div>
  );
};

export default TokenProfile;
