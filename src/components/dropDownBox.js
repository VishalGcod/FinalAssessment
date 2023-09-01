import React from "react";
import { DivLines } from "../assets/divLines";
import {
  UserInfoDiv,
  ImageDiv,
  UserInfoTexts,
  UserName,
  OrgManager,
} from "../styledComponents/styles";
import userImg from "../assets/Rectangle 10.png";
import { DropDown } from "../assets/dropDown";
import { BlueDiv } from "../assets/blueDiv";
import { BigSvgBox } from "../assets/bigSvgBox";
import {
  DropDownDivHead,
  MyProfileFont,
  ViewAsFont,
  LayerTwo,
  LoggenInProfileDiv,
  ImageInfoDiv,
  SecondDropDown,
  CloseButton,
  ApplyButton,
  BlueTextDiv,
  BottomButtons,
  SvgBlueBoxDiv,
  DropDownUName,
  DropDownDivProfile,
  BlueLineDiv,
} from "../styledComponents/styles";
import { BlueSvgLine } from "../assets/blueSvgLine";

export const DropDownBox = () => {
  return (
    <div>
      <DropDownDivProfile>
        <DropDownDivHead>
          <MyProfileFont>My Profile</MyProfileFont>
          <DivLines />
          <div>
            <ViewAsFont>View as</ViewAsFont>
          </div>
        </DropDownDivHead>
        <BlueLineDiv>
          <BlueSvgLine />
        </BlueLineDiv>
        <LayerTwo>
          <LoggenInProfileDiv>Logged-In Profile</LoggenInProfileDiv>
          <ImageInfoDiv>
            <UserInfoDiv
              style={{ width: "45%", height: "100%", marginLeft: "10px" }}
            >
              <ImageDiv>
                <img src={userImg} alt="userimg"></img>
              </ImageDiv>
              <UserInfoTexts>
                <UserName style={{ marginBottom: "4px" }}>
                  Bessie Cooper
                </UserName>
                <OrgManager>Org Manager</OrgManager>
              </UserInfoTexts>
            </UserInfoDiv>
          </ImageInfoDiv>
        </LayerTwo>
        <LayerTwo style={{ marginTop: "55px" }}>
          <LoggenInProfileDiv>View as</LoggenInProfileDiv>
          <SecondDropDown>
            <UserInfoDiv
              style={{ width: "95%", height: "100%", marginLeft: "10px" }}
            >
              <DropDownUName>
                <UserName>Bessie Cooper</UserName>
                <div>
                  <DropDown />
                </div>
              </DropDownUName>
            </UserInfoDiv>
          </SecondDropDown>
        </LayerTwo>
        <BlueTextDiv>
          <BlueDiv />
        </BlueTextDiv>
        <SvgBlueBoxDiv>
          <BigSvgBox />
        </SvgBlueBoxDiv>
        <BottomButtons>
          <CloseButton>Close</CloseButton>
          <ApplyButton>Apply </ApplyButton>
        </BottomButtons>
      </DropDownDivProfile>
    </div>
  );
};
