import React from 'react'
import { BodyRectangleTop } from './bodyRectangle39';
import { BodyRectangeBottom } from './bodyRectange2';
import { SideCampaign } from './sideCampaign';
import { Body, BodyLeft, RectangleBottomStyle, RectangleTopStyle, AsideRight } from "../styledComponents/styles";

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
