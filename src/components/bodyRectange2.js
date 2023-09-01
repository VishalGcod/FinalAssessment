import React from "react";
import { VectorLine } from "../assets/vectorLine";
import { useState } from "react";
import { Graph, UserData, UserData2 } from "./graph";
import {
  GraphRightBoxCompletedTexts,
  GraphRightBoxNumbers,
  RightBoxDivTop,
  RightBoxDivBottom,
  GraphRightBoxSmallTexts,
  GraphRightBox,
  GraphRightDiv,
  GraphDiv,
  GreenCircle,
  InnerDivTexts,
  BottomGraphDivs,
  DivSecongRight,
  InnerDivLeft,
  BlueCircle,
  DivSecond,
  BottomBoxHead,
  HeaderText,
  DivSecongLeft,
  GraphOuterDiv,
  VectorDividor
} from "../styledComponents/styles";

export const BodyRectangeBottom = () => {
  const [userData, setUserData] = useState({
    labels: ["6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan", "11 Jan", "Today"],
    datasets: [
      {
        label: "datas graph1",
        data: UserData.map((data) => data.users1),
        borderColor: "#5DC288",
        backgroundColor: "#5DC288",
        borderWidth: 2,
        pointRadius: 2,
      },
      {
        label: "datas graph2",
        data: UserData.map((data) => data.users2),
        borderColor: "#3D7AB6",
        backgroundColor: "#3D7AB6",
        borderWidth: 2,
        pointRadius: 2,
      },
    ],
  });
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
        <GraphDiv>
          <GraphOuterDiv>
            <Graph chartData={userData} />
          </GraphOuterDiv>
        </GraphDiv>
        <GraphRightDiv>
          <GraphRightBox>
            <RightBoxDivTop>
              <GraphRightBoxSmallTexts>In Last 7 Days</GraphRightBoxSmallTexts>
              <GraphRightBoxNumbers>357</GraphRightBoxNumbers>
              <GraphRightBoxCompletedTexts>
                Transactions Completed
              </GraphRightBoxCompletedTexts>
            </RightBoxDivTop>
            <VectorDividor>
              <VectorLine />
            </VectorDividor>
            <RightBoxDivBottom>
              <GraphRightBoxNumbers>209</GraphRightBoxNumbers>
              <GraphRightBoxCompletedTexts>
                Surveys Completed
              </GraphRightBoxCompletedTexts>
            </RightBoxDivBottom>
          </GraphRightBox>
        </GraphRightDiv>
      </BottomGraphDivs>
    </div>
  );
};
