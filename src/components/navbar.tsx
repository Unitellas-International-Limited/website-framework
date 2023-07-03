import React from "react";
import { useState } from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from "next/link";
import Image from "next/image";
import { CaretDownIcon } from "@radix-ui/react-icons";

const NavigationMenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className="w-full mx-auto bg-[#020101] top-0 z-30 px-6 flex lg:px-6 py-2.5 sticky shadow-colors.blackA.blackA7 shadow-[0_2px_10px]">
            <div className="container mx-auto">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                    <div className="navigation-menu-bar__logo">
                        <Link href="/" legacyBehavior>
                            <a>
                                <Image src="/unitellas-logo.png" alt="Radix Logo" width={150} height={100} />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default NavigationMenuBar;