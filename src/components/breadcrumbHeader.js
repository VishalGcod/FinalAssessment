import React from "react";
import { styled } from "styled-components";
import { DrawerIcon } from "../assets/drawerIcon";
import { ChevronRight } from "./chevronRight";
import { HeaderText } from "../assets/headerText";
import Circle from "../assets/circle.svg";
import { Compass } from "../assets/compass";
import { Bell } from "../assets/bell";
import userImg from "../assets/Rectangle 10.png";
import { DropDown } from "../assets/dropDown";

export const HeaderDivFull = styled.div`
  width: 1219px;
  height: 70px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  justify-content: center;`;
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
  color: var(--blue-t-15, #3d7ab6);
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
  flex-direction: column;
`;
export const HeadTextStyle = styled.div`
  margin-top:19px;
  margin-bottom:19px;
  // margin-right:297px;
`;

export const HeadTexts = styled.div`
  display: flex;
  margin-left: 16px;
  margin-top: -10px;
`;
export const ChevronMargin = styled.div`
  margin-left: 9px;
  margin-right: 9px;
`;

export const OrgNorth = styled.div`
  color: var(--blue-100, #1b63a9);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-variant: all-small-caps;
`;

export const OrgNorthDiv = styled.div`
  display: flex;
  width: 160px;
  height: 32px;
  padding: 4px 10px 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid var(--blue-t-65, #afc8e1);
  background: var(--blue-t-92, #edf3f8);
`;
export const CircleSvg = styled.div`
  background: url(${Circle}) no-repeat;
  width: 5%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LineDiv = styled.div`
  width: 1px;
  height: 20px;
  background: #d1d6dc;
`;

export const ImageDiv = styled.div`
  border-radius: 25px;
`;

export const UserName = styled.div`
color: var(--grey-100, #485C72);
font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.13px;
text-transform: capitalize;
`;

export const OrgManager = styled.div`
color: var(--grey-t-50, #A3ADB8);
font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: normal;
letter-spacing: -0.12px;
text-transform: capitalize;
`;

export const HeadRightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items:center;
  width:100%;  
`;
export const UserInfoDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items:center;
  width:15%;  
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
          <ChevronMargin>
            <ChevronRight />
          </ChevronMargin>
          <DrawerFontDiv>Accounts</DrawerFontDiv>
          <ChevronMargin>
            <ChevronRight />
          </ChevronMargin>
          <DrawerFontDiv>Dashboard</DrawerFontDiv>
          <ChevronMargin>
            <ChevronRight />
          </ChevronMargin>
        </HeadTexts>
      </HeadTextDiv>
      <HeadRightDiv>
        <HeadTextStyle>
      <HeaderText />
      </HeadTextStyle>
      <CircleSvg>
        <Compass />
      </CircleSvg>
      <CircleSvg>
        <Bell />
      </CircleSvg>
      <LineDiv></LineDiv>
      <UserInfoDiv>
      <ImageDiv>
        <img src={userImg} alt="userimg"></img>
      </ImageDiv>
      <div>
      <UserName>Bessie Cooper</UserName>
      <OrgManager>Org Manager</OrgManager>
      </div>
      </UserInfoDiv>
    <DropDown/>
    </HeadRightDiv>
    </HeaderDivFull>
  );
};
