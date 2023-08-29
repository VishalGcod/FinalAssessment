import React from "react";
import { styled } from "styled-components";
import { VectorLine } from "../assets/vectorLine";
import { useState } from "react";
import { Graph, UserData } from "./graph";

export const BottomBoxHead = styled.div`
  width: 793px;
  height: 42px;
  flex-shrink: 0;
  background-color: #e4e7ea;
`;
export const HeaderText = styled.div`
  width: 222px;
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
  font-family: SANS-SERIF;
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
  width: 201px;
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
  font-family: SANS-SERIF;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
`;
export const GraphRightBoxCompletedTexts = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SANS-SERIF;
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
  font-family: SANS-SERIF;
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

export const BodyRectangeBottom = () => {

  const [userData, setUserData] = useState({
    labels:['1 Jan','2 Jan','3 Jan','4 Jan','5 Jan','6 Jan','7 Jan','8 Jan','9 Jan','10 Jan','Today'],
    datasets:[{
      label:"datas graph1",
      data:UserData.map((data)=>data.users1),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
    label:"datas graph2",
      data:[1000,3000,6000,0,4000,3000,0,7000,1000,3000,6000],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }  
  ]
  })
  return (
    <div>
      <BottomBoxHead>
        <HeaderText>Transaction and Survey Trend</HeaderText>
      </BottomBoxHead>
      <DivSecond>
        <DivSecongLeft>
          <InnerDivLeft>
            <BlueCircle></BlueCircle>
            <InnerDivTexts>Transactions Completed</InnerDivTexts>
          </InnerDivLeft>
          <InnerDivLeft>
            <GreenCircle></GreenCircle>
            <InnerDivTexts>Surveys Completed</InnerDivTexts>
          </InnerDivLeft>
        </DivSecongLeft>
        <DivSecongRight></DivSecongRight>
      </DivSecond>
      <BottomGraphDivs>
        <GraphDiv><div style={{width:'450px', height:'200px', marginLeft:'50px'}}><Graph chartData={userData} /></div></GraphDiv>
        <GraphRightDiv>
          <GraphRightBox>
            <RightBoxDiv1>
              <GraphRightBoxSmallTexts>In Last 7 Days</GraphRightBoxSmallTexts>
              <GraphRightBoxNumbers>357</GraphRightBoxNumbers>
              <GraphRightBoxCompletedTexts>
                Transactions Completed
              </GraphRightBoxCompletedTexts>
            </RightBoxDiv1>
            <VectorLine />
            <RightBoxDiv1>
              <GraphRightBoxNumbers>209</GraphRightBoxNumbers>
              <GraphRightBoxCompletedTexts>
                Surveys Completed
              </GraphRightBoxCompletedTexts>
            </RightBoxDiv1>
          </GraphRightBox>
        </GraphRightDiv>
      </BottomGraphDivs>
    </div>
  );
};
