import React from 'react';

import { Layout, PageTitle } from 'app/components';
import { ContactPageComponent } from 'app/pages';

const ContactPage = () => {
   return (
      <Layout>
         <PageTitle>
            <h2>Contact</h2>
            <span>Get in Touch</span>
         </PageTitle>
         <ContactPageComponent />
      </Layout>
   );
};

export default ContactPage;
