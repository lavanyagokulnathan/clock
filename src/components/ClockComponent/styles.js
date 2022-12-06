import styled from 'styled-components';

export const AnalogClockWrapper = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-left: 50%;
    margin-top: 10%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 30px #16cc86;
    font-size: 24px;
    color: #444;
    text-align: center;
    &::after {
        background: #aaa;
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #fff;
    }
`;

export const HourHand = styled.div`
    position: absolute;
    width: 6px;
    height: 60px;
    background: #16cc86;
    top: 30%;
    left: 49%;
    transform-origin: bottom;
`;

export const MinuteHand = styled.div`
    position: absolute;
    width: 4px;
    height: 80px;
    background: #16cc86;
    top: 22.5%;
    left: 49%;
    transform-origin: bottom;
`;

export const SecHand = styled.div`
    position: absolute;
    width: 2px;
    height: 118px;
    background: red;
    top: 10.5%;
    left: 50%;
    transform-origin: bottom;
`;  

export const Numbers = styled.div`
    position: absolute;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
    color: #16cc86;

    &.twelve {
        top: 10px;
        left: 46%;
    }
    &.one {
        top: 10%;
        right: 26%;
    }
    &.twelve {
        top: 10px;
        left: 46%;
    }
    &.eleven {
        top: 10%;
        left: 26%;
    }
    &.two {
        top: 25%;
        right: 10%;
    }
      
    &.three {
        right: 10px;
        top: 46%;
    }
    &.four {
        right: 30px;
        top: 67%;
    }
      
    &.five {
        right: 78px;
        top: 80%;
    }
      
    &.six {
        bottom: 10px;
        left: 50%;
    }
      
    &.seven {
        left: 80px;
        top: 82%;
    }
      
    &.eight {
        left: 30px;
        top: 67%;
    }
      
    &.nine {
        left: 10px;
        top: 46%;
    }
      
    &.ten {
        top: 25%;
        left: 10%;
    }
      
      
`;


  