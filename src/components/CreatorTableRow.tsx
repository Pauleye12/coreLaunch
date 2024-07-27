interface tableItems {
  ticker: string;
  time: string;
  description: string;
  lastPrice: string;
  marketCap: string;
  name: string;
  date: string;
  image: string;
}

const CreatorTablerow = ({ items }: { items: tableItems }) => {
  return (
    <tr className="bg-[#191E1E] text-start text-sm font-semibold ">
      <td className="rounded-l-2xl pl-10 py-5 px-2 text-center ">
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-full flex justify-center items-center ">
            <img className="max-w-5 w-full" src={items.image} alt="" />{" "}
          </div>
          <div className="flex flex-col items-start gap-[1px]">
            <p className="uppercase">${items.ticker}</p>
            <p className="text-[#A7A7A7] text-[10px] ">{items.name}</p>
          </div>
        </div>
      </td>
      <td className="px-3 max-w-[250px] w-full ">
        {/* {truncate(trade.actor)} */}
        {items.description}
      </td>
      <td className="px-3">{items.time}</td>
      <td className="px-3">{items.marketCap}</td>
      <td className="px-3">{items.lastPrice}</td>
      <td className="border-radius2 px-3 ">{items.date}</td>
    </tr>
  );
};

export default CreatorTablerow;
