import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "admin-hub",
  description: "An admin dashboard for managing data and users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
