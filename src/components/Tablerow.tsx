import React from "react";

const Tablerow = () => {
  const trade = "BUY";
  return (
    <tr className="bg-[#191E1E] text-start text-sm font-semibold ">
      <td className="rounded-l-2xl pl-10 py-5 px-2 text-center ">
        <div className="flex gap-2 items-center">
          <div
            className={
              trade === "BUY"
                ? "p-2 rounded-full flex justify-center items-center bg-[#00565D99] "
                : "p-2 rounded-full flex justify-center items-center bg-[#68102199]"
            }
          >
            <img src="../images/cart.png" alt="" />{" "}
          </div>
          <div className="flex flex-col items-start gap-[1px]">
            <p>Buy</p>
            <p className="text-[#A7A7A7] text-[10px] ">06:20:18 pM</p>
          </div>
        </div>
      </td>
      <td className="px-3">
        <a
          target="_blank"
          // href={`${explorerUrl}/address/${trade.actor}`}
          className=""
        >
          {/* {truncate(trade.actor)} */}
          0xF65...F898f
        </a>
      </td>
      <td className="px-3">0.000100</td>
      <td className="px-3">1,232,974.35</td>
      <td className="px-3">0.00000100</td>
      <td className="border-radius2 px-3 ">July 24, 2024</td>
    </tr>
  );
};

export default Tablerow;
