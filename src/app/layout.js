import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ribas",
  description: ":3",
  openGraph: {
    title: "Ribas",
    description: ":3",
    url: "j-ribas.github.io",
    siteName: "Ribas",
    images: [
      {
        url: "https://j-ribas.github.io/og.png",
        width: 1920,
        height: 1080,
        alt: 'Terminal window saying "Hello, I\'m joao"',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "bernardo&apos;s site",
    description: "Personal site for hellobernardo",
    creator: "@helloimbernardo",
    creatorId: "1145366758376841216",
    images: {
      url: "https://j-ribas.github.io/og.png",
      alt: 'Terminal window saying "Hello, I\'m bernardo"',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
