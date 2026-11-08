"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home", match: (p: string) => p === "/labs" },
  { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1", match: (p: string) => p.endsWith("/lab1") || p.includes("/lab1/") },
  { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2", match: (p: string) => p.includes("/lab2") },
  { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3", match: (p: string) => p.includes("/lab3") },
  { href: "/labs/lab4", id: "wd-lab4-link", label: "Lab 4", match: (p: string) => p.includes("/lab4") },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
  { href: "https://kambaz.dev/book/ch3", id: "wd-book-ch3-link", label: "Book Ch3", match: () => false },
] as const;

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <ul className="flex flex-col gap-2 p-2">
      {LINKS.map((link) => {
        const active = link.match(pathname);
        return (
          <li key={link.id}>
            <Link
              href={link.href}
              id={link.id}
              className={
                active
                  ? "block rounded bg-blue-600 px-2 py-1 text-white no-underline"
                  : "block rounded px-2 py-1 text-blue-600 hover:bg-blue-300"
              }
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}