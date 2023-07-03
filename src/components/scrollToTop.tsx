import React from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
const isBrowser = () => typeof window !== 'undefined';

export default function ScrollToTopButton() {
    const [show, setShow] = React.useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleHide = () => {
        setShow(false);
    };

    const scrollToTop = () => {
        if (!isBrowser()) return;

        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
        
    };

    // implement function to hide the button when screen is at the top

    return (
        <div className="absolute bottom-10 left-20 p-10" onClick={scrollToTop}>
            {show? <ArrowUpIcon width={30} height={30} color="black" fontSize={20} /> : null}
        </div>
    );
}