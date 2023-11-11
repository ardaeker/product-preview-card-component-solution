import "@/styles/tailwind.css";
import { fraunces, montserrat } from "@/assets/fonts/font";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arda Eker - Product Preview Card Component Solution",
  description:
    "Hello, I'm Arda Eker. This website showcases my solution to the <***> challenge on Frontend Mentor.",
  authors: [{ name: "Arda Eker", url: "https://www.ardaeker.com" }],
  // metadataBase: new URL("<***>"),
  // openGraph: {
  //   type: "website",
  //   url: "/",
  //   title: "Arda Eker - Product Preview Card Component Solution",
  //   description:
  //     "Hello, I'm Arda Eker. This website showcases my solution to the Product Preview Card Component Challenge on Frontend Mentor.",
  //   images: [
  //     {
  //       url: "/preview.png",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
