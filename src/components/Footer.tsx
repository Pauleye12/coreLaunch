const Footer = () => {
  return (
    <div className="w-full px-5 flex justify-center items-center bg-[#191A1A]   ">
      <div className="max-w-[1100px] w-full flex justify-between items-center text-xs text-white uppercase border-t border-[#ffffff61] py-5">
        <p className="text-[#ffffff84]"> copyright 2024 </p>
        <p> Terms and conditions</p>
        <p>Privacy Policy</p>
        <p>Whitepaper</p>
        <p>Visit corelaunch</p>
        <div className="flex gap-2 items-center">
          <img src="./images/medium.png" alt="" />
          <img src="./images/twitter.png" alt="" />
          <img src="./images/telegram.png" alt="" />
          <img src="./images/discord.png" alt="" />
          <img src="./images/linkdin.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
