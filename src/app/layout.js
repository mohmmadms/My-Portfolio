import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mohammad Al Smadi | Portfolio',
  description: 'Creative designer and frontend developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a] text-white`}>
        {/* <CursorEffect /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
