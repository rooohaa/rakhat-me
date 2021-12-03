import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <link
               href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
               rel="stylesheet"
            />
            <meta
               name="description"
               content="Hi there :), I'm Rakhat, Web developer from Nur-Sultan, KZ"
            />
            <meta
               name="keywords"
               content="Web developer, Frontend, Frontend Developer, JavaScript"
            />
            <meta name="theme-color" content="#54ca95" />
            <title>Rakhat Alpysbai</title>
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
