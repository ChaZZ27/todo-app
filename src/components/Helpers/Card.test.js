import Card from "./Card";
import { render } from "@testing-library/react";


describe('Card component', () => {
    test('render <Card> component without crashing', () => {
        render(<Card />)
    })
})