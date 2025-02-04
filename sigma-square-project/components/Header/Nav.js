import React from "react";
import Button from "../Button/Button";

const Nav = () => {
  return (
    <nav className="bg-[#4E4A3F]">
      <div className="container mx-auto px-4 lg:px-24 md:px-12 flex items-center justify-between font-sans h-24 ">
        <div className="text-[#CABA93] font-bold text-4xl">Sigma Square</div>
        <div className="flex gap-5">
          <Button btnText="Log in" className="w-40" />
          <Button btnText="Join" className="w-40" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
