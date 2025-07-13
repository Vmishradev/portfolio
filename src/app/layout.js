import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: {
    default: "Modern Portfolio",
    template: "%s | Modern Portfolio",
  },
  description:
    "A modern portfolio website showcasing innovative design and development expertise, built with Next.js and contemporary web technologies.",
  keywords: [
    "portfolio",
    "web development",
    "design",
    "next.js",
    "react",
    "typescript",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "Modern Portfolio",
    description:
      "A modern portfolio website showcasing innovative design and development expertise",
    url: "https://yourportfolio.com",
    siteName: "Modern Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Portfolio",
    description:
      "A modern portfolio website showcasing innovative design and development expertise",
    creator: "@yourusername",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "portfolio",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          enableColorScheme
          storageKey="portfolio-theme"
          themes={["light", "dark", "system"]}
        >
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
