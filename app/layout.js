import { Roboto } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";
import { Toaster } from "react-hot-toast";
import Modal from "./_components/Modal";
import { ModalProvider } from "./_context/ModalContext";
import Footer from "./_components/Footer";

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
      <head>
        <link rel="icon" href="/icons/favicon.svg" />
        {/* other head tags */}
      </head>
      <body
        className={`${RobotoFont.className} relative overflow-auto antialiased h-screen bg-primary-50 flex flex-col w-screen p-0 overflow-x-hidden`}
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
        <ModalProvider>
          <Header />
          {children}
          {/* <Footer/> */}
        </ModalProvider>
      </body>
    </html>
  );
}
