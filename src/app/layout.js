import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find Devs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`template-color-1 home-sticky spybody white-version ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
