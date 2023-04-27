import { Text, View, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'

const FinalMsg = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("dnav")
        }, 1500)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
            <View>
                <View style={{}}>
                    <Image style={{ width: 170, height: 170 }} source={require("../../assets/icons/correct.png")} />
                </View>
                <Text style={{ textAlign: 'center', marginTop: 24, color: "#48B846", fontSize: 28, fontWeight: "bold", }}>Successful</Text>
            </View>
        </SafeAreaView>
    )
}

export default FinalMsg;