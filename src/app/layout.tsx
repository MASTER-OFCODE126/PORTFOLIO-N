import "./globals.css";
import "./App.css";
import { Providers } from "./providers";
import { Icon, icons } from "lucide-react";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
  icons:{
    icon:"/favicon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}