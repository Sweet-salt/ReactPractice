import {fireEvent, getByText, render} from "@testing-library/react";
import Button from "./Button"
describe('button 컴포넌트 test', () => {
    it('컴포넌트가 정상적으로 생성된다', () => {
        const button = render(<Button />);
        expect(button).not.toBe(null);
    });
    it('"button" 이라고 쓰여있는 엘리먼트는 HTMLButtonElement이다.', () => {
        const buttonElement = getByText("button");

        expect(buttonElement).toBeInstanceOf(HTMLButtonElement);

        fireEvent.click(buttonElement);

        const p = getByText(" 이라고 쓰여있는");
        expect(p).not.toBeNull();
        
    });

})