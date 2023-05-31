import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import Provider from "../../components/Provider";
import "./globals.css";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Polaris",
  description: "Crew Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col min-h-screen dark:bg-neutral-900 h-screen`}
      >
        <Provider>
          <Navbar />
          <div className="mb-auto"> {children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
