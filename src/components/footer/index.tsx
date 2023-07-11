import { Image } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
      <footer className="bg-black text-white">
        <div className="container mx-auto py-12 px-4">
          <div className="flex flex-wrap">
            <div>
              <Image src="/unitellas-logo.png" alt="" width={200} />
            </div>
          </div>
          <hr className="my-6 border-white-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-white font-semibold py-1 ">
                @ {new Date().getFullYear()} Unitellas Intenational Limited
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;