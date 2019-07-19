// @flow

import * as React from "react";
import { View } from "react-native";

type Props = {
    children?: React.Node
}

const ViewLX = (props: Props) => {
    const { children } = props;
    return (
        <View>
            {children}
        </View>
    );
};

export default ViewLX;
