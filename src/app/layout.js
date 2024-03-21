import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "数学英雄 ｜ SPM Math & Add. Math" ,
  description: "Math & Add. Math 参考资料. SPM Math & Add. Math references.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <GoogleAnalytics gaId="G-7SREZJMDLN" /> */}
      <body className={inter.className}>{children}</body>
    </html>
    
  );
}
