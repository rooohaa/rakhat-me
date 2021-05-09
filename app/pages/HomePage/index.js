import React from 'react';

import { IntroSection } from './IntroSection';
import { Services } from './Services';

const HomePageComponent = () => {
   return (
      <main>
         <IntroSection />
         <Services />
      </main>
   );
};

export { HomePageComponent };
