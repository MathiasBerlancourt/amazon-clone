import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>
        <div className="hidden sm:flex items-center ha-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink  rounded-l-md focus:outline-none px-4 "
            type="text"
          />
          <SearchIcon className="h-8 p4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div>
            <p>Hello Mathias</p>
            <p>Account & list</p>
          </div>
          <div>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div>
            <ShoppingCartIcon className="h-10" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
