import React from "react";
import { shallow } from "enzyme";
import TextLX from "./TextLX";

describe("TextLX", () => {
    describe("Rendering", () => {
        it("should match to snapshot", () => {
            const component = shallow(<TextLX />);
            expect(component).toMatchSnapshot();
        });
    });
});
