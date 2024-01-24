import Link from "next/link";
import { ModeToggle } from "./common/ModeToggle";

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <li className=" z-40 w-1/3  px-4 py-2 font-semibold tracking-wider  transition duration-300 ease-in-out  hover:text-primary-foreground hover:bg-primary  rounded-3xl flex items-center justify-center">
    <Link href={href} className="">
      {label}
    </Link>
  </li>
);

export default function Navbar() {
  return (
    <nav className=" py-2 bg-primary-foreground text-primary ">
      <ul className="w-3/12 mx-auto flex  gap-2  items-center rounded-3xl z-20">
        <NavItem href="/" label="Home" />
        <NavItem href="/" label="About" />
        <NavItem href="/word-counter" label="Projects" />
        <ModeToggle />
      </ul>
    </nav>
  );
}
