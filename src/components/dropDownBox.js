import React from "react";
import { styled } from "styled-components";
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
} from "../styledComponents/styles";

export const DropDownDiv = styled.div`
  width: 336px;
  height: 550px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  z-index: 1;
`;

export const DropDownBox = () => {
  return (
    <div>
      <DropDownDiv>
        <DropDownDivHead>
          <MyProfileFont>My Profile</MyProfileFont>
          <DivLines />
          <div>
            <ViewAsFont>View as</ViewAsFont>
          </div>
        </DropDownDivHead>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <UserName>Bessie Cooper</UserName>
                <div>
                  <DropDown />
                </div>
              </div>
            </UserInfoDiv>
          </SecondDropDown>
        </LayerTwo>
        <div style={{ marginLeft: "15px", marginTop: "45px" }}>
          <BlueDiv />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <BigSvgBox />
        </div>
        <div
          style={{
            borderTop: "1px solid #f0f2f4",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "60px",
            marginTop: "-15px",
          }}
        >
          <CloseButton>Close</CloseButton>
          <ApplyButton>Apply</ApplyButton>
        </div>
      </DropDownDiv>
    </div>
  );
};
