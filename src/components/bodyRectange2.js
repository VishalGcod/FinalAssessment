import React from "react";
import { VectorLine } from "../assets/vectorLine";
import { useState } from "react";
import { Graph, UserData } from "./graph";
import {
  GraphRightBoxCompletedTexts,
  GraphRightBoxNumbers,
  RightBoxDiv1,
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
} from "../styledComponents/styles";

export const BodyRectangeBottom = () => {
  const [userData, setUserData] = useState({
    labels: [
      "1 Jan",
      "2 Jan",
      "3 Jan",
      "4 Jan",
      "5 Jan",
      "6 Jan",
      "7 Jan",
      "8 Jan",
      "9 Jan",
      "10 Jan",
      "Today",
    ],
    datasets: [
      {
        label: "datas graph1",
        data: UserData.map((data) => data.users1),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "datas graph2",
        data: [1000, 3000, 6000, 0, 4000, 3000, 0, 7000, 1000, 3000, 6000],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
          <div style={{ width: "450px", height: "200px", marginLeft: "50px" }}>
            <Graph chartData={userData} />
          </div>
        </GraphDiv>
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
