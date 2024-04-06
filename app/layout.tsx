import "./globals.css";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import ToTop from "@/components/ToTop";
import Search from "@/components/search/Search";
import SearchTrigger from "@/components/search/SearchTrigger";
import Settings from "@/components/Settings";
import BackgroundImage from "@/components/background-image/BackgroundImage";

const font = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
            </head>
            <body className={cn(font.className, "static")}>
                <Providers>
                    <BackgroundImage />
                    <div className={"absolute top-0 w-full"}>
                        <div className={"flex flex-col"}>
                            <Header />
                            {children}
                            <Footer />
                            <TailwindIndicator />
                            <ToTop />
                            <Search />
                            <SearchTrigger />
                            <Settings />
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
