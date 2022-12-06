import { useEffect, useState } from 'react';
import { DigitalClock } from '../components/ClockComponent/DigitalClock';
import { AnalogClock } from '../components/ClockComponent/AnalogClock';
import {SetTime} from '../components/ClockComponent/SetTime';
import styled from "styled-components";


const Wrapper = styled.div`
  margin: 20px;
  height: 900px;
  display: grid;
  grid-template-rows: 200px 500px 200px;
`;

export function ClockContainer() {

  const date = new Date();
  const [hh, setHr] = useState(date.getHours());
  const [mm, setMin] = useState(date.getMinutes());
  const [ss, setSec] = useState(date.getSeconds());
  const [isCustomTime, setIsCustomTime] = useState(false);

  function refreshClock() {
    const now = new Date()
    setHr(now.getHours())
    setMin(now.getMinutes())
    setSec(now.getSeconds())
  }

  useEffect(() => {
    if(!isCustomTime) {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }
  }, [isCustomTime]);

  useEffect(() => {
    if(isCustomTime) {
      const timerId = setInterval(refreshCustomClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }
  }, [hh,mm,ss]);

  const refreshCustomClock = () => {
    const now = new Date()
    now.setHours(hh)
    now.setMinutes(mm)
    now.setSeconds(ss + 1)
    setHr(now.getHours())
    setMin(now.getMinutes())
    setSec(now.getSeconds())
  }

  const enableCustomTime = () => {
    setIsCustomTime(true)
  }

  const updateHr = (e) => {
    const now = new Date();
    now.setHours(e.target.value)
    setHr(now.getHours())
  }

  const updateMin = (e) => {
    const now = new Date();
    now.setMinutes(e.target.value)
    setMin(now.getMinutes())
  }

  return (
    <Wrapper style={{background: '#1a1a1a'}}>
      <DigitalClock hh={hh} mm={mm} ss={ss} data-testid='digital-clock'/>
      <AnalogClock hh={hh} mm={mm} ss={ss} data-testid='analog-clock'/>
      <SetTime 
        isCustomTime={isCustomTime} 
        enableCustomTime={enableCustomTime}
        setIsCustomTime={setIsCustomTime}
        updateHr={updateHr} 
        updateMin={updateMin}
      />
    </Wrapper>
  );
}