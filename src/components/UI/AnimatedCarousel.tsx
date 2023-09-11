// import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedCarousel() {
  const cars = [
    "https://www.zadara.com/wp-content/uploads/elementor/thumbs/asu_logo_1-pfhf69t6ss7y37rrnrtxcgjnsfsxtp3dte40pvobh6.png",
    "https://www.zadara.com/wp-content/uploads/elementor/thumbs/asu_logo_1-pfhf69t6ss7y37rrnrtxcgjnsfsxtp3dte40pvobh6.png",
    "https://www.zadara.com/wp-content/uploads/elementor/thumbs/asu_logo_1-pfhf69t6ss7y37rrnrtxcgjnsfsxtp3dte40pvobh6.png",
    "https://www.zadara.com/wp-content/uploads/elementor/thumbs/asu_logo_1-pfhf69t6ss7y37rrnrtxcgjnsfsxtp3dte40pvobh6.png",
    "https://www.zadara.com/wp-content/uploads/elementor/thumbs/asu_logo_1-pfhf69t6ss7y37rrnrtxcgjnsfsxtp3dte40pvobh6.png",
    "https://www.zadara.com/wp-content/uploads/elementor/thumbs/asu_logo_1-pfhf69t6ss7y37rrnrtxcgjnsfsxtp3dte40pvobh6.png",
  ];
  return (
    <div className="overflow-hidden bg-white p-2 shadow-md">
      <div className="flex animate-scroll gap-56 whitespace-nowrap">
        {Array(10)
          .fill(null)
          .map(() =>
            cars.map((car, index) => {
              return (
                <div className="h-20 w-60 shrink-0" key={index}>
                  <Image
                    className="h-full w-full object-contain"
                    src={car}
                    alt="companies"
                    width={1000}
                    height={300}
                  />
                </div>
              );
            }),
          )}
      </div>
    </div>
  );
}
