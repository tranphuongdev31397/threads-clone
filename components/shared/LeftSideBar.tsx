"use client";
import { sidebarLinks } from "@/constants";
import { SVGS } from "@/public/assets/imagePaths";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

export interface LeftSideBarProps {}

const LeftSideBar = React.memo(function LeftSideBar(props: LeftSideBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="text-white custom-scrollbar leftsidebar">
      <div className="flex flex-col flex-1 w-full gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              className={`leftsidebar_link ${isActive ? "bg-primary-500" : ""}`}
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
                className={` text-light-1 max-lg:hidden ${
                  isActive ? "font-semibold" : ""
                }`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="px-6 mt-10">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("sign-in")}>
            <div className="leftsidebar_link">
              <Image
                width={24}
                height={24}
                src={SVGS.logout}
                alt={"signout-btn"}
              />

              <p className="text-light-1 max-lg:hidden">Sign out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
});

export default LeftSideBar;
