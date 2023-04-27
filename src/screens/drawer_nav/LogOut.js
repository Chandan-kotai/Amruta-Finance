import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message';
import CustomButton from '../../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogOut = ({ navigation }) => {

    const userLogout = () => {
        AsyncStorage.removeItem('@user');
        Toast.show({
            type: "success",
            text1: "Logged Out Successfully",
        })
        navigation.replace("login");
    }

    return (
        <SafeAreaView>
            <View>
                <View style={styles.mainWrap}>
                    {/* // head */}
                    <View style={styles.headWrap}>
                        <Image style={styles.profile} source={require("../../assets/images/prfile.png")} />
                        <Text style={styles.headText}>{"User 1"}</Text>
                    </View>


                    {/* // Log out */}
                    <View style={styles.logout}>
                        <CustomButton btnText={"Log Out"} onPressFunc={userLogout} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LogOut;

const styles = StyleSheet.create({
    headWrap: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40,
        borderBottomColor: "#b6b8ba",
        borderBottomWidth: 1,
        width: "100%",
    },
    mainWrap: {
        position: "relative",
        height: "100%",
        alignItems: "center",
    },
    headText: {
        fontSize: 18,
        color: "#000",
        marginVertical: 10,
        fontWeight: "bold",
    },
    optionWrap: {
        // borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        width: "95%",

    },
    options: {
        fontSize: 14,
        color: "#000",
        shadowColor: "#2D75FF",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: "white",
        borderRadius: 7,
        marginBottom: 10,
        paddingHorizontal: 70,
        paddingVertical: 7,
        textAlign: "center",
    },
    profile: {
        width: 100,
        height: 100,
    },
    logout: {
        position: "absolute",
        bottom: 20,
    }
})