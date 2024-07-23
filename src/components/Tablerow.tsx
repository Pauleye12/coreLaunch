interface tableItems {
  tradeType: string;
  time: string;
  account: string;
  coreAmt: string;
  tokenAmt: string;
  fee: string;
  date: string;
}

const Tablerow = ({ items }: { items: tableItems }) => {
  return (
    <tr className="bg-[#191E1E] text-start text-sm font-semibold ">
      <td className="rounded-l-2xl pl-10 py-5 px-2 text-center ">
        <div className="flex gap-2 items-center">
          <div
            className={
              items.tradeType.toLowerCase() === "buy"
                ? "p-2 rounded-full flex justify-center items-center bg-[#00565D99] "
                : "p-2 rounded-full flex justify-center items-center bg-[#68102199]"
            }
          >
            <img className="max-w-5 w-full" src="../images/cart.png" alt="" />{" "}
          </div>
          <div className="flex flex-col items-start gap-[1px]">
            <p>{items.tradeType}</p>
            <p className="text-[#A7A7A7] text-[10px] ">{items.time}</p>
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
          {items.account}
        </a>
      </td>
      <td className="px-3">{items.coreAmt}</td>
      <td className="px-3">{items.tokenAmt}</td>
      <td className="px-3">{items.fee}</td>
      <td className="border-radius2 px-3 ">{items.date}</td>
    </tr>
  );
};

export default Tablerow;
