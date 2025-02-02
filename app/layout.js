import { Quicksand } from "next/font/google";
import "./_styles/globals.css"
import Header from "./_components/Header";

const QuickaSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: {
    template: "%s | My Coffee",
    default: "Welcome | My Coffee",
  },
  description:
    "My personal coffee database. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${QuickaSand.className} antialiased min-h-full bg-primary-50 flex flex-col w-screen p-0 overflow-x-hidden`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
