import React from 'react';

import { links } from './mock';
import { HeaderSection } from './style';
import { Container } from 'app/sc/Container';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
   const { pathname } = useRouter();

   return (
      <HeaderSection>
         <Container>
            <Link href="/">
               <a className="logo">
                  <img src="/images/logo.png" alt="My logo" />
                  <span>Rakhat.A</span>
               </a>
            </Link>

            <nav>
               <ul>
                  {links.map(({ id, path, title }) => (
                     <li key={id}>
                        <Link href={path}>
                           <a className={pathname === path && 'active'}>
                              {title}
                           </a>
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </Container>
      </HeaderSection>
   );
};

export { Header };
