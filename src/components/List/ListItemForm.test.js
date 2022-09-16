import { render, screen } from "@testing-library/react"; 
import ListItemForm from "./ListItemForm";
import { fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('TODO form component tests', () => {
    test('TODO form component renders correctly', () => {
        render(<ListItemForm />)
    })
})