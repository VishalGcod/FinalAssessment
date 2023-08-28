import React from "react";
import { styled } from "styled-components";
import Arrow from "../assets/Arrow.svg";

export const AsideHeader = styled.div`
  width: 367px;
  height: 42px;
  flex-shrink: 0;
  background-color: #e4e7ea;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const AsideHeaderText = styled.div`
color: #3A4A5B;
font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-top:10px;
padding-bottom:11px;
padding-left:20px;
`;
export const AsideHeaderView = styled.div`
color: var(--grey-t-15, #637487);
font-family: SF Pro Display;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-top:11px;
padding-bottom:13px;
padding-left:28px;
`;
export const AsideViewDiv = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
width:30%;
`;

export const ArrowAside = styled.div`
  padding-top:13px;
padding-bottom:11px;
padding-right:14px;
`;

export const SideCampaign = () => {
  return (
    <div>
      <AsideHeader>
        <AsideHeaderText>Active Campaigns</AsideHeaderText>
        <AsideViewDiv>
          <AsideHeaderView>View</AsideHeaderView>
          <ArrowAside>
            <img src={Arrow} alt="arrowPng"></img>
          </ArrowAside>
        </AsideViewDiv>
      </AsideHeader>
    </div>
  );
};
