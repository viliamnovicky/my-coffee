import { Roboto } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";
import { Toaster } from "react-hot-toast";

const RobotoFont = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | My Coffee",
    default: "Welcome | My Coffee",
  },
  description: "My personal coffee database. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${RobotoFont.className} antialiased min-h-screen bg-primary-50 flex flex-col w-screen p-0 overflow-x-hidden`}
      >
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "#a6d96a",
                color: "#fff",
              },
            },
            error: {
              style: {
                background: "#d7191c",
                color: "#fff",
              },
            },
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
