import React from "react";
import { DateInput } from "../assets/DateInput";
import { ButtonHeadTwo } from "../assets/buttonHeadTwo";
import {
  HeadSecond,
  SecondNavDatas,
  HeadDatas,
  DaysMonthsYears,
  BtnHeadDiv,
} from "../styledComponents/styles";

export const SecondHeader = () => {
  return (
    <HeadSecond>
      <SecondNavDatas>
        <HeadDatas>
          <DaysMonthsYears>
            <span>Today</span>
            <span>7D</span>
            <span>15D</span>
            <span>1M</span>
            <span>6M</span>
            <span>1Y</span>
          </DaysMonthsYears>
          <div>
            <DateInput />
          </div>
        </HeadDatas>
        <BtnHeadDiv>
          <ButtonHeadTwo />
        </BtnHeadDiv>
      </SecondNavDatas>
    </HeadSecond>
  );
};
