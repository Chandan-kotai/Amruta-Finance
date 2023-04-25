import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../utils/CustomButton';

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formValue, setFormValue] = useState({ username: "user 1", password: "Abcd123@" });
    const [formError, setFormError] = useState({})

    const handleLogin = () => {
        const validationErrors = validateData();
        setFormError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // const formData = new FormData();
            // formData.append('email', formValue.email);
            // formData.append('password', formValue.password);
            // dispatch(userLogin({ formData: formData, Toast, navigation }))
            // setFormData({ email: "", password: "" })
            navigation.navigate("dashboard")
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

    useEffect(() => {

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
        backgroundColor: "#fff",
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