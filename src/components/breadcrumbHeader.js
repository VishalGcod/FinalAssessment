import React, { useState } from "react";
import { DrawerIcon } from "../assets/drawerIcon";
import { ChevronRight } from "./chevronRight";
import { HeaderText } from "../assets/headerText";
import { Compass } from "../assets/compass";
import { Bell } from "../assets/bell";
import userImg from "../assets/Rectangle 10.png";
import { DropDown } from "../assets/dropDown";
import { styled, css } from "styled-components";
import { DropDownBox } from "../components/dropDownBox";
import { DropDownDiv, OrgManager,UserInfoTexts, UserName, UserInfoDiv, ImageDiv, LineDiv, SvgAlignDiv, CircleSvg, HeadTextStyle, HeadRightDiv, ChevronMargin, DrawerFontDivGrey, DrawerFontDiv, HeadTexts, DrawerFontStyle, DrawerFontPadding, HeadTextDiv, DrawerIconStyle, HeaderDivFull } from "../styledComponents/styles";

export const DisplayBlock=styled.div`
position:absolute;
top:8%;
right:1%;
z-index:1;
opacity: 0;
transition: opacity 0.3s ease-in-out;
${props =>
  props.show&&css `opacity: 1;`}
`;

export const BreadcrumbHeader = () => {

  const [disp, setDisp]=useState(false)
  const displayDropdown=()=>{
    setDisp(!disp)
    console.log('hi');
  }
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
          <DrawerFontDivGrey>Dashboard</DrawerFontDivGrey>
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
        <SvgAlignDiv><Compass /></SvgAlignDiv>
      </CircleSvg>
      <CircleSvg>
      <SvgAlignDiv><Bell/></SvgAlignDiv>
      </CircleSvg>
      <LineDiv></LineDiv>
      <UserInfoDiv>
      <ImageDiv>
        <img src={userImg} alt="userimg"></img>
      </ImageDiv>
      <UserInfoTexts>
      <UserName>Bessie Cooper</UserName>
      <OrgManager>Org Manager</OrgManager>
      </UserInfoTexts>
      </UserInfoDiv>
    <DropDownDiv><button style={{border:'none', backgroundColor:'white', cursor:'pointer'}} onClick={displayDropdown}><DropDown/></button></DropDownDiv>
    </HeadRightDiv>
    <DisplayBlock show={disp}><DropDownBox/></DisplayBlock>
    </HeaderDivFull>
  );
};
