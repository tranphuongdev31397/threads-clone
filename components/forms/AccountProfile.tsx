"use client";
import { UserInfo } from "@/models";
import * as React from "react";

export interface AccountProfileProps {
  user: UserInfo;
  btnTitle: string;
}

export default function AccountProfile(props: AccountProfileProps) {
  return <div className="text-light-2">Account Profile</div>;
}
