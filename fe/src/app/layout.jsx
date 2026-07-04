import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from "./components/Header";
import ChatbotWidget from "./components/ChatbotWidget";
import MiniCartDrawer from "./components/MiniCartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tai Nghe Không Dây Chống Ồn Alpha Works | Trải Nghiệm Âm Thanh Đỉnh Cao",
  description: "Khám phá tai nghe không dây chống ồn Alpha Works với thiết kế hiện đại, chất âm sống động và công nghệ cách âm tiên tiến. Mua ngay để nhận ưu đãi hấp dẫn!",
  openGraph: {
    title: "Tai Nghe Không Dây Chống Ồn Alpha Works",
    description: "Khám phá tai nghe không dây chống ồn Alpha Works với thiết kế hiện đại, chất âm sống động và công nghệ cách âm tiên tiến.",
    url: "https://alphaworks-earbuds.com", 
    siteName: "Alpha Works Vietnam",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <MiniCartDrawer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
