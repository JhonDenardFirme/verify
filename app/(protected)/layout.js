

import Navbar from "@/components/home/Navbar";



export const metadata = {
  title: "Verify",
  description: "Securing the Brighter Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
