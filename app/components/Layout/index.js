import React, { Fragment } from 'react';

import { Header, Footer } from 'app/components';

const Layout = ({ children }) => {
   return (
      <Fragment>
         <Header />
         {children}
         <Footer />
      </Fragment>
   );
};

export { Layout };
