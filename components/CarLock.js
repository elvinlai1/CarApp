import React, { useState } from "react";
import { Switch, View } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const CarLock = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <Icon name={isEnabled ? "lock-outline" : "lock-open-variant-outline"} size={50}/>
            <Switch
                style={{transform:[{scale:1.5}]}}
                trackColor={{ false: "#CB4335", true: "#2ECC71" }}
                thumbColor={isEnabled ? "#2ECC71" : "#CB4335"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
        </View>
    );
}

export default CarLock;