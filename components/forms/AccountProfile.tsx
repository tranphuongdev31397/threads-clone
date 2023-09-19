"use client";
import useFileReader from "@/hooks/useFileReader";
import { updateUser } from "@/lib/actions/user.actions";
import { AccountProfileSchema } from "@/lib/schemas";
import { useUploadThing } from "@/lib/uploadthings";
import { isBase64Image } from "@/lib/utils";
import { UserInfo } from "@/models";
import { SVGS } from "@/public/assets/imagePaths";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ROUTES } from "@/routes";

export interface AccountProfileProps {
  user: UserInfo;
  btnTitle: string;
}

export default function AccountProfile({ user }: AccountProfileProps) {
  const form = useForm({
    resolver: zodResolver(AccountProfileSchema),
    defaultValues: {
      name: user?.name || "",
      username: user?.username || "",
      bio: user?.bio || "",
      image: user?.image || "",
    },
  });

  const router = useRouter();
  const pathname = usePathname();

  const { blobUrls, files, onChangeFiles } = useFileReader();

  const { startUpload } = useUploadThing("media");

  const handleUpdloadImgage = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldChange: any
  ) => {
    e.preventDefault();
    onChangeFiles(e, fieldChange);
  };
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof AccountProfileSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    //Because the image value is always the URL taken from the clerks => If the image changes from the input, the image value is base64
    const isHasChangeImage = isBase64Image(values.image);

    if (isHasChangeImage) {
      const imageRes = await startUpload(files);
      console.log(imageRes);
      if (imageRes && imageRes[0].fileUrl) {
        values.image = imageRes[0].fileUrl;
      }
    }

    await updateUser({
      userId: user.id,
      bio: values.bio,
      image: values.image,
      name: values.name,
      username: values.username,
      path: pathname,
    });

    if (pathname === ROUTES.profile_edit) {
      //Current page is edit profile
      router.back();
    } else {
      //Current page is onboarding
      router.push("/");
    }
  }
  return (
    <div className="text-dark-2 dark:text-light-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-row items-center justify-start gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="self-stretch">
                  <FormLabel
                    htmlFor="image"
                    className="flex items-center justify-center h-full p-4 overflow-hidden border-2 rounded-full border-light-2 dark:border-dark-2 bg-slate-50 aspect-square"
                  >
                    {field.value ? (
                      <Image
                        src={field.value}
                        height={60}
                        width={60}
                        alt="profile image"
                      />
                    ) : (
                      <Image
                        src={SVGS.profile}
                        height={24}
                        width={24}
                        alt="profile image"
                      />
                    )}
                  </FormLabel>
                  <FormControl hidden>
                    <Input
                      type="file"
                      id="image"
                      multiple
                      placeholder="shadcn"
                      className="hidden"
                      accept="image/*"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleUpdloadImgage(e, field.onChange)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    rows={5}
                    placeholder="Write Bio"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full bg-primary-500" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
