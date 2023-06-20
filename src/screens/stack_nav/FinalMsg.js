import { Text, View, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FinalMsg = ({ navigation }) => {
    useEffect(() => {
        const getUser = async ()=>{
            const res = await AsyncStorage.getItem("@user");
            const user = JSON.parse(res);
            // console.log(user);
            const {id} = user;
            setTimeout(() => {
                navigation.replace("dnav", {id: id});
            }, 1500)
        }
        getUser();
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