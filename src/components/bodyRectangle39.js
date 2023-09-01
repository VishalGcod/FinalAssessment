import React from "react";
import NorthPacific from "../assets/North Pacific.svg";
import { DropDown2 } from "../assets/dropDown2";
import { DividorLine1 } from "../assets/DividorLine1";
import { ColumnDividor } from "../assets/columnDividor";
import usersImages from "../assets/Frame 3.png";
import { DividorLinesSmall } from "../assets/dividorLinesSmall";
import {
  FlexColumn,
  CountTexts,
  CountNumbers,
  BottomFirstTextDivsMargin,
  BottomTextDivsMargin,
  CountNumbersOrange,
  UserImagesDiv,
  BottomRect,
  ColumnDividorMargin,
  Stars,
  RatingText,
  RatingNumber,
  TopRectRightRating,
  Divider,
  TopRectRight,
  DropdownMargin,
  TopRect,
  TopRectLeft,
  BlueBox,
  TopRectRightHeading,
  TopRectRightText,
} from "../styledComponents/styles";

export const BodyRectangleTop = () => {
  return (
    <FlexColumn>
      <TopRect>
        <TopRectLeft>
          <BlueBox>
            <img src={NorthPacific} alt="boxContent"></img>
          </BlueBox>
          <div>
            <TopRectRightHeading>
              North Pacific - Retail Mortgage
            </TopRectRightHeading>
            <TopRectRightText>
              San Francisco
              <DropdownMargin>
                <DropDown2 />
              </DropdownMargin>
            </TopRectRightText>
          </div>
        </TopRectLeft>
        <TopRectRight>
          <Divider>
            <DividorLine1 />
          </Divider>
          <TopRectRightRating>
            <RatingNumber>4.2</RatingNumber>
            <div>
              <RatingText>Ratings</RatingText>
              <div>
                <Stars defaultValue={4} allowHalf />
              </div>
            </div>
          </TopRectRightRating>
        </TopRectRight>
      </TopRect>
      <ColumnDividorMargin>
        <ColumnDividor />
      </ColumnDividorMargin>
      <BottomRect>
        <BottomFirstTextDivsMargin>
          <CountNumbers>346</CountNumbers>
          <CountTexts>Agents</CountTexts>
        </BottomFirstTextDivsMargin>
        <UserImagesDiv>
          <img src={usersImages} alt="users"></img>
        </UserImagesDiv>
        <DividorLinesSmall />
        <BottomTextDivsMargin>
          <CountNumbers>15</CountNumbers>
          <CountTexts>Tires</CountTexts>
        </BottomTextDivsMargin>
        <DividorLinesSmall />
        <BottomTextDivsMargin>
          <CountNumbersOrange>14</CountNumbersOrange>
          <CountTexts>Incomplete Profiles</CountTexts>
        </BottomTextDivsMargin>
        <DividorLinesSmall />{" "}
        <BottomTextDivsMargin>
          <CountNumbers>56.3%</CountNumbers>
          <CountTexts>Completion Rate</CountTexts>
        </BottomTextDivsMargin>
      </BottomRect>
    </FlexColumn>
  );
};
