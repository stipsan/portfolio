"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Star } from "./Icons/Star";

export function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between space-y-5 md:space-y-0 items-center mt-4 md:mt-8 md:mb-24">
      <Link href="/">
        <div className="flex flex-row items-center space-x-2">
          <Star />
          <p className="font-subheading font-medium text-primary text-xl">Alvar Lagerlöf</p>
        </div>
      </Link>

      <ul className="flex flex-wrap flex-row justify-center space-x-2">
        <NavLink href="/" name="Home" />
        <NavLink href="/about" name="About" />
        <NavLink href="/projects" name="Projects" />
        <NavLink href="/blog" name="Blog" />
      </ul>
    </nav>
  );
}

type NavLinkProps = {
  href: string;
  name: string;
};

function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname == href;

  return (
    <li>
      <Link
        href={href}
        className={
          "flex flex-row items-center font-medium py-1 px-3" +
          (active ? " bg-primary text-white rounded-full" : "")
        }
      >
        {name}
      </Link>
    </li>
  );
}
