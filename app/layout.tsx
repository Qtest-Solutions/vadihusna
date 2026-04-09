import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import LayoutShell from "@/components/LayoutShell";
import dynamic from "next/dynamic";

// Load Toaster only on the client to avoid any SSR hydration quirks
const ToasterClient = dynamic(
  () => import("@/components/ui/toaster").then((m) => m.Toaster),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Vadi Husna Public School | Excellence through Education",
    template: "%s | Vadi Husna Public School",
  },
  description:
    "CBSE affiliated school in Kozhikode, Kerala. Founded 1996. Quality education from LKG to XII with holistic development and character building.",
  keywords: [
    "Vadi Husna Public School",
    "VHPS Elettil",
    "CBSE School Kozhikode",
    "Best School in Kerala",
    "English Medium School Elettil",
    "Quality Education Kozhikode",
  ],
  authors: [{ name: "Vadi Husna Public School" }],
  creator: "Vadi Husna Public School",
  publisher: "Vadi Husna Public School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vadi Husna Public School | Excellence through Education",
    description:
      "CBSE affiliated school in Kozhikode, Kerala offering quality education from LKG to XII with holistic development.",
    url: "https://www.vadihusnaschool.com",
    siteName: "Vadi Husna Public School",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vadi Husna Public School | Excellence through Education",
    description:
      "CBSE affiliated school in Kozhikode, Kerala offering quality education from LKG to XII.",
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png" },
    ],
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
        <LayoutShell>{children}</LayoutShell>
        <ToasterClient />
      </body>
    </html>
  );
}
