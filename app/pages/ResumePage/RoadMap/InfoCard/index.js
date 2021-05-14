import React from 'react';

import { CardWrapper } from './style';

const InfoCard = ({ year, place, position, descr }) => {
   return (
      <CardWrapper>
         <div className="card-head">
            <div>{year}</div>
            <span>{place}</span>
         </div>
         <h4>{position}</h4>
         <p>{descr}</p>
      </CardWrapper>
   );
};

export { InfoCard };
