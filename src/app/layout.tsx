import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextTopLoader />

          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="system"
          >
            <Aoscompo>
              <Header />
              {children}
              
              <ScrollToTop />
            </Aoscompo>
          </ThemeProvider>
      </body>
    </html>
  );
}