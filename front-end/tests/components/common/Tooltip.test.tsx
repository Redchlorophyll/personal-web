import React from 'react';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import Tooltip from '@/components/common/Tooltip/Index';

describe('components - common - tooltip', () => {
    beforeEach(() => {
        render(<Tooltip tooltipContent={'this is tooltip'}>Click me Please!</Tooltip>);
    });

    test('it should render properly', () => {
        const target = screen.getByText('Click me Please!');
        
        expect(target).toBeInTheDocument();
    });

    test('it should show tooltip content when being hovered', () => {
        const target = screen.getByText('Click me Please!');
        fireEvent.mouseOver(target);
        const tooltipContent = screen.getByText('this is tooltip');
        
        expect(tooltipContent).toBeInTheDocument();
    });
});