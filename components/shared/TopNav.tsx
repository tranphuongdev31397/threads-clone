"use client";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Organization } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ModeToggle } from "../themes/ModeToggle";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export interface TopNavProps {}

const TopNav = React.memo(function TopNav(props: TopNavProps) {
  const { theme } = useTheme();
  return (
    <nav className="topbar">
      <Link href={"/"} className="flex items-center justify-start gap-4">
        <Image src="/assets/logo.svg" alt="logo" height={28} width={28} />
        <p className="text-dark-2 text-heading3-bold dark:text-light-1 max-xs:hidden">
          Threads
        </p>
      </Link>

      <div className="flex flex-row items-center gap-2">
        <ModeToggle />

        <OrganizationSwitcher
          appearance={{
            elements: { organizationSwitcherTrigger: "p-2" },
            baseTheme: theme === "dark" ? dark : undefined,
          }}
        />
      </div>
    </nav>
  );
});

export default TopNav;
