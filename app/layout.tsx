
import React from "react";
import Header from "../module/components/ui/header"; 
import Footer from "../module/components/ui/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MOE-Novel</title>
      </head>
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
