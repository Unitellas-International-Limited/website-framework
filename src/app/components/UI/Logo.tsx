import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative block h-20 w-48">
      <Image
        src="/assets/images/logo.webp"
        className="object-contain"
        alt="Unitellas International Limited Logo"
        fill
        priority
      />
    </Link>
  );
}
