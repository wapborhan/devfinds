import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.min.css";
import "../assets/css/custom.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find Dev's",
  description: " Connect and Discover with Skilled Developers.",
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
