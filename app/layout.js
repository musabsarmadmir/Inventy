import { Inter } from "next/font/google";
import "./globals.css";

// Import the Poppins font with necessary weights
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Inventy",
  description: "Effortlessly manage your inventory with Inventy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
