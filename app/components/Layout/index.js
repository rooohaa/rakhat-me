import React, { Fragment } from 'react'

import { Header, Footer } from 'app/components'
import Head from 'next/head'

const Layout = ({ children, title }) => {
   return (
      <Fragment>
         <Head>
            <title>
               {title ? `Rakhat Alpysbai | ${title}` : 'Rakhat Alpysbai'}
            </title>
         </Head>
         <Header />
         {children}
         <Footer />
      </Fragment>
   )
}

export { Layout }
