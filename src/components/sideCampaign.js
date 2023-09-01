import React from "react";
import Arrow from "../assets/Arrow.svg";
import { DivLines } from "../assets/divLines";
import {
  BlockFourProgressBar,
  BlockOneProgressBar,
  BlockThreeProgressBar,
  BlockTwoProgressBar,
} from "../assets/progressBarSvg";
import CompletionRate from "../assets/completionRate";
import {
  FullSideCAmpaignDivs,
  AsideHeader,
  ProgressBarDivs,
  RateNumbers,
  StarValue,
  StarRatingBlocks,
  AsideBlocksTitles,
  AsideBlocks,
  BlocksInnerDiv,
  StarSecondRow,
  ArrowAside,
  StarSecondRowLastBlock,
  AsideHeaderView,
  AsideViewDiv,
  AsideHeaderText,
  StarFirstRow,
} from "../styledComponents/styles";

export const SideCampaign = () => {
  return (
    <FullSideCAmpaignDivs>
      <AsideHeader>
        <AsideHeaderText>Active Campaigns</AsideHeaderText>
        <AsideViewDiv>
          <AsideHeaderView>View</AsideHeaderView>
          <ArrowAside>
            <img src={Arrow} alt="arrowPng"></img>
          </ArrowAside>
        </AsideViewDiv>
      </AsideHeader>
      <AsideBlocks>
        <BlocksInnerDiv>
          <div>
            <AsideBlocksTitles>Mid-Process Survey</AsideBlocksTitles>
            <StarFirstRow>
              <StarRatingBlocks allowHalf defaultValue={4.1} />
              <StarValue>4.1</StarValue>
              <DivLines />
              <RateNumbers>457</RateNumbers>
            </StarFirstRow>
          </div>
          <ProgressBarDivs>
            <BlockOneProgressBar />
            <CompletionRate />
          </ProgressBarDivs>
        </BlocksInnerDiv>
      </AsideBlocks>
      <AsideBlocks>
        <BlocksInnerDiv>
          <div>
            <AsideBlocksTitles>Closing Survey</AsideBlocksTitles>
            <StarSecondRow>
              <StarRatingBlocks allowHalf defaultValue={4.1} />
              <StarValue>4.1</StarValue>
              <DivLines />
              <RateNumbers>1800</RateNumbers>
            </StarSecondRow>
          </div>
          <ProgressBarDivs>
            <BlockTwoProgressBar />
            <CompletionRate />
          </ProgressBarDivs>
        </BlocksInnerDiv>
      </AsideBlocks>
      <AsideBlocks>
        <BlocksInnerDiv>
          <div>
            <AsideBlocksTitles>Realtor Survey</AsideBlocksTitles>
            <StarSecondRow>
              <StarRatingBlocks allowHalf defaultValue={4.1} />
              <StarValue>4.1</StarValue>
              <DivLines />
              <RateNumbers>3822</RateNumbers>
            </StarSecondRow>
          </div>
          <ProgressBarDivs>
            <BlockThreeProgressBar />
            <CompletionRate />
          </ProgressBarDivs>
        </BlocksInnerDiv>
      </AsideBlocks>
      <AsideBlocks>
        <BlocksInnerDiv>
          <div>
            <AsideBlocksTitles>Operational Long Form Survey</AsideBlocksTitles>
            <StarSecondRowLastBlock>
              <StarRatingBlocks allowHalf defaultValue={4.1} />
              <StarValue>4.1</StarValue>
              <DivLines />
              <RateNumbers>1280</RateNumbers>
            </StarSecondRowLastBlock>
          </div>
          <ProgressBarDivs>
            <BlockFourProgressBar />
            <CompletionRate />
          </ProgressBarDivs>
        </BlocksInnerDiv>
      </AsideBlocks>
    </FullSideCAmpaignDivs>
  );
};
