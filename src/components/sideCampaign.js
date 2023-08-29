import React from "react";
import { styled } from "styled-components";
import Arrow from "../assets/Arrow.svg";
// import { ProgressBarReact } from "../assets/progressBar";
import { Rate } from "antd";
import { BlockFourProgressBar, BlockOneProgressBar, BlockThreeProgressBar, BlockTwoProgressBar } from "../assets/progressBarSvg";
import CompletionRate from "../assets/completionRate";


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
export const AsideBlocks = styled.div`
width: 341px;
height: 102px;
background: #F8F8F9;
margin-left:13px;
margin-right:13px;
margin-top:10px
`;
export const AsideBlocksTitles = styled.div`
color: var(--grey-100, #485C72);
font-family: SF Pro Display;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 130%;
margin-left:7px;

`;

export const StarRatingBlocks = styled(Rate)`
color: #2B69A9;
font-size: 14px;
font-style: normal;
font-weight: 900;
line-height: normal;
&.ant-rate .ant-rate-star-second {
  margin: -3px;
  }
`;
export const StarValue = styled.div`
color: #242E39;
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
export const DividorLine = styled.div`
width: 0px;
height: 18px;
flex-shrink: 0;
troke-width: 1px;
stroke: var(--grey-t-75, #D1D6DC);
`;

export const RateNumbers = styled.div`
color: var(--grey-s-50, #242E39);
font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const StarSecondRow = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:150%
`;
export const StarSecondRowLastBlock = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%
`;

export const BlocksInnerDiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height:100%;
  margin-left:19px;
`;
export const ProgressBarDivs = styled.div`
  margin-right:35px;
  margin-bottom:23px;
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
       {/* For mapping */}
      <AsideBlocks>
      <BlocksInnerDiv>
      <div>
        <AsideBlocksTitles>Mid-Process Survey</AsideBlocksTitles>
        <StarSecondRow><StarRatingBlocks allowHalf defaultValue={4.1} /><StarValue>4.1</StarValue><DividorLine></DividorLine><RateNumbers>457</RateNumbers></StarSecondRow>
      </div>
      <ProgressBarDivs><BlockOneProgressBar/><CompletionRate/></ProgressBarDivs>
      </BlocksInnerDiv>
      </AsideBlocks>
      <AsideBlocks>
      <BlocksInnerDiv>
      <div>
        <AsideBlocksTitles>Closing Survey</AsideBlocksTitles>
        <StarSecondRow><StarRatingBlocks allowHalf defaultValue={4.1} /><StarValue>4.1</StarValue><DividorLine></DividorLine><RateNumbers>1800</RateNumbers></StarSecondRow>
      </div>
      <ProgressBarDivs><BlockTwoProgressBar/><CompletionRate/></ProgressBarDivs>
      </BlocksInnerDiv>
      </AsideBlocks>
      <AsideBlocks>
      <BlocksInnerDiv>
      <div>
        <AsideBlocksTitles>Realtor Survey</AsideBlocksTitles>
        <StarSecondRow><StarRatingBlocks allowHalf defaultValue={4.1} /><StarValue>4.1</StarValue><DividorLine></DividorLine><RateNumbers>3822</RateNumbers></StarSecondRow>
      </div>
      <ProgressBarDivs><BlockThreeProgressBar/><CompletionRate/></ProgressBarDivs>
      </BlocksInnerDiv>
      </AsideBlocks>
      <AsideBlocks>
      <BlocksInnerDiv>
      <div>
        <AsideBlocksTitles>Operational Long Form Survey</AsideBlocksTitles>
        <StarSecondRowLastBlock><StarRatingBlocks allowHalf defaultValue={4.1} /><StarValue>4.1</StarValue><DividorLine></DividorLine><RateNumbers>1280</RateNumbers></StarSecondRowLastBlock>
      </div>
      <ProgressBarDivs><BlockFourProgressBar/><CompletionRate/></ProgressBarDivs>
      </BlocksInnerDiv>
      </AsideBlocks>
      {/* For mapping */}
    </div>
  );
};
