import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="true"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
               rel="stylesheet"
            />
            <link rel="icon" href="/logo.svg" />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
