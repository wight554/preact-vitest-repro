import { App } from "./app";
import { render, screen } from '@testing-library/preact';
import { BrowserRouter } from "react-router-dom";

it('should render app', () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    expect(screen.getByText(/Click on the Vite/)).toBeDefined();
})
