import React from 'react'
import { styled } from 'styled-components'
import { BodyRectangleTop } from './bodyRectangle39';
import { BodyRectangeBottom } from './bodyRectange2';
import { SideCampaign } from './sideCampaign';

export const RectangleTopStyle=styled.div`
width: 793px;
height: 206px;
flex-shrink: 0;
border-radius: 3px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.10);
`;
export const RectangleBottomStyle=styled.div`
width: 793px;
height: 331px;
flex-shrink: 0;
border-radius: 3px;
margin-top:20px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.10);
`;
export const BodyLeft=styled.div`
display:flex;
flex-direction:column;
margin-left:20px;
`;

export const AsideRight=styled.div`
width: 367px;
height: 557px;
flex-shrink: 0;
border-radius: 3px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.10);
`;
export const Body=styled.div`
display:flex;
justify-content:space-between;
width: 1220px;
height: 746px;
flex-shrink: 0;
background: #F8F8F9;

`;

export const BodyMain=()=> {
  return (
    <Body>
        <BodyLeft>
            <RectangleTopStyle><BodyRectangleTop/></RectangleTopStyle>
            <RectangleBottomStyle><BodyRectangeBottom/></RectangleBottomStyle>
        </BodyLeft>
        <AsideRight>
        <SideCampaign/>
        </AsideRight>
    </Body>
  )
}
