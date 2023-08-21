// app/layout.tsx
import AppProvider from "@/contexts/AppProvider";
import "../globals.css";

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
  return <AppProvider>{children}</AppProvider>;
}
