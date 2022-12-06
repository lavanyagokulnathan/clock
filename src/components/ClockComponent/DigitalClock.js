import styled from 'styled-components';

const Wrapper = styled.div`
  justify-content: center;
  margin: auto;
  font-family: 'Orbitron', san-serif;
  font-size: 100px;
  color: #16cc86;
  padding-top:20px;
`;


export function DigitalClock({hh, mm, ss}){
  const hr = hh > 9 ? hh : '0' + hh;
  const min = mm > 9 ? mm : '0' + mm;
  const sec = ss > 9 ? ss : '0' + ss;
  return (
    <Wrapper>
      {hr}: {min} : {sec}
    </Wrapper>
  );
}