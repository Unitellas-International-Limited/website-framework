import Image from "next/image";

type ImageData = {
  name: string;
  src: string;
};

export default function AnimatedCarousel({ images }: { images: ImageData[] }) {
  return (
    <div className="bg-white py-2 shadow-md">
      <div className="flex select-none gap-12 overflow-hidden grayscale">
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              aria-hidden={index === 1}
              className="flex min-w-full shrink-0 animate-scroll items-center justify-around gap-12"
            >
              {images.map(({ name, src }) => (
                <div className="mx-5 h-16 w-40" key={name}>
                  <Image
                    className="h-full w-full object-contain"
                    src={src}
                    alt={name}
                    width={1000}
                    height={500}
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
