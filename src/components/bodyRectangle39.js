import React from "react";
import { styled } from "styled-components";
import NorthPacific from "../assets/North Pacific.svg";
import { DropDown2 } from "../assets/dropDown2";
import { DividorLine1 } from "../assets/DividorLine1";
import { Rate } from "antd";
import { ColumnDividor } from "./columnDividor";
import usersImages from "../assets/Frame 3.png";
import { DividorLinesSmall } from "../assets/dividorLinesSmall";

export const FlexColumn = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
export const TopRect = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;
export const BottomRect = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left:-10px;
`;
export const TopRectLeft = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
`;
export const TopRectRight = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;
export const BlueBox = styled.div`
  width: 74.824px;
  height: 76.235px;
  flex-shrink: 0;
  background: linear-gradient(144deg, #38f6d3 0%, #1edeea 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-left: 23px;
  margin-right: 18px;
  border-radius: 3px;
`;
export const TopRectRightHeading = styled.div`
  color: #242e39;
  font-family: SANS-SERIF;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 324px;
  width: 400px;
`;
export const TopRectRightText = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SANS-SERIF;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
  display: flex;
  align-items: center;
`;
export const DropdownMargin = styled.div`
  margin-left: 5px;
`;

export const Divider = styled.div`
  margin-top: 17px;
`;
export const Stars = styled(Rate)`
  color: var(--blue-100, #1b63a9);
  font-family: Font Awesome 5 Free;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  &.ant-rate .ant-rate-star-second {
    margin: -2px;
  }
`;
export const RatingNumber = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: SANS-SERIF;
  font-size: 42px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const RatingText = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: SANS-SERIF;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
`;
export const TopRectRightRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 87%;
  margin-top: 7px;
`;
export const ColumnDividorMargin = styled.div`
  margin-left: 23px;
`;
export const CountNumbers = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: SANS-SERIF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CountNumbersOrange = styled.div`
color: #FFA642;
font-family: SANS-SERIF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const CountTexts = styled.div`
color: var(--grey-t-15, #637487);
font-family: SANS-SERIF;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: normal;
letter-spacing: 0.21px;
`;
export const UserImagesDiv = styled.div`
  margin-left: -30px;
`;

export const BottomTextDivsMargin = styled.div`
  margin-left: -20px;
`;

export const BottomFirstTextDivsMargin = styled.div`
  margin-left: -10px;
`;

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
