const LaunchToken = () => {
  return (
    <div className=" md:h-screen pt-[120px] flex flex-col md:flex-row gap-5 launchBG relative">
      <img
        className="absolute bottom-0 left-0 "
        src="./images/launchbottom.png"
        alt=""
      />
      <div className="md:h-full md:w-[50%] p-4 md:flex justify-center items-center ">
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          <h1 className="text-4xl font-bold text-center w-full ">Dear Dev,</h1>{" "}
          <div className="flex flex-col gap-1 text-sm text-center items-center justify-center ">
            <p>Provide the necessary details to launch your token.</p>
            <p>
              Enhance its visibility by adding your social media and website.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] p-3 md:overflow-y-auto ">
        <div className="border formShdw bg-[#191A1A] border-[#00ECFF] rounded-3xl max-w-[550px]   w-full  px-[70px] py-[50px] flex flex-col gap-5  ">
          <h1>Create New Token</h1>
          <div className="w-full flex flex-col items-center border border-[#F8F8F8] border-dashed gap-4  py-5 px-2 rounded-3xl ">
            <img src="./images/uploadImg1.png" alt="" />
            <button className=" uploadShdw rounded-full border border-[#00ECFF] py-2 text-xl px-7 font-semibold flex items-center gap-2  ">
              Upload <img src="./images/uploadImg2.png" alt="" />
            </button>
            <p className="text-sm font-medium">or drag and drop image</p>
            <p className="text-[10px] mt-[-14px] ">paste image or ctrl + v</p>
          </div>
          <input
            className=" border border-[#F8F8F8] rounded-xl text-lg font-medium bg-transparent px-4 w-full py-3 outline-none "
            placeholder="Token name"
            type="text"
            name=""
            id=""
          />
          <input
            className=" border border-[#F8F8F8] rounded-xl text-lg font-medium bg-transparent px-4 w-full py-3 outline-none "
            placeholder="Token ticker"
            type="text"
            name=""
            id=""
          />
          <input
            className=" border border-[#F8F8F8] rounded-xl text-lg font-medium bg-transparent px-4 w-full py-3 outline-none "
            placeholder="Token description"
            type="text"
            name=""
            id=""
          />
          <div className="flex justify-center gap-2 items-center">
            <span className="h-[2px] lineBG w-20 rounded-sm "></span>
            <p className="text-lg font-medium text-center ">Connect Wallet</p>
            <span className="h-[2px] lineBG2 w-20 rounded-sm "></span>
          </div>
          <div className=" border border-[#F8F8F8] rounded-xl text-lg font-medium bg-transparent pr-4 w-full  overflow-clip flex gap-2 ">
            <img
              className="py-4 imgShdw rounded-l-xl w-[50px] px-3 "
              src="./images/twitter2.png"
              alt=""
            />

            <input
              className="outline-none px-3 w-full py-3 bg-transparent"
              type="url"
              placeholder="Twitter link"
              name=""
              id=""
            />
          </div>
          <div className=" border border-[#F8F8F8] rounded-xl text-lg font-medium bg-transparent pr-4 w-full  overflow-clip flex gap-2 ">
            <img
              className="py-4 imgShdw rounded-l-xl w-[50px] px-3 "
              src="./images/telegram2.png"
              alt=""
            />

            <input
              className="outline-none px-3 w-full py-3 bg-transparent"
              type="url"
              placeholder="Telegram link"
              name=""
              id=""
            />
          </div>
          <div className=" border border-[#F8F8F8] rounded-xl text-lg font-medium bg-transparent pr-4 w-full  overflow-clip flex gap-2 ">
            <img
              className="py-4 imgShdw rounded-l-xl w-[50px] px-3 "
              src="./images/web.png"
              alt=""
            />

            <input
              className="outline-none px-3 w-full py-3 bg-transparent"
              type="url"
              placeholder="Website link"
              name=""
              id=""
            />
          </div>
          <button className="w-full bg-[#353535] border border-[#00ecff] uploadShdw text-lg font-medium rounded-xl py-4 px-4 mt-2 ">
            Create Token
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchToken;
