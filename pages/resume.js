import React from 'react';

import { Layout, PageTitle } from 'app/components';
import { ResumePageComponent } from 'app/pages';

const ResumePage = () => {
   return (
      <Layout title="Resume">
         <PageTitle>
            <h2>Resume</h2>
            <span>2 years of experience</span>
         </PageTitle>
         <ResumePageComponent />
      </Layout>
   );
};

export default ResumePage;
