// app/layout.tsx
import "../globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import {
  BottomNav,
  LeftSideBar,
  RightSideBar,
  TopNav,
} from "@/components/shared";

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopNav />

          <main>
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <BottomNav />
        </body>
      </html>
    </ClerkProvider>
  );
}
