"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { ROUTES } from "@/routes";

interface Params {
  userId: string;
  username: string;
  bio: string;
  image: string;
  path: string;
  name: string;
}

export async function updateUser({
  userId,
  username,
  path,
  ...params
}: Params): Promise<void> {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      { id: userId },
      { username: username.toLowerCase(), ...params, onboarded: true },
      { upsert: true }
    );

    if (path === ROUTES.profile_edit) {
      //Clear cache when update profile in update profile page
      revalidatePath(path);
    }
  } catch (error: any) {
    throw Error(`Failed to create/update user: ${error.message}`);
  }
}
