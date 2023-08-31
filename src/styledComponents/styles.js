import { styled } from "styled-components";
import { Rate } from "antd";
import Circle from "../assets/circle.svg";
import CircleDot from "../assets/circle.svg";

export const HeadSecond = styled.div`
  height: 72px;
  background: #f8f8f9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`;
export const DaysMonthsYears = styled.div`
  height: 72px;
  background: #f8f8f9;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: #242e39;
  font-family: "SF Pro Display", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const HeadDatas = styled.div`
  width: 496px;
  height: 32px;
  flex-shrink: 0;
  background: #f8f8f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BtnHeadDiv = styled.div`
  margin-left: 14px;
`;
export const SecondNavDatas = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const RectangleTopStyle = styled.div`
  width: 793px;
  height: 206px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
`;
export const RectangleBottomStyle = styled.div`
  width: 793px;
  height: 331px;
  flex-shrink: 0;
  border-radius: 3px;
  margin-top: 20px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
`;
export const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-left: 90px;
`;

export const AsideRight = styled.div`
  width: 367px;
  height: 557px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  margin-right: 20px;
`;
export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  height: 746px;
  flex-shrink: 0;
  background: #f8f8f9;
`;

export const AsideHeader = styled.div`
  width: 367px;
  height: 42px;
  flex-shrink: 0;
  background-color: #e4e7ea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding-left:20px;
`;

export const AsideHeaderText = styled.div`
  color: #3a4a5b;
  font-family: "SF Pro Display", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 10px;
  padding-bottom: 11px;
  padding-left: 20px;
`;
export const AsideHeaderView = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: "SF Pro Display", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 11px;
  padding-bottom: 13px;
  padding-left: 28px;
`;
export const AsideViewDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

export const ArrowAside = styled.div`
  padding-top: 13px;
  padding-bottom: 11px;
  padding-right: 14px;
`;
export const AsideBlocks = styled.div`
  width: 341px;
  height: 102px;
  background: #f8f8f9;
  margin-left: 13px;
  margin-right: 13px;
  margin-top: 10px;
`;
export const AsideBlocksTitles = styled.div`
  color: var(--grey-100, #485c72);
  font-family: "SF Pro Display", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-left: 7px;
  margin-bottom: 3px;
`;

export const StarRatingBlocks = styled(Rate)`
  color: #2b69a9;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  &.ant-rate .ant-rate-star-second {
    margin: -3px;
  }
`;
export const StarValue = styled.div`
  color: #242e39;
  font-family: "SF Pro Display", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const RateNumbers = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: "SF Pro Display", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const StarSecondRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 140%;
  margin-top: 7px;
  margin-left: 4px;
`;
export const StarSecondRowLastBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  margin-left: 7px;
  margin-top: 6px;
`;

export const BlocksInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: 19px;
`;
export const ProgressBarDivs = styled.div`
  margin-right: 35px;
  margin-bottom: 2px;
`;
export const FullSideCAmpaignDivs = styled.div``;

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
  margin-left: -10px;
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
  color: #ffa642;
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
export const BottomBoxHead = styled.div`
  width: 793px;
  height: 42px;
  flex-shrink: 0;
  background-color: #e4e7ea;
`;
export const HeaderText = styled.div`
  width: 250px;
  color: #3a4a5b;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 10px;
  padding-bottom: 11px;
  padding-left: 17px;
`;
export const BlueCircle = styled.div`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #3d7ab6;
`;
export const GreenCircle = styled.div`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--green-t-25, #5dc288);
`;

export const InnerDivTexts = styled.div`
  color: #000;
  font-family: "SF Pro Display", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  opacity: 0.65;
`;

export const DivSecongRight = styled.div`
  display: flex;
`;

export const DivSecongLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 65%;
  margin-left: -82px;
`;
export const InnerDivLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
`;
export const DivSecond = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const BottomGraphDivs = styled.div`
  display: flex;
  height: 230px;
`;

export const GraphDiv = styled.div`
  height: 100%;
  width: 70%;
`;

export const GraphRightDiv = styled.div`
  height: 100%;
  width: 30%;
`;
export const GraphRightBox = styled.div`
  width: 210px;
  height: 187px;
  flex-shrink: 0;
  background-color: var(--grey-t-96, #f8f8f9);
  margin-right: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const GraphRightBoxNumbers = styled.div`
  width: 34px;
  height: 19px;
  flex-shrink: 0;
  color: var(--grey-s-70, #161c22);
  font-family: "SF Pro Display", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
`;
export const GraphRightBoxCompletedTexts = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: "SF Pro Display", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  width: 170px;
  height: 13px;
  flex-shrink: 0;
  margin-top: 10px;
`;

export const GraphRightBoxSmallTexts = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: "SF Pro Display", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 80px;
  height: 13px;
  flex-shrink: 0;
`;

export const RightBoxDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-left: 20px;
  margin-top: 15px;
`;
export const HeaderDivFull = styled.div`
  // width: 1219px;
  height: 70px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;

// changed values
export const DrawerIconStyle = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 85px;
`;
export const DrawerFontStyle = styled.div`
  color: var(--grey-s-10, #415367);
  font-size: 18px;
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;
export const DrawerFontPadding = styled.div`
  padding: 14px;
  margin-left: -10px;
`;

export const DrawerFontDiv = styled.div`
  color: var(--blue-t-15, #3d7ab6);
  font-family: "SF Pro Display", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
`;

export const DrawerFontDivGrey = styled.div`
  color: var(--grey-t-50, #a3adb8);
  font-family: "SF Pro Display", sans-serif;
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
  width: 16%;
  margin-right: 500px;
  margin-left: 23px;
`;
export const HeadTextStyle = styled.div`
  margin-top: 19px;
  margin-bottom: 19px;
`;

export const HeadTexts = styled.div`
  display: flex;
  margin-left: 5px;
  margin-top: -10px;
`;
export const ChevronMargin = styled.div`
  margin-left: 9px;
  margin-right: 9px;
`;

export const OrgNorth = styled.div`
  color: var(--blue-100, #1b63a9);
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
  width: 8%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const CircleSvg2 = styled.div`
  background: url(${CircleDot}) no-repeat;
  width: 8%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LineDiv = styled.div`
  width: 1px;
  height: 20px;
  margin-right: 12px;
  background: #d1d6dc;
`;

export const ImageDiv = styled.div`
  border-radius: 25px;
`;

export const UserName = styled.div`
  color: var(--grey-100, #485c72);
  font-size: 13px;
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
  display: flex;
  width: 90px;
`;

export const OrgManager = styled.div`
  color: var(--grey-t-50, #a3adb8);
  font-family: "SF Pro Display", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
  text-transform: capitalize;
  margin-left: -20px;
`;

export const HeadRightDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 34%;
  margin-right: 20px;
`;
export const UserInfoDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
`;
export const UserInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: 6px;
`;
export const SvgAlignDiv = styled.div`
  margin-left: 7px;
`;
export const DropDownDiv = styled.div`
  margin-bottom: 10px;
  margin-left: -13px;
`;

export const MyProfileFont = styled.div`
  color: var(--grey-t-25, #768595);
  text-align: center;
  font-family: "SF Pro Display", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const ViewAsFont = styled.div`
  color: var(--grey-s-30, #324050);
  text-align: center;
  font-family: "SF Pro Display", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DropDownDivHead = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  flex-shrink: 0;
  border-bottom: 1px solid #f0f2f4;
`;

export const LoggenInProfileDiv = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: "SF Pro Display", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-top: 15px;
  margin-bottom: 5px;
`;
export const ImageInfoDiv = styled.div`
  width: 306px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: #fff;
`;
export const LayerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-atart;
  height: 50px;
  flex-shrink: 0;
  margin-left: 15px;
`;

export const SecondDropDown = styled.div`
  width: 306px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: #fff;
`;
export const CloseButton = styled.button`
  display: flex;
  padding: 7px 10px;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 3px;
  background: var(--grey-t-85, #e4e7ea);
  color: grey;
  margin-left: 15px;
`;
export const ApplyButton = styled.button`
  display: inline-flex;
  padding: 7px 20px;
  align-items: center;
  border-radius: 3px;
  border: none;
  background: var(--blue-100, #1b63a9);
  margin-right: 15px;
  color: white;
`;

export const GraphOuterDiv = styled.div`
  width: 527px;
  height: 300px;
  margin-left: 20px;
  margin-top: 25px;
`;

export const DropDownButton = styled.div`
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const DropDownDivProfile = styled.div`
  width: 336px;
  height: 550px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  z-index: 1;
`;
export const BlueLineDiv = styled.div`
  position: absolute;
  top: 37px;
  right: 0px;
`;
export const BottomButtons = styled.div`
  border-top: 1px solid #f0f2f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin-top: -15px;
`;

export const SvgBlueBoxDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const BlueTextDiv = styled.div`
  margin-left: 15px;
  margin-top: 45px;
`;

export const DropDownUName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
