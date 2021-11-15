import React from 'react';

import { IntroWrapper } from './style';
import { Container } from 'app/sc/Container';

import Image from 'next/image';
import Link from 'next/link';

const IntroSection = () => {
   return (
      <IntroWrapper>
         <Container>
            <div className="photo">
               <Image
                  src="/images/me.jpg"
                  alt="Rakhat's photo"
                  width={385}
                  height={385}
               />
            </div>

            <div className="descr">
               <span>Web Developer</span>
               <h1>Rakhat Alpysbai</h1>
               <p>
                  Hello! Welcome to my personal portfolio website. I'm Web
                  Developer & Programmer living in Nur-Sultan, KZ. I make
                  high-quality Web applications with modern tech stack.
               </p>
               <div>
                  <a href="/cv.pdf" download className="link l-green">
                     Download CV
                  </a>
                  <Link href="/contact">
                     <a className="link l-gray">Contact</a>
                  </Link>
               </div>
            </div>
         </Container>
      </IntroWrapper>
   );
};

export { IntroSection };
