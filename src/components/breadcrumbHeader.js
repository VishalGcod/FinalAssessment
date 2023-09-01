import React, { useState } from "react";
import { DrawerIcon } from "../assets/drawerIcon";
import { ChevronRight } from "../assets/chevronRight";
import { HeaderText } from "../assets/headerText";
import { Compass } from "../assets/compass";
import { Bell } from "../assets/bell";
import userImg from "../assets/Rectangle 10.png";
import { DropDown } from "../assets/dropDown";
import { DropDownBox } from "../components/dropDownBox";
import {
  DropDownDiv,
  OrgManager,
  UserInfoTexts,
  UserName,
  UserInfoDiv,
  ImageDiv,
  LineDiv,
  SvgAlignDiv,
  CircleSvg,
  HeadTextStyle,
  HeadRightDiv,
  ChevronMargin,
  DrawerFontDivGrey,
  DrawerFontDiv,
  HeadTexts,
  DrawerFontStyle,
  DrawerFontPadding,
  HeadTextDiv,
  DrawerIconStyle,
  HeaderDivFull,
  CircleSvg2,
  DropDownButton,
  DisplayBlock,
} from "../styledComponents/styles";

export const BreadcrumbHeader = () => {
  const [disp, setDisp] = useState(false);
  const displayDropdown = () => {
    setDisp(!disp);
    console.log("hi");
  };
  return (
    <HeaderDivFull>
      <DrawerIconStyle>
        <DrawerIcon />
      </DrawerIconStyle>
      <HeadTextDiv>
        <DrawerFontPadding>
          <DrawerFontStyle>Dashboard</DrawerFontStyle>
        </DrawerFontPadding>
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
          <SvgAlignDiv>
            <Compass />
          </SvgAlignDiv>
        </CircleSvg>
        <CircleSvg2>
          <SvgAlignDiv>
            <Bell />
          </SvgAlignDiv>
        </CircleSvg2>
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
        <DropDownDiv>
          <DropDownButton onClick={displayDropdown}>
            <DropDown />
          </DropDownButton>
        </DropDownDiv>
      </HeadRightDiv>
      <DisplayBlock show={disp}>
        <DropDownBox />
      </DisplayBlock>
    </HeaderDivFull>
  );
};
