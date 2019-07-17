import React from "react";
import { View } from "react-native";

const ViewLX = (props) => {
    const { children } = props;
    return (
        <View>
            {children}
        </View>
    );
};

export default ViewLX;
