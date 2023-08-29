import React from "react";
import { styled } from "styled-components";

export const BottomBoxHead = styled.div`
  width: 793px;
  height: 42px;
  flex-shrink: 0;
  background-color: #e4e7ea;
`;
export const HeaderText = styled.div`
  width: 222px;
  color: #3a4a5b;
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 10px;
  padding-bottom: 11px;
  padding-left: 17px;
`;
export const BlueCircle = styled.div`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #3d7ab6;
`;
export const GreenCircle = styled.div`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--green-t-25, #5dc288);
`;
export const DivSecongLeft = styled.div`
 display:flex;
 width:65%;
`;
export const DivSecongRight = styled.div`
 display:flex;
 width:35%;
`;
export const InnerDivRight = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
`;

export const InnerDivTexts = styled.div`
color: #000;
font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 12px;
opacity: 0.65;
`;

export const BodyRectangeBottom = () => {
  return (
    <div>
      <BottomBoxHead>
        <HeaderText>Transaction and Survey Trend</HeaderText>
      </BottomBoxHead>
      <div>
      <DivSecongLeft>
        <InnerDivRight><BlueCircle></BlueCircle><InnerDivTexts>Transactions Completed</InnerDivTexts></InnerDivRight>
        <InnerDivRight><GreenCircle></GreenCircle><InnerDivTexts>Surveys Completed</InnerDivTexts></InnerDivRight>
      </DivSecongLeft>
      
      <DivSecongRight></DivSecongRight>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
