// @flow

import * as React from "react";
import { Text } from "react-native";

type Props = {
    children?: React.Node
}

const TextLX = (props: Props) => {
    const { children } = props;

    return (
        <Text>{children}</Text>
    );
};

export default TextLX;
