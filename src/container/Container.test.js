import { render } from '@testing-library/react';
import {ClockContainer} from './ClockContainer';

describe('Clock container component', function () {

    it('renders Analog, Digital and Set Time components', () => {
        const {queryAllByTestId} = render(<ClockContainer/>)
        expect(queryAllByTestId('digital-clock')).toBeTruthy();
        expect(queryAllByTestId('analog-clock')).toBeTruthy();
        
    });
});
