import React, { Component } from 'react'
import {Welcome} from "./Welcome";

class WelcomeContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Welcome />
        )
    }
}

export {WelcomeContainer};