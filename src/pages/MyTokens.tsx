import { useState } from "react";
import CreatorTablerow from "../components/CreatorTableRow";

const mockTableData = [
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",

    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },

  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },

  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },

  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },

  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },

  {
    ticker: "Sel",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },

  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
  {
    ticker: "MEM",
    time: "6:20:18pm",
    description:
      "Memeland (MEME) is a community-driven cryptocurrency celebrating internet culture. Use MEME to trade rare meme NFTs, earn rewards,and participate in a vibrant meme economy. Join the fun and power the meme revolution with Memeland! Vivamus nisl mi, malesuada egetnisl in, tempor tempus felis. Vestibulum at placerat sapien, velinterdum mi. Sed porta eros eros, egestas auctor justo feugiat consectetur.",
    lastPrice: "0.00001",
    marketCap: "1,234,543.345",
    name: "MEME",
    date: "July 24, 2024",
    image: "../images/tokenImg.png",
  },
];
const MyTokens = () => {
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
  return (
    <div className="bg-[#191A1A] px-5 pt-[80px] flex justify-center w-full ">
      <div className="max-w-[1200px] pt-10  flex flex-col   mt-10 p-6 gap-5  w-full rounded-xl ">
        <div className="flex md:flex-row flex-col gap-5 w-full justify-between  ">
          <div className="flex gap-5 items-center w-full ">
            <h1 className="font-semibold text-[20px] ">My Tokens</h1>{" "}
            <div className="border border-white rounded-lg flex justify-between items-center p-3 max-w-[110px] w-full h-[37px] ">
              <p>All</p>
              <img src="../images/dropdown.png" alt="" />
            </div>
          </div>
          <div className="flex gap-2 items-center mr-14">
            <img
              onClick={handlePreviousPage}
              className={
                currentPage === 1 ? "rotate-180 opacity-[0.4] " : "rotate-180 "
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
        <table className="w-full border-separate border-spacing-x-0 border-spacing-y-6 ">
          <tr className=" bg-[#00ECFF05] rounded-2xl text-center ">
            <th className=" rounded-l-2xl pl-10 px-3 py-4 text-center ">
              Token
            </th>
            <th className="px-3 py-4 text-center">Description</th>
            <th className="px-3 py-4 text-center">Time Created</th>
            <th className="px-3 py-4 text-center">Market Cap</th>
            <th className="px-3 py-4 text-center">Last Price</th>
            <th className=" rounded-r-2xl px-3 py-4 text-center ">Date</th>
          </tr>
          {currentItems.map((items, index) => (
            <CreatorTablerow items={items} key={index} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyTokens;
