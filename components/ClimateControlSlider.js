import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';

const ClimateControlSlider = () =>{
    state = {
        value: 0.2,
    };


        return (
            <View style={styles.container}>
                <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState({value})}
                />
                <Text>Value: {this.state.value}</Text>
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});

export default ClimateControlSlider;