import Marquee from "react-fast-marquee";

interface LogoMarqueeProps {
  images: string[];
  speed?: number;
  style?: React.CSSProperties;
  direction?: string;
}

const LogoMarquee = ({ images, speed = 50, style, direction="left" }:LogoMarqueeProps) => {
  return (
    <Marquee speed={speed} style={style} direction={direction} autoFill={true} gradient={false}>
      {images.map((image, index) => (
        <img key={index} className="logo" src={image} alt={`Logo ${index + 1}`} />
      ))}
    </Marquee>
  );
};

export default LogoMarquee;