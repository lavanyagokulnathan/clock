import { render, fireEvent } from '@testing-library/react';
import {SetTime} from '../ClockComponent/SetTime';

describe('Set time component', function () {

    it('renders set time button', () => {
        const {queryAllByTestId} = render(<SetTime/>)
        const setTimeBtn = queryAllByTestId('set-time')
        expect(setTimeBtn).toBeTruthy();
    });
    it('calls enableCustomTime function when set time button is clicked ', () => {
        const enableCustomTime = jest.fn();
        const {getByTestId} = render(<SetTime enableCustomTime={enableCustomTime} />)
        const setTimeBtn = getByTestId('set-time')
        fireEvent.click(setTimeBtn);
        expect(enableCustomTime).toHaveBeenCalledTimes(1)
    });
    it('displays Hours and Minute Input', () => {
        const {getByTestId, queryAllByTestId} = render(<SetTime/>)
        const setTimeBtn = getByTestId('set-time')
        fireEvent.click(setTimeBtn);
        expect(queryAllByTestId('hours-input')).toBeTruthy();
        expect(queryAllByTestId('min-input')).toBeTruthy();
    });
 
});

