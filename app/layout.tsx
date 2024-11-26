import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Redux Examples",
  description: "MRT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className="scroll-smooth" lang="en">
      <head>
        {/* Move script here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener("DOMContentLoaded", function() {
              const currentTheme = localStorage.getItem("theme");
              if (currentTheme === "dark" || (!currentTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            });
          `,
          }}
        />
      </head>
      <body className={`bg-background antialiased container mx-auto w-full h-screen flex flex-col gap-8 p-6 py-10`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
