import React, { useEffect, useState } from "react";
import NavigationMenuBar from "../navbar";
import Footer from "../footer";
import { Button, background } from "@chakra-ui/react";
import {ArrowUpIcon} from '@chakra-ui/icons'
import DrawerComponent from "../navbar/drawer";
interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 200) {
        setShowButton(true);
        } else {
        setShowButton(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth' 
        });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <NavigationMenuBar />
            {/* <DrawerComponent isOpen={true} onClose={function (): void {
                throw new Error("Function not implemented.");
            } } /> */}
                <main >
                    {children}
                </main>
                {/* <ScrollToTopButton /> */}
                <Button
                    position="fixed"
                    bottom="10px"
                    right="20px"
                    size="sm"
                    // colorScheme="blue"
                    background={'#1379B4'}
                    color={'white'}
                    zIndex={200}
                    variant="solid"
                    _hover={{
                        background: '#1379B4',
                        opacity: '0.8'
                    }}
                >
                    Contact Us
                </Button>

                {showButton && (
                    <Button
                        onClick={scrollToTop}
                        position="fixed"
                        bottom="10px"
                        left="10px"
                        size="sm"
                        background={'grey'}
                        color={'white'}
                        zIndex={200}
                        variant="solid"
                        _hover={{ background: '#1379B4', opacity: '0.8' }}
                    >
                        <ArrowUpIcon fontWeight={'bold'} color={'white'} />
                    </Button>
                )}
            <Footer />
        </div>
    );
}


export default Layout