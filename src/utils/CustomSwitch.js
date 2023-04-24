import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'

const CustomSwitch = ({ isEnabled, setIsEnabled, text}) => {
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <Text style={{ marginLeft: 15, fontSize: 16, color: "#484848", }}>{text}</Text>
            <Switch
                trackColor={{ false: '#BEBFBE', true: '#48B846' }}
                onValueChange={toggleSwitch}
                ios_backgroundColor="#3e3e3e"
                value={isEnabled}
            />
        </View>
    )
}

export default CustomSwitch

const styles = StyleSheet.create({})