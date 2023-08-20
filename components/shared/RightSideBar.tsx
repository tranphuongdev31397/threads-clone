"use client";
import Image from "next/image";
import * as React from "react";

export interface RightSideBarProps {}

const RightSideBar = React.memo(function RightSideBar(
  props: RightSideBarProps
) {
  return (
    <section className="custom-scrollbar rightsidebar text-light-1">
      rightside
    </section>
  );
});

export default RightSideBar;
