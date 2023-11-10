import type { Metadata } from "next";
import { Providers } from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Narrative.ai",
  description: "Rolling out",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <div className="max-w-xl m-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
