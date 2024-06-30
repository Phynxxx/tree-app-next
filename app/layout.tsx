import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import BottomNav from "@/components/BottomNav";
import { ThirdwebProvider } from "thirdweb/react";
import { useUserStore } from "@/lib/stores/user";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFTree",
  description: "The tree planting app",
};

// const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = useUserStore((state) => state.user);
  // const updateUser = useUserStore((state) => state.updateUser)

  return (
    <html lang="en">
      <body
        className={cn(
          "relative font-sans antialiased h-full max-w-xl mx-auto",
          inter.className
        )}
      >
        <main className="relative flex flex-col">
          <div className="flex-grow flex-1 pb-[76.8px]">
            <ThirdwebProvider>
              {/* <QueryClientProvider client={queryClient}> */}
                {children}
              {/* </QueryClientProvider> */}
            </ThirdwebProvider>
          </div>
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
