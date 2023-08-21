import { UserInfo } from "@/models";
import * as z from "zod";
export const AccountProfileSchema = z.object<z.ZodRawShape>({
  username: z.string().min(3).max(12),
  bio: z.string().min(3).max(1000),
  name: z.string().min(3).max(20),
  image: z.string().url().nonempty(),
});
