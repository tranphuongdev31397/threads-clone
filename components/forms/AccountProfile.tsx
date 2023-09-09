"use client";
import { UserInfo } from "@/models";
import * as React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccountProfileSchema } from "@/lib/schemas";
import { Input } from "../ui/input";
import * as z from "zod";
import { Button } from "../ui/button";
import Image from "next/image";
import { SVGS } from "@/public/assets/imagePaths";
import { Textarea } from "../ui/textarea";

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

  const handleUpdloadImgage = (e: React.ChangeEvent, fieldChange: any) => {
    e.preventDefault();
  };
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof AccountProfileSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                      placeholder="shadcn"
                      className="hidden"
                      accept="image/*"
                      onChange={(e: React.ChangeEvent) =>
                        handleUpdloadImgage(e, field.onChange)
                      }
                    />
                  </FormControl>
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
