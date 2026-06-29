// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoreSync title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoreSync/i);
    expect(titleElement).toBeInTheDocument();
});
