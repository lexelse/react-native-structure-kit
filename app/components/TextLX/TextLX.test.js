import React from "react";
import { shallow } from "enzyme";
import TextLX from "./TextLX";

describe("TextLX", () => {
    describe("Rendering", () => {
        it("should match to snapshot", () => {
            const component = shallow((<TextLX />)).debug();
            expect(component).toMatchSnapshot();
        });

        it("should match to snapshot with props.children", () => {
            const component = shallow((<TextLX>HELLO WORLD</TextLX>)).debug();
            expect(component).toMatchSnapshot();
        });
    });
});
