import React from "react";
import { useState, Fragment } from "react";
import NavigationMenuBar from "./navbar";
import Footer from "./footer";
import ScrollToTopButton from "./scrollToTop";

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
                <ScrollToTopButton />
            <Footer />
        </div>
    );
}

export default Layout;