import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
        // ...nothing
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders Its good to see you if the button was NOT clicked', () => {
        render(<Greeting />);

        const goodToSeeYou = screen.getByText(`It's good to see you!`);
        expect(goodToSeeYou).toBeInTheDocument();
    });

    test('renders Changed if the button was clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const changedButton = screen.getByText('Change text!');
        expect(changedButton).toBeInTheDocument();
    }); 

    test('renders if Its good to see you is NOT visible', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const changedButton = screen.queryByText(`It's good to see you!`, { exact: false });
        expect(changedButton).toBeNull();
    });
});

