import React from "react";
import { styled } from "styled-components";

export const BottomBoxHead = styled.div`
  width: 793px;
  height: 42px;
  flex-shrink: 0;
  background-color: #E4E7EA;
`;
export const HeaderText = styled.div`
width: 222px;
color: #3A4A5B;
font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-top:10px;
padding-bottom:11px;
padding-left:17px;
`;
export const BodyRectangeBottom = () => {
  return (
    <div>
      <BottomBoxHead><HeaderText>Transaction and Survey Trend</HeaderText></BottomBoxHead>
    </div>
  );
};
