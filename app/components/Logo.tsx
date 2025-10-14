import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Logo() {
  return (
    <Link href="/">
      <div className={`text-[2rem] font-extrabold ${inter.className}`}>
        ak<span className="text-red-800">.</span>
      </div>
    </Link>
  );
}
