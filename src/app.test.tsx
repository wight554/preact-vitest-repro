import { App } from "./app";
import { render, screen } from '@testing-library/preact';

it('should render app', () => {
    render(<App />);

    expect(screen.getByText(/Click on the Vite/)).toBeDefined();
})
