import styled from "styled-components";

const SetTimeDiv = styled.div`
  height: 50px;
  margin-left: 50px;
  color: #16cc86;
`;

const TimeInput = styled.input`
  border: 1px solid #16cc86;
  background: #1a1a1a;
  color: #16cc86;
  width: 200px;
  height: 45px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid #16cc86;
  background: #1a1a1a;
  color: #16cc86;
  &:hover {
    background: #1d2723;
  }
`;


export function SetTime({isCustomTime, enableCustomTime, setIsCustomTime, updateHr, updateMin}) {

  return (
      <SetTimeDiv>
        {!isCustomTime &&  <Button onClick={enableCustomTime} data-testid="set-time"> Set Time</Button> }
        { isCustomTime && 
          <>
             HH: <TimeInput type='number' min='0' max='23' data-testid="hours-input"
                      onChange={updateHr} 
                  />
             MM: <TimeInput type='number' min='0' max='60' data-testid="min-input"
                    onChange={updateMin}
                  />
            <Button onClick={() => setIsCustomTime(false)}> Reset</Button> 
          </>
        }
      </SetTimeDiv>
  );
}