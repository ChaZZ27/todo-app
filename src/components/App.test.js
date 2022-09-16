import { render, screen } from "@testing-library/react"; 
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
    test('render <App> component', () => {
        render(<App />)
    })

    test('render <h1> with "TODO list" text', () => {
        render(<App />)
        const headerElement = screen.getByText(/TODO list/i);
        expect(headerElement).toBeInTheDocument();
    })
})