import React from 'react';
import styled from 'styled-components';

const TagItem = styled.li`
   list-style: none;
   font-size: 12px;
   color: #666;
   line-height: 17px;
   padding: 2px 7px;
   background-color: #fff;
   border: 2px solid #e5e5e5;
   border-radius: 3px;
   margin-right: 7px;
`;

const TechTag = ({ tag }) => {
   return <TagItem>{tag}</TagItem>;
};

export { TechTag };
