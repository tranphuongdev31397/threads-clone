import { ClerkProvider } from "@clerk/nextjs";
import * as React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";
const inter = Inter({ subsets: ["latin"] });

export interface AppProviderProps {
  children?: React.ReactNode;
}

const LibProvider = ({ children }: AppProviderProps) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {children}
    </ClerkProvider>
  );
};

const MyAppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
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
