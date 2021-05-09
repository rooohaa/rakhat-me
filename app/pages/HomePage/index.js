import React from 'react';

import { IntroSection } from './IntroSection';
import { Services } from './Services';
import { Facts } from './Facts';

const HomePageComponent = () => {
   return (
      <main>
         <IntroSection />
         <Services />
         <Facts />
      </main>
   );
};

export { HomePageComponent };
