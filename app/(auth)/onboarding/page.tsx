import AccountProfile from "@/components/forms/AccountProfile";
import { User as UserData, UserInfo } from "@/models";
import { currentUser } from "@clerk/nextjs";
import { type User } from "@clerk/nextjs/server";

const Page = async () => {
  const user: User | null = await currentUser();
  const userData: Partial<UserData> = {};

  const userInfo: UserInfo = {
    id: user?.id || "",
    objectId: userData._id as string,
    username: userData.username as string,
    bio: userData.bio || "",
    image: userData?.image || user?.imageUrl || "",
    name: userData.name || userData.firstname || user?.firstName || "",
  };
  return (
    <main className="flex flex-col justify-start max-w-3xl px-10 py-20 mx-auto">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-dark-2 dark:text-light-2">
        Complete your profile now to use Threads
      </p>

      <section className="p-10 border-2 mt-9 bg-light-1 dark:bg-dark-2 border-light-4 dark:border-dark-4 rounded-xl">
        <AccountProfile user={userInfo} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default Page;
