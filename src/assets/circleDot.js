import React from "react";

export const CircleDot = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill="#F0F2F4" />
        <g transform="translate(7,7)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M13.5 6C13.5 4.80653 13.0259 3.66193 12.182 2.81802C11.3381 1.97411 10.1935 1.5 9 1.5C7.80653 1.5 6.66193 1.97411 5.81802 2.81802C4.97411 3.66193 4.5 4.80653 4.5 6C4.5 11.25 2.25 12.75 2.25 12.75H15.75C15.75 12.75 13.5 11.25 13.5 6Z"
              stroke="#637487"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.2971 15.75C10.1653 15.9773 9.97603 16.166 9.74832 16.2971C9.52061 16.4283 9.26243 16.4973 8.99965 16.4973C8.73686 16.4973 8.47869 16.4283 8.25098 16.2971C8.02327 16.166 7.83401 15.9773 7.70215 15.75"
              stroke="#637487"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </g>
        <g transform="translate(18,-3)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle
              cx="8"
              cy="8"
              r="6.5"
              fill="#1B63A9"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </g>
      </svg>
    </div>
  );
};

export default CircleDot;
