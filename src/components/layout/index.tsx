import React from "react";
import NavigationMenuBar from "../navbar";
import Footer from "../footer";
import { Button, background } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationMenuBar />
                <main>
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
                    variant="solid"
                    _hover={{
                        background: '#1379B4',
                        opacity: '0.8'
                    }}
                >
                    Contact Us
                </Button>

                <Button
                    position="fixed"
                    bottom="10px"
                    left="10px"
                    size="sm"
                    // colorScheme="blue"
                    background={'grey'}
                    color={'white'}
                    variant="solid"
                    _hover={{
                        background: '#1379B4',
                        opacity: '0.8'
                    }}
                >
                    
                </Button>
                
            <Footer />
        </div>
    );
}


export default Layout