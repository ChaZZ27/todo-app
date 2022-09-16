import { getByRole, render, screen } from "@testing-library/react"; 
import ListItemForm from "./ListItemForm";
import ListContainer from "./ListContainer";
import { fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('TODO list component tests', () => {
    test('TODO list renders correctly after adding one item', () => {
        render(<ListItemForm data={jest.fn()} />)
        const formInput = screen.getByPlaceholderText(/What we need to do?/i)
        const formButton = screen.getByText(/Add new item/i);
        fireEvent.change(formInput, {target: {value: 'dummy text'}})
        fireEvent.click(formButton)

        const list = [{id: 1, text: 'dummy text', isFinished: false}]
        render(<ListContainer list={list} />)
        expect(screen.getByRole('list')).toContainHTML('</li>');
    })
})