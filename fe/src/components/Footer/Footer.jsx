import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-pink_1 px-60 py-4 text-black !font-poppins">
      <div className="flex justify-between items-center py-16 border-b border-gray_2">
        <div className="flex items-center">
          <img src="/logo_nghich.png" alt="nghich_logo" />
          <div className="relative w-px h-[28px] bg-black" />
          <p className="ml-6 font-medium">Make your own bags.</p>
        </div>
        <div className="flex gap-6 font-semibold">
          <Link className="">Home</Link>
          <Link className="">Product</Link>
          <Link className="">Custom</Link>
          <Link className="">Contact Us</Link>
        </div>
      </div>
      <div className="flex gap-6 py-10">
        <p className="text-green_1">
          Copyright © 2023 nghịch. All rights reserved
        </p>
        <Link className="font-bold">Privacy Policy</Link>
        <Link className="font-bold">Terms of Use</Link>
      </div>
    </div>
  );
};

export default Footer;
