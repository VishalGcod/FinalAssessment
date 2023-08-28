import React from "react";
import { styled } from "styled-components";
import { DrawerIcon } from "../assets/drawerIcon";
import { ChevronRight } from "./chevronRight";

export const HeaderDivFull = styled.div`
  width: 1219px;
  height: 70px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
`;
export const DrawerIconStyle = styled.div`
  padding: 23px 20px 1175px 20px;
`;
export const DrawerFontStyle = styled.div`
  color: var(--grey-s-10, #415367);
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;
export const DrawerFontPadding = styled.div`
  padding: 14px;
`;

export const DrawerFontDiv = styled.div`
color: var(--blue-t-15, #3D7AB6);
font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.13px;
text-transform: capitalize;
`;

export const HeadTextDiv = styled.div`
  display: flex;
  flex-direction:columns;
`;
export const HeadTexts = styled.div`
  display: flex;
`;

export const BreadcrumbHeader = () => {
  return (
    <HeaderDivFull>
      <DrawerIconStyle>
        <DrawerIcon />
      </DrawerIconStyle>
    <HeadTextDiv>
        <div>
      <DrawerFontPadding>
        <DrawerFontStyle>Dashboard</DrawerFontStyle>
      </DrawerFontPadding>
      </div>
      <HeadTexts>
      <DrawerFontDiv>Organizations</DrawerFontDiv>
      <ChevronRight/>
      <DrawerFontDiv>Accounts</DrawerFontDiv>
      <ChevronRight/>
      <DrawerFontDiv>Dashboard</DrawerFontDiv>
      <ChevronRight/>
      </HeadTexts>
      </HeadTextDiv>
    </HeaderDivFull>
  );
};
