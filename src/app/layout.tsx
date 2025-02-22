import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import { QueryProvider } from "@/providers/queryProvider";
import { ErrorProvider } from "@/providers/errorProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorProvider>
          <QueryProvider>{children}</QueryProvider>
        </ErrorProvider>
      </body>
    </html>
  );
}
