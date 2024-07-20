import React from "react";

interface ModalProps {
  text: { mainText: string; subText: string };
  setShowModal: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ text, setShowModal }) => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-center items-center pt-[90px] bg-[#00000033] h-full backdrop-blur-sm ">
      <div className="p-[1px] rounded-xl heroBTN ">
        <div className="h-[450px] px-5 py-7 rounded-xl launchBG flex items-end relative ">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-3 p-2 rounded-full bg-[#fff] "
          >
            <img src="../images/close.png" alt="" />
          </button>
          <div className="h-max flex flex-col gap-14 items-center ">
            <div className="flex flex-col items-center gap-4 text-center ">
              <img className="w-[60px]" src="../images/modalTick.png" alt="" />
              <h1 className=" text-xl font-semibold  ">{text.mainText}</h1>
              <p className="max-w-[300px] text-sm font-semibold w-full ">
                {text.subText}
              </p>
              <button className="flex text-sm items-center gap-1 ">
                View details <img src="../images/dropdown.png" alt="" />{" "}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-[50px]" src="../images/Core 2.png" alt="" />{" "}
              <h1 className="uppercase font-bold text-2xl ">CORELAUNCH</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
