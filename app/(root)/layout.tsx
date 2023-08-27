// app/layout.tsx
import {
  BottomNav,
  LeftSideBar,
  RightSideBar,
  TopNav,
} from "@/components/shared";
import AppProvider from "@/contexts/AppProvider";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thread",
  description:
    "Welcome to the Thread, an social media application clone by DarekTran",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <TopNav />

      <main className="flex flex-row">
        <LeftSideBar />
        <section className="main-container">
          <div className="w-full max-w-4xl">{children}</div>
        </section>
        <RightSideBar />
      </main>
      <BottomNav />
    </AppProvider>
  );
}
