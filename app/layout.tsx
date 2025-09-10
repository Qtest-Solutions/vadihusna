import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Vadi Husna Public School - Excellence through Education',
  description: 'CBSE affiliated school in Kozhikode, Kerala. Founded 1996. Quality education from LKG to XII with holistic development and character building.',
  keywords: 'VHPS, Vadi Husna Public School, CBSE school Kozhikode, Kerala education, English medium school',
  authors: [{ name: 'Vadi Husna Public School' }],
  openGraph: {
    title: 'Vadi Husna Public School - Excellence through Education',
    description: 'CBSE affiliated school in Kozhikode, Kerala offering quality education from LKG to XII',
    type: 'website',
    url: 'https://www.vadihusnaschool.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}