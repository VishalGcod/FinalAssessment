import React from 'react'
import { styled } from "styled-components";
import { DateInput } from '../assets/DateInput';
import { ButtonHeadTwo } from '../assets/buttonHeadTwo';

export const HeadSecond=styled.div`
height:72px;
width: 1219px;
background: #F8F8F9;
display: flex;
justify-content:flex-end;
align-items:center;
`;
export const DaysMonthsYears=styled.div`
height:72px;
background: #F8F8F9;
display: flex;
justify-content: space-evenly;
align-items:center;
color: #242E39;
font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const HeadDatas=styled.div`
width: 496px;
height: 32px;
flex-shrink: 0;
background: #F8F8F9;
display: flex;
justify-content:center;
align-items:center;
`;

export const SecondHeader=()=> {
  return (
    <HeadSecond>
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
            <DateInput/>
        </div>
        </HeadDatas>
        <div>
            <ButtonHeadTwo/>
        </div>
    </HeadSecond>
  )
}
