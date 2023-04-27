import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../utils/CustomButton';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formValue, setFormValue] = useState({ username: "peter123", password: "Abcd123@" });
    const [formError, setFormError] = useState({})

    const handleLogin = () => {
        const validationErrors = validateData();
        setFormError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const formData = new FormData();
            formData.append('username', formValue.username);
            formData.append('password', formValue.password);

            userLogin(formData);
        }
    }

    const validateData = () => {
        const error = {};
        const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // username validation
        if (!formValue.username) {
            error.username = "*Username is Required!"
        }

        // password validation
        if (!formValue.password) {
            error.password = "*Password is Required!";
        } else if (formValue.password.length < 8) {
            error.password = "*Password should be Minimum 8 Characters Long!";
        } else if (!pwRegex.test(formValue.password)) {
            // error.password = "*Password should Contain Alphanumeric and Special Characters without Blank Space!";
            error.password = "*Password should Contain at least 1 Uppercase, Lowercase & Special Character Without Blank Space!";
        }

        return error;
    }

    const userLogin = async (formData) => {
        const config = {
            method: "post",
            url: "http://192.168.1.14/amruta/public/api/login",
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formData,
        }

        try {
            const res = await axios(config);
            // console.log(res.data);
            if (res?.data?.Status === "true") {
                AsyncStorage.setItem('@user', JSON.stringify(res?.data?.data[0]))
                Toast.show({
                    type: "success",
                    text1: "Login Successful",
                    text2: "Welcome " + res?.data?.data[0].name,
                })
                navigation.replace("dnav");
                setFormValue({ email: "", password: "" });
            } else {
                Toast.show({
                    type: "info",
                    text1: "Login Failed",
                    text2: "Pleaase Try Again",
                })
            }

        } catch (exc) {
            Toast.show({
                type: "error",
                text1: exc.message,
                text2: "Something Went Wrong. Pleaase Try Again",
            })
        }
    }

    const checkUser = async ()=>{
        const data = await AsyncStorage.getItem('@user')
        const user = JSON.parse(data)
        // console.log(data, user)
        if(user){
            navigation.replace("dnav")
        }
    }

    useEffect(() => {
        checkUser()
    }, [])

    return (
        <SafeAreaView styles={styles.parent}>
            <ScrollView style={{ backgroundColor: "#C7FFC6", height: "100%" }}>
                <View style={{}}>

                    {/* // head logo */}
                    <View style={styles.headWrap}>
                        <Image style={styles.img} source={require("../../assets/images/logo.png")} />
                    </View>

                    {/* // body */}
                    <View Style={styles.bodyWrap}>
                        <Text style={styles.text}>LOGIN IN HERE</Text>

                        {/* // input sections */}
                        <View style={styles.inputGrp}>

                            {/* // email */}
                            <View style={[styles.inputBoxWrap, {}]}>

                                <Image style={{ marginHorizontal: 15 }} source={require("../../assets/icons/username.png")} />

                                <TextInput
                                    style={[styles.inputBox,]}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder={"Username"}
                                    value={formValue.username}
                                    onChangeText={value => setFormValue({ ...formValue, username: value })}
                                />
                            </View>
                            {formError.username ?
                                <Text style={styles.error}>{formError.username}</Text>
                                : null
                            }

                            {/* // password */}

                            <View style={[styles.inputBoxWrap, { flexDirection: "row", justifyContent: "space-between", marginTop: 30 }]}>

                                <Image style={{ marginLeft: 15, marginRight: 10 }} source={require("../../assets/icons/password.png")} />

                                <TextInput
                                    style={[styles.inputBox,]}
                                    secureTextEntry={showPassword ? false : true}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder={"Enter Your Password"}
                                    value={formValue.password}
                                    onChangeText={value => setFormValue({ ...formValue, password: value })}
                                />

                                <TouchableOpacity style={styles.eye} onPress={() => setShowPassword(!showPassword)}>
                                    <Image
                                        style={{ width: 20, height: 20 }}
                                        source={showPassword ? require("../../assets/icons/view.png") : require("../../assets/icons/hide.png")}
                                    />
                                </TouchableOpacity>
                            </View>
                            {formError.password ?
                                <Text style={styles.error}>{formError.password}</Text>
                                : null
                            }
                        </View>

                        {/* // button */}
                        <View style={{ marginTop: 40, marginHorizontal: 28, marginBottom: 15 }}>
                            <CustomButton btnText={"LOGIN"} onPressFunc={handleLogin} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: "center",
    },
    headWrap: {
        alignItems: "center",
        height: 200,
        justifyContent: "center"
    },
    img: {
        width: 330,
        height: 60,
        marginLeft: 15,
        marginTop: 20,
    },
    bodyWrap: {
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#48B846",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 70,
        textAlign: "center",
    },
    inputGrp: {
        marginHorizontal: 28,
        alignSelf: "stretch"
    },
    inputBoxWrap: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#08417E82',
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
    },
    inputBox: {
        paddingLeft: 10,
        paddingVertical: 5,
        flex: 1,
    },
    eye: {
        marginHorizontal: 10
    },
    error: {
        color: "#f00",
        marginLeft: 10,
        marginTop: 3,
        fontSize: 12,
    }
})