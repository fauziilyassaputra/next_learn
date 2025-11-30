// import type { Metadata } from "next";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { getSetting } from "./queries/getSetting";

const fontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const setting = getSetting();

  return {
    title: {
      template: `%s | ${(await setting).siteName} `,
      default: "bangboo",
    },
    description: "information about bangboo",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // throw new Error("Error thrown in Home Page");
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
