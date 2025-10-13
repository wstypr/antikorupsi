import Navbar from "@/app/components/Navbar";
import Logo from "@/app/components/Logo";

export default function Header() {
  return (
    <header className="container mx-auto px-6 lg:px-12 pt-6 pb-4">
      <div className="flex justify-between items-center border-b border-neutral-200 pb-6">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
