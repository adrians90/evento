"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();
  return (
    <header className="flex items-center justify-between px-3 sm:px-9 border-b border-white/10 h-14 ">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx("hover:text-white transition", {
                "text-white": activePathname === route.path,
                "text-white/50": activePathname !== route.path,
              })}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
