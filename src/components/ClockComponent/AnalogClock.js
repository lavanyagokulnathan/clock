import {AnalogClockWrapper, HourHand, MinuteHand, SecHand, Numbers} from './styles';
export function AnalogClock({hh, mm, ss}) {

    const clockNumbers = {
                "twelve": 12,
                "one": 1,
                "two": 2,
                "three": 3,
                "four": 4,
                "five": 5,
                "six": 6,
                "seven": 7,
                "eight": 8,
                "nine": 9,
                "ten": 10,
                "eleven": 11
            }

    const hoursDegrees = hh * 30 + mm /2;
    const minutesDegrees = mm * 6 + ss /10;
    const secondsDegrees = ss * 6;
            
    return (
        <AnalogClockWrapper>
            <HourHand style={{transform: `rotateZ(${hoursDegrees}deg)`}}/>
            <MinuteHand style={{transform: `rotateZ(${minutesDegrees}deg)`}}/>
            <SecHand style={{transform: `rotateZ(${secondsDegrees}deg)`}}/>
            {
                Object.keys(clockNumbers).map(number => {
                    return <Numbers className={number} key={number}>{clockNumbers[number]}</Numbers>
                })
            }
        </AnalogClockWrapper>
    );
}
  
  
