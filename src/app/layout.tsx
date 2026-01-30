import '@mantine/core/styles.css';
import './globals.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Fraunces, Space_Grotesk } from "next/font/google";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: 'Yengner Bermudez',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${sansFont.variable} ${displayFont.variable}`}>
        <MantineProvider
          defaultColorScheme="auto"
          theme={{
            fontFamily: "var(--font-sans)",
            headings: { fontFamily: "var(--font-display)" },
            primaryColor: "teal",
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
