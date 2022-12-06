import { render, fireEvent, screen } from '@testing-library/react';
import {ClockContainer} from './ClockContainer';

describe('Clock container component', function () {

    it('renders Analog, Digital and Set Time components', () => {
        const {queryAllByTestId} = render(<ClockContainer/>)
        expect(queryAllByTestId('digital-clock')).toBeTruthy();
        expect(queryAllByTestId('analog-clock')).toBeTruthy();
        
    });
    it('sets the updated hours when updateHr is called', () => {
        const {getByTestId, queryAllByTestId} = render(<ClockContainer/>)
        const updateHr = jest.fn();
        const setTimeBtn = getByTestId('set-time')
        fireEvent.click(setTimeBtn);
        expect(queryAllByTestId('hours-input')).toBeTruthy();
        
        const hrInput = getByTestId('hours-input')
        fireEvent.change(hrInput, {target: {value: '10'}});
        expect(screen.getByTestId('digital-clock')).toHaveTextContent('10');
    });
});
