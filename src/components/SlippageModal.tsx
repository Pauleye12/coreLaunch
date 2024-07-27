import React from "react";

interface slippageProps {
  setShowSlippage: (value: boolean) => void;
  slippageValue: number;
  setSlippageValue: (value: number) => void;
}
const SlippageModal: React.FC<slippageProps> = ({
  setShowSlippage,
  slippageValue,
  setSlippageValue,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center pt-[90px] bg-[#00000033] h-full backdrop-blur-sm ">
      <div className="relative rounded-2xl max-w-[400px] w-full bg-[#191A1A] border border-[#0f1c1d] uploadShdw px-7 py-10 flex flex-col gap-10 ">
        <div className="flex flex-col gap-2 items-start ">
          <h1 className="font-semibold text-xl ">Settings</h1>
          <p className="text-sm">Set max slippage</p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <p className="text-sm">max slippage</p>
          <input
            className="bg-[#00ECFF05] outline-none border-none rounded-xl px-4 py-3  w-full "
            type="number"
            value={slippageValue}
            name="slippage"
            onChange={(e) => setSlippageValue(parseFloat(e.target.value))}
            id="slippage"
          />
        </div>
        <button
          className="bg-[#1C4141] w-full py-4 rounded-xl "
          onClick={() => setShowSlippage(false)}
        >
          Set Slippage
        </button>
        <img
          onClick={() => setShowSlippage(false)}
          className="absolute cursor-pointer top-[40px] w-[20px] right-[30px] "
          src="../images/close.png"
        />
      </div>
    </div>
  );
};

export default SlippageModal;
