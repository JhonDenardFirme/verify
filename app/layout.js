import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Verify",
  description: "Securing the Brighter Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className="bg-neutral-950"
      >
        {children}
      </body>
    </html>
  );
}
