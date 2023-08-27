import { Inter } from "next/font/google";
import * as React from "react";
import LibProvider from "./LibProvider";
const inter = Inter({ subsets: ["latin"] });

export interface AppProviderProps {
  children?: React.ReactNode;
  theme?: any | undefined;
}

const MyAppProvider = ({ children }: AppProviderProps) => {
  return <>{children}</>;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <LibProvider>
          <MyAppProvider>{children}</MyAppProvider>
        </LibProvider>
      </body>
    </html>
  );
}
