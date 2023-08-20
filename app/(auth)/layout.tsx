// app/layout.tsx
import "../globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

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
        <body className={`${inter.className} bg-black`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
