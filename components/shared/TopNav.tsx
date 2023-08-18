"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface TopNavProps {}

const TopNav = React.memo(function TopNav(props: TopNavProps) {
  return (
    <nav className="topbar">
      <Link href={"/"} className="flex items-center justify-start gap-4">
        <Image src="/assets/logo.svg" alt="logo" height={28} width={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
    </nav>
  );
});

export default TopNav;
