import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ children, title, isHome }) => {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>
         <Header isHome={isHome} />
         <main>{children}</main>
      </>
   );
};

export default Layout;
