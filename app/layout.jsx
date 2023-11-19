
import Navbar from "@components/Navbar";

import "@styles/global.css";

export const metadata = {
  title: "Galgalu",
  description: "Gemstone Exporter in Ethiopia",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main className="">{children}</main>
        
      </body>
    </html>
  );
};

export default Layout;
