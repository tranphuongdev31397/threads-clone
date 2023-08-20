"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

export interface BottomNavProps {}

const BottomNav = React.memo(function BottomNav(props: BottomNavProps) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              className={`bottombar_link ${isActive ? "bg-primary-500" : ""}`}
              key={link.route}
              href={link.route}
            >
              <Image
                width={24}
                height={24}
                src={link.imgURL}
                alt={link.label}
              />

              <p
                className={`text-light-1 max-sm:hidden ${
                  isActive ? "font-semibold" : ""
                }`}
              >
                {link.label.split(" ")[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
});

export default BottomNav;
