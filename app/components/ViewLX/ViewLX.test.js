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
    });
});
