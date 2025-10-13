import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Logo() {
  return (
    <div className={`text-[2rem] font-extrabold ${inter.className}`}>
      ak<span className="text-red-600">.</span>
    </div>
  );
}
