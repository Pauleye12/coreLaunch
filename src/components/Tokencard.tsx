const Tokencard = () => {
  return (
    <div className="max-w-[390px] w-full h-[200px] rounded-lg ">
      <div className="h-full rounded-t-lg tokenBG  ">
        <div className="flex items-center w-full justify-start px-3 py-5 gap-5">
          <img src="./images/tokenImg.png" alt="" />
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold ">
              Memeland <span>[$mlm]</span>
            </p>
            <p className=" text-[10px] flex items-center gap-1 font-semibold ">
              0xe214ED30ea065c...{" "}
              <span>
                <img src="./images/copy.png" alt="" />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center px-3 py-2 bg-[#2C2C2C] font-semibold text-[7px] rounded-b-lg ">
        <p>
          Market cap: <span className="text-[#00ECFF] ml-1 ">140.60 CORE</span>
        </p>
        <p>
          Trading vol: <span className="text-[#00ECFF] ml-1 ">140.M CORE</span>
        </p>
        <p>
          Created on: <span className="text-[#00ECFF] ml-1 ">07/10</span>
        </p>
        <img src="./images/share.png" alt="" />
      </div>
    </div>
  );
};

export default Tokencard;
