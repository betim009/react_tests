import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import { vi } from 'vitest';

describe('Button Component', () => {
    // renderiza o botão com o rótulo correto
    it('renders the button with the correct label', () => {
        render(<Button label="Click Me" onClick={() => { }} />);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    // chama o manipulador onClick quando clicado
    it('calls the onClick handler when clicked', async () => {
        const handleClick = vi.fn();
        render(<Button label="Click Me" onClick={handleClick} />);
        await userEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});