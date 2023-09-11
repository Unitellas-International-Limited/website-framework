import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative block h-20 w-48">
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        layout="fill"
        objectFit="contain"
      />
    </Link>
  );
}
