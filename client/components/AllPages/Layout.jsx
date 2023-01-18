import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ children, title }) => {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>
         <Header />
         <main>{children}</main>
      </>
   );
};

export default Layout;