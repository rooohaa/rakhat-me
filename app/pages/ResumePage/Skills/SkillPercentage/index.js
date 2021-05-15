import React from 'react';

import { SkillWrap } from './style';

const SkillPercentage = ({ title, percent }) => {
   return (
      <SkillWrap>
         <div className="head">
            <h6>{title}</h6>
            <span>{percent + '%'}</span>
         </div>
         <div className="wrap">
            <div className="inner" style={{ width: percent + '%' }} />
         </div>
      </SkillWrap>
   );
};

export { SkillPercentage };
