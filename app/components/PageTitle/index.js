import React from 'react';

import { Container } from 'app/sc/Container';
import { PageTitleBlock } from './style';

const PageTitle = ({ children }) => {
   return (
      <PageTitleBlock>
         <Container>{children}</Container>
      </PageTitleBlock>
   );
};

export { PageTitle };
