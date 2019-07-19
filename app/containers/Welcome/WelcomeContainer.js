// @flow

import React, { Component } from "react";
import Welcome from "./Welcome";

type Prop = {};

// eslint-disable-next-line react/prefer-stateless-function
class WelcomeContainer extends Component<Prop> {
    render() {
        return (
            <Welcome />
        );
    }
}

export default WelcomeContainer;
