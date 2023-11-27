
import * as React from 'react';

// Rest of your code goes here

interface AnalyticsTypes {
  title: string;
  value: string;
  icon: any;
  style?: {
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
}

export const AnalyticsData: AnalyticsTypes[] = [
  {
    title: "HTML",
    value: "90%",
    icon: (
      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5_26)">
          <path
            d="M0.709503 0L1.6725 10.8L5.994 12L10.3268 10.7985L11.2913 0H0.710253H0.709503ZM9.195 3.5325H4.1265L4.24725 4.88925H9.075L8.71125 8.95575L5.994 9.70875L3.2805 8.95575L3.09525 6.87525H4.425L4.5195 7.93275L5.99475 8.33025L5.99775 8.3295L7.47375 7.93125L7.62675 6.21375H3.036L2.679 2.208H9.31425L9.195 3.5325Z"
            fill="#FF6000"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_26">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    style: {
      top: "-10rem",
      left: "10rem"
    },
  },
  {
    title: "CSS",
    value: "90%",
    icon: (
      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.5 0.75L2.31905 10.2004L5.99454 11.25L9.6803 10.1988L10.5 0.75H1.5ZM8.31272 8.59917L6.00162 9.25835L3.69401 8.59629L3.53587 6.77344H4.6668L4.74727 7.70067L6.00319 8.05605L6.00628 8.06245H6.00708L7.26021 7.71436L7.39174 6.21094H4.75781L4.66406 5.03906H7.4917L7.59473 3.84375H3.28125L3.1875 2.69531H8.82609L8.31272 8.59917Z"
          fill="#19A7CE"
        />
      </svg>
    ),
    style: {
      left: "-15rem",
      top: "-6rem",
    },
  },
  {
    title: "TAILWINDCSS",
    value: "80%",
    icon: (
      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5_20)">
          <path
            d="M6.0005 2.4C4.4005 2.4 3.4005 3.2 3.0005 4.8C3.6005 4 4.3005 3.7 5.1005 3.9C5.557 4.014 5.883 4.345 6.2445 4.712C6.833 5.309 7.5135 6 9.0005 6C10.6005 6 11.6005 5.2 12.0005 3.6C11.4005 4.4 10.7005 4.7 9.9005 4.5C9.444 4.386 9.118 4.055 8.7565 3.688C8.1685 3.091 7.488 2.4 6.0005 2.4ZM3.0005 6C1.4005 6 0.4005 6.8 0.000499725 8.4C0.6005 7.6 1.3005 7.3 2.1005 7.5C2.557 7.614 2.883 7.945 3.2445 8.312C3.833 8.909 4.5135 9.6 6.0005 9.6C7.6005 9.6 8.6005 8.8 9.0005 7.2C8.4005 8 7.7005 8.3 6.9005 8.1C6.444 7.986 6.118 7.655 5.7565 7.288C5.1685 6.691 4.488 6 3.0005 6Z"
            fill="#19A7CE"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_20">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    style: {
      right: "-14rem",
      top: "-7rem",
    },
  },

  {
    title: "JS",
    value: "70%",
    icon: (
      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 1.5C2.17158 1.5 1.5 2.17158 1.5 3V9C1.5 9.82845 2.17158 10.5 3 10.5H9C9.82845 10.5 10.5 9.82845 10.5 9V3C10.5 2.17158 9.82845 1.5 9 1.5H3ZM6.6672 8.0275C7.02655 8.31715 7.38585 8.46015 7.7452 8.4565C7.9652 8.4565 8.13385 8.41615 8.2512 8.3355C8.36485 8.2585 8.4217 8.1485 8.4217 8.0055C8.4217 7.85885 8.36485 7.73415 8.2512 7.6315C8.13385 7.52885 7.91205 7.42615 7.5857 7.3235C7.19335 7.20985 6.89085 7.06315 6.6782 6.8835C6.4692 6.70385 6.36285 6.45265 6.3592 6.13C6.3592 5.82565 6.4912 5.57085 6.7552 5.3655C7.01185 5.16015 7.34005 5.0575 7.7397 5.0575C8.29705 5.0575 8.74435 5.19315 9.0817 5.4645L8.6967 6.064C8.56105 5.95765 8.4052 5.88065 8.2292 5.833C8.0532 5.778 7.89555 5.7505 7.7562 5.7505C7.56555 5.7505 7.41335 5.78535 7.2997 5.855C7.18605 5.92465 7.1292 6.01635 7.1292 6.13C7.1292 6.25465 7.19885 6.361 7.3382 6.449C7.47755 6.53335 7.71585 6.62685 8.0532 6.7295C8.4602 6.8505 8.74985 7.01185 8.9222 7.2135C9.09455 7.41515 9.1807 7.67185 9.1807 7.9835C9.1807 8.3025 9.05785 8.5775 8.8122 8.8085C8.5702 9.03585 8.2182 9.155 7.7562 9.166C7.1512 9.166 6.6452 8.9845 6.2382 8.6215L6.6672 8.0275ZM3.90202 8.3465C4.01936 8.41985 4.16052 8.4565 4.32552 8.4565C4.49786 8.4565 4.64086 8.407 4.75453 8.308C4.8682 8.20535 4.92502 8.0275 4.92502 7.7745V5.1235H5.66755V7.9175C5.65655 8.35015 5.53185 8.66185 5.29355 8.8525C5.15785 8.96615 5.00935 9.04685 4.84802 9.0945C4.68669 9.14215 4.53086 9.166 4.38053 9.166C4.10553 9.166 3.86169 9.11835 3.64902 9.023C3.42169 8.92035 3.23102 8.73885 3.07702 8.4785L3.59402 8.055C3.68936 8.18335 3.79202 8.2805 3.90202 8.3465Z"
          fill="#F0DE36"
        />
      </svg>
    ),
    style: {
      right: "-25rem",
      top: "6rem",
    },
  },
  {
    title: "REACT.JS",
    value: "80%",
    icon: (
      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.0005 6.75005C5.58625 6.75005 5.2505 6.41425 5.2505 6.00005C5.2505 5.5858 5.58625 5.25005 6.0005 5.25005C6.4147 5.25005 6.7505 5.5858 6.7505 6.00005C6.7505 6.41425 6.4147 6.75005 6.0005 6.75005ZM5.73665 8.24725C5.82395 8.3525 5.91195 8.454 6.0005 8.5515C6.089 8.454 6.17705 8.3525 6.2643 8.24725C6.1769 8.2491 6.08895 8.25005 6.0005 8.25005C5.912 8.25005 5.82405 8.2491 5.73665 8.24725ZM4.73918 8.1847C4.3381 8.1423 3.95517 8.08015 3.59634 8.0008C3.55916 8.1756 3.53067 8.3452 3.51121 8.5083C3.41679 9.3 3.54902 9.78085 3.75049 9.89715C3.95195 10.0134 4.43446 9.88755 5.0729 9.40995C5.2044 9.31155 5.33705 9.2021 5.46985 9.08245C5.2217 8.8114 4.97643 8.51085 4.73918 8.1847ZM8.40465 8.0008C8.0458 8.08015 7.66285 8.1423 7.2618 8.1847C7.02455 8.51085 6.77925 8.8114 6.5311 9.08245C6.66395 9.2021 6.79655 9.31155 6.9281 9.40995C7.5665 9.88755 8.04905 10.0134 8.2505 9.89715C8.45195 9.78085 8.5842 9.3 8.48975 8.5083C8.4703 8.3452 8.4418 8.1756 8.40465 8.0008ZM9.1299 7.8068C9.4182 9.1263 9.2664 10.1766 8.6255 10.5466C7.98455 10.9167 6.99905 10.523 6.0005 9.61355C5.0019 10.523 4.01641 10.9167 3.37549 10.5466C2.73456 10.1766 2.58277 9.1263 2.87108 7.8068C1.58421 7.39675 0.750488 6.7401 0.750488 6.00005C0.750488 5.25995 1.58421 4.60334 2.87108 4.19327C2.58277 2.87377 2.73456 1.82343 3.37549 1.4534C4.01641 1.08336 5.0019 1.47707 6.0005 2.38651C6.99905 1.47707 7.98455 1.08336 8.6255 1.4534C9.2664 1.82343 9.4182 2.87377 9.1299 4.19327C10.4167 4.60334 11.2505 5.25995 11.2505 6.00005C11.2505 6.7401 10.4167 7.39675 9.1299 7.8068ZM5.46985 2.9176C5.33705 2.79798 5.2044 2.68851 5.0729 2.59012C4.43446 2.11249 3.95195 1.9866 3.75049 2.10292C3.54902 2.21923 3.41679 2.70005 3.51121 3.49175C3.53067 3.65484 3.55916 3.82445 3.59634 3.99928C3.95517 3.91992 4.3381 3.85778 4.73918 3.81539C4.97643 3.48924 5.2217 3.18868 5.46985 2.9176ZM7.2618 3.81539C7.66285 3.85778 8.0458 3.91992 8.40465 3.99928C8.4418 3.82445 8.4703 3.65484 8.48975 3.49175C8.5842 2.70005 8.45195 2.21923 8.2505 2.10292C8.04905 1.9866 7.5665 2.11249 6.9281 2.59012C6.79655 2.68851 6.66395 2.79798 6.5311 2.9176C6.77925 3.18868 7.02455 3.48924 7.2618 3.81539ZM6.2643 3.75282C6.17705 3.64757 6.089 3.54605 6.0005 3.44855C5.91195 3.54605 5.82395 3.64757 5.73665 3.75282C5.82405 3.75097 5.912 3.75003 6.0005 3.75003C6.08895 3.75003 6.1769 3.75097 6.2643 3.75282ZM4.18626 7.3521C4.14095 7.27735 4.09616 7.20165 4.05193 7.12505C4.00769 7.0484 3.96453 6.97175 3.92244 6.89515C3.87492 7.02335 3.83102 7.15035 3.79084 7.27575C3.91954 7.3037 4.05147 7.32915 4.18626 7.3521ZM5.15245 7.46885C5.42895 7.4894 5.71255 7.50005 6.0005 7.50005C6.28845 7.50005 6.572 7.4894 6.8485 7.46885C7.00455 7.23965 7.15555 6.9994 7.29955 6.75005C7.4435 6.50065 7.5761 6.24975 7.6965 6.00005C7.5761 5.7503 7.4435 5.4994 7.29955 5.25005C7.15555 5.00065 7.00455 4.7604 6.8485 4.53123C6.572 4.51066 6.28845 4.50003 6.0005 4.50003C5.71255 4.50003 5.42895 4.51066 5.15245 4.53123C4.99641 4.7604 4.84543 5.00065 4.70145 5.25005C4.55747 5.4994 4.4249 5.7503 4.30446 6.00005C4.4249 6.24975 4.55747 6.50065 4.70145 6.75005C4.84543 6.9994 4.99641 7.23965 5.15245 7.46885ZM8.07855 5.1049C8.12605 4.9767 8.16995 4.8497 8.21015 4.72429C8.08145 4.69639 7.9495 4.67091 7.8147 4.64795C7.86 4.72271 7.9048 4.79841 7.94905 4.87503C7.9933 4.95165 8.03645 5.0283 8.07855 5.1049ZM3.06571 4.91835C2.89571 4.97357 2.73458 5.0337 2.58361 5.0984C1.85077 5.4125 1.50049 5.7674 1.50049 6.00005C1.50049 6.23265 1.85077 6.5876 2.58361 6.90165C2.73458 6.96635 2.89571 7.0265 3.06571 7.0817C3.1764 6.73125 3.31405 6.36855 3.47788 6.00005C3.31405 5.6315 3.1764 5.2688 3.06571 4.91835ZM3.79084 4.72429C3.83102 4.8497 3.87492 4.9767 3.92244 5.1049C3.96453 5.0283 4.00769 4.95165 4.05193 4.87503C4.09616 4.79841 4.14095 4.72271 4.18626 4.64795C4.05147 4.67091 3.91954 4.69639 3.79084 4.72429ZM8.93525 7.0817C9.10525 7.0265 9.2664 6.96635 9.41735 6.90165C10.1502 6.5876 10.5005 6.23265 10.5005 6.00005C10.5005 5.7674 10.1502 5.4125 9.41735 5.0984C9.2664 5.0337 9.10525 4.97357 8.93525 4.91835C8.82455 5.2688 8.68695 5.6315 8.5231 6.00005C8.68695 6.36855 8.82455 6.73125 8.93525 7.0817ZM8.21015 7.27575C8.16995 7.15035 8.12605 7.02335 8.07855 6.89515C8.03645 6.97175 7.9933 7.0484 7.94905 7.12505C7.9048 7.20165 7.86 7.27735 7.8147 7.3521C7.9495 7.32915 8.08145 7.3037 8.21015 7.27575Z"
          fill="#068FFF"
        />
      </svg>
    ),
    style: {
      left: "-25rem",
      top: "6rem",
    },
  },
  {
    title: "MongoDB",
    value: "80%",
    icon: (
      <svg stroke="currentColor" fill="green" stroke-width="0" role="img" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><title></title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path></svg>
    ),
    style: {
      left: "-25rem",
      bottom: "8rem",
    },
  },
  
  {
    title: "SQL",
    value: "50%",
    icon: (
      <svg  fill="green" stroke-width="0" viewBox="0 0 220 420" width={30} xmlns="http://www.w3.org/2000/svg"><path d="M48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160ZM228,208a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,228,208ZM91.82,196.31a20.82,20.82,0,0,1-9.19,15.23C77.44,215,71,216,65.14,216A60.72,60.72,0,0,1,50,214a8,8,0,0,1,4.3-15.41c4.38,1.2,14.95,2.7,19.55-.36.89-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.55,20.55,0,0,1,9-14.95c11.84-8,30.72-3.31,32.83-2.76a8,8,0,0,1-4.08,15.48c-4.49-1.17-15.22-2.56-19.82.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.08,1.12,1.9,2.31,1.49,6.44,2.68,10.45,3.84C77.5,174.17,94.06,179,91.82,196.31Zm71,3.23A39.05,39.05,0,0,0,168,180c0-19.85-14.35-36-32-36s-32,16.15-32,36,14.35,36,32,36a29.18,29.18,0,0,0,15.9-4.78l2.44,2.44a8,8,0,0,0,11.31-11.32ZM136,200c-8.82,0-16-9-16-20s7.18-20,16-20,16,9,16,20a24.41,24.41,0,0,1-1.18,7.51l-1.17-1.17a8,8,0,1,0-11.31,11.32l1.68,1.67A12.93,12.93,0,0,1,136,200Z"></path>

      </svg>
    ),
    style: {
      right: "-3rem",
      bottom: "-8rem",
    },
  },
  {
    title: "NodeJs",
    value: "70%",
    icon: (
      <svg stroke="white" fill="green" stroke-width="0" viewBox="0 0 640 612"  xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
    ),
    style: {
      right: "-25rem",
      bottom: "6rem",
    },
  },
  {
    title: "TypeScript",
    value: "50%",
    icon: (
      <svg stroke="currentColor" fill="#068fff" stroke-width="0" role="img" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path></svg>
    ),
    style: {
      left: "-25rem",
      bottom: "-2rem",
    },
  },
  {
    title: "SwiftUI",
    value: "50%",
    icon: (
      <svg stroke="currentColor" fill="rgb(0 134 245)" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18.1029473,21.0182797 C15.2758951,22.6513915 11.388774,22.8191853 7.4780286,21.143065 C4.31157263,19.7958689 1.6842374,17.43767 -1.77635684e-15,14.7432778 C0.808438798,15.4168759 1.7515972,15.9559966 2.76211541,16.4272729 C6.80079604,18.320253 10.8386286,18.1906218 13.6802189,16.432119 C13.6784016,16.4303017 13.6771901,16.4290902 13.6759786,16.4272729 C9.63378462,13.3282374 6.19795002,9.28604337 3.63803517,5.98529182 C3.09885386,5.44629224 2.69463446,4.77257305 2.29041506,4.16627424 C5.38939007,6.99574946 10.3075644,10.5660614 12.0587981,11.5770642 C8.35400892,7.6693475 5.05265163,2.81907816 5.18712893,2.95355547 C11.0484011,8.88206627 16.5056356,12.2506622 16.5056356,12.2506622 C16.6861501,12.3524288 16.8254735,12.4372343 16.9375379,12.5129535 C17.0556599,12.2124997 17.1592437,11.9005366 17.2464723,11.5770642 C18.1896307,8.14122958 17.1119949,4.23351289 14.7537961,1 C20.2104248,4.30105442 23.4445434,10.4988227 22.0967416,15.6864968 C22.0616079,15.8264259 22.0234454,15.9645377 21.9822542,16.1002266 C21.9980037,16.1190049 22.0137533,16.138389 22.0295029,16.1583789 C24.7238951,19.5269749 23.9830584,23.0972868 23.6462594,22.4236887 C22.1845759,19.5633201 19.4786744,20.4380283 18.1030079,21.0183403 L18.1029473,21.0182797 Z"></path></svg>
    ),
    style: {
      left: "-4rem",
      bottom: "-8rem",
    },
  },
];