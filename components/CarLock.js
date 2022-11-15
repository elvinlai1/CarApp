import React, { useState } from "react";
import { Switch, View } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const CarLock = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
            <Icon name={isEnabled ? "lock-outline" : "lock-open-variant-outline"} size={40}/>
        </View>
    );
}

export default CarLock;