import "@mantine/core/styles.css";
import "./globals.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Yengner Bermudez | Backend & Infrastructure Engineer",
  description:
    "Backend and infrastructure engineer, former Citi Technology Summer Analyst, and founder of DeepVisor. Explore enterprise container platforms, data pipelines, and independent products.",
  openGraph: {
    title: "Yengner Bermudez | Backend & Infrastructure Engineer",
    description:
      "Enterprise systems. Reliable infrastructure. Products built with intent.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
      </body>
    </html>
  );
}
