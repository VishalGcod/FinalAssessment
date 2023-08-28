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
`;

export const SecondHeader=()=> {
  return (
    <HeadSecond>
        <div>
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
        <div>
            <ButtonHeadTwo/>
        </div>
        </div>
    </HeadSecond>
  )
}
