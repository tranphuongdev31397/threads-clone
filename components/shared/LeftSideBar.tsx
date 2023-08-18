"use client";
import Image from "next/image";
import * as React from "react";

export interface LeftSideBarProps {}

const LeftSideBar = React.memo(function LeftSideBar(props: LeftSideBarProps) {
  return <section>LeftSide</section>;
});

export default LeftSideBar;
