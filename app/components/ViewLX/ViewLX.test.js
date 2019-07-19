import React from "react";
import { shallow } from "enzyme";
import ViewLX from "./ViewLX";
import TextLX from "../TextLX/TextLX";

describe("ViewLX", () => {
    describe("rendering", () => {
        it("should match the snapshot", () => {
            const component = shallow(<ViewLX />).debug();
            expect(component).toMatchSnapshot();
        });

        describe("with props", () => {
            it("should render 'children' prop", () => {
                const component = shallow(<ViewLX><TextLX>HELLO WORLD</TextLX></ViewLX>).debug();
                expect(component).toMatchSnapshot();
            });
        });


        it.only("the data is peanut butter", () => {
            const mockCallBack = jest.fn();
            console.log(mockCallBack());

            mockCallBack.mockReturnValueOnce("first")
                .mockReturnValueOnce("second")
                .mockReturnValue(true);

            console.log(mockCallBack(), mockCallBack(), mockCallBack(), mockCallBack());
        });
    });
});

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}
