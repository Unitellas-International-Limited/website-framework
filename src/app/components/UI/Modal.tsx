import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  children: ReactNode;
  title: string;
  display: boolean;
  close: () => void;
}

export default function Modal({ title, children, display, close }: Props) {
  useEffect(() => {
    const html = document.querySelector("html");
    if (display && html !== null) {
      html.style.overflow = "hidden";
    }
    if (!display && html !== null) {
      html.style.removeProperty("overflow");
    }
  }, [display]);

  return (
    <AnimatePresence>
      {display && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={close}
            className="fixed left-0 top-0 z-30 h-screen w-screen bg-black/25"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", transition: { duration: 0.3 } }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={close}
            className="fixed right-0 top-0 z-30 flex h-full w-full max-w-lg justify-end p-2 xs:p-4"
          >
            <div
              className="flex h-full w-full shrink-0 flex-col rounded-2xl bg-white"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="flex items-center justify-between gap-4 px-3 py-2 xs:px-6 xs:py-5">
                <h1 className="text-lg font-bold xs:text-2xl">{title}</h1>
                <div
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full duration-300 hover:bg-gray-100"
                  onClick={close}
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    className="h-4 w-4 xs:h-6 xs:w-6"
                  />
                </div>
              </div>
              <div className="h-full">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
