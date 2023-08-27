import { dark } from "@clerk/themes";
import { AppProviderProps } from "./AppProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { ThemeProvider } from "./ThemeProvider";

const LibProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ClerkProvider>{children}</ClerkProvider>
    </ThemeProvider>
  );
};

export default LibProvider;
