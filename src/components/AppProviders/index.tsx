import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}

export default AppProviders;
