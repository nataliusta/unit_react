import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders Its good to see you if the button was NOT clicked', () => {
        render(<Greeting />);

        const goodToSeeYou = screen.getByText(`It's good to see you!`);
        expect(goodToSeeYou).toBeInTheDocument();
    });

    
});

