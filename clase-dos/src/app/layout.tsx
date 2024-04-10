import "./globals.css";
import NavBar from "@/app/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
