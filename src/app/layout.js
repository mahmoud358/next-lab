import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lab1",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en">
      <body className={`${inter.className} text-bg-dark`}>
      <AppRouterCacheProvider>
        
        <div>
        {children}
        </div>
       
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
