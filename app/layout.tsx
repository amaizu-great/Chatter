import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextAuthProvider } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chatter",
  description: "Your Gen Z social app",
};
//prettier-ignore
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
