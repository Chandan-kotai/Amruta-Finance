import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import RFormStep1 from './RFormStep1';
import RFormStep2 from './RFormStep2';
import RFormStep3 from './RFormStep3';
import RFormStep4 from './RFormStep4';
import RFormStep5 from './RFormStep5';
import RFormStep6 from './RFormStep6';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RForm = ({ navigation, route }) => {
    const [step, setStep] = useState(1);
    const [component, setComponent] = useState();
    const [step1, setStep1] = useState();
    const [step2, setStep2] = useState();
    const [step3, setStep3] = useState();
    const [step4, setStep4] = useState();
    const [step5, setStep5] = useState();
    const [user, setUser] = useState();
    const { item } = route?.params;

    // console.log("step 1=>", step1);
    // console.log("step 2=>", step2);
    // console.log("step 3=>", step3);
    // console.log("step 4=>", step4);
    // console.log("step 5=>", step5);

    const prevStep = () => {
        if (step <= 1) {
            navigation.goBack();
            return;
        }
        setStep(step - 1)
    }

    const nextStep = () => {
        setStep(step + 1)
    }

    useEffect(() => {
        const checkUser = async ()=>{
            const data = await AsyncStorage.getItem('@user')
            setUser(JSON.parse(data))
        }
        checkUser();

        if (step === 1) {
            setComponent(<RFormStep1 nextStep={nextStep} setStep1={setStep1} item={item} />)
        }
        else if (step === 2) {
            setComponent(<RFormStep2 nextStep={nextStep} setStep2={setStep2}/>)
        }
        else if (step === 3) {
            setComponent(<RFormStep3 nextStep={nextStep} setStep3={setStep3}/>)
        }
        else if (step === 4) {
            setComponent(<RFormStep4 nextStep={nextStep} setStep4={setStep4}/>)
        }
        else if (step === 5) {
            setComponent(<RFormStep5 nextStep={nextStep} setStep5={setStep5}/>)
        }
        else if (step === 6) {
            setComponent(<RFormStep6 navigation={navigation} step1={step1} step2={step2} step3={step3} step4={step4} step5={step5} username={user.username} />)
        }
    }, [step]);


    return (
        <SafeAreaView style={styles.parent}>
            <View style={{ width: "95%" }}>
                {/* Navigation */}
                <TouchableOpacity onPress={() => prevStep()}>
                    <View style={{ alignSelf: "flex-start", }}>
                        <Image style={{ width: 20, height: 20, marginTop: 8 }} source={require("../../../assets/icons/nav.png")} />
                    </View>
                </TouchableOpacity>

                {/* // head logo */}
                <View style>
                    <Image style={styles.img} source={require("../../../assets/images/logo.png")} />
                </View>

                <Text style={styles.heading}>Residence Verification Report</Text>

                {/* Steps */}
                <View style={styles.stepsWrap}>
                    {/* Step 1 */}
                    <View style={styles.steps}>
                        <Text style={styles.stepsNum}>1</Text>
                    </View>

                    {/* Connector */}
                    <View style={step >= 2 ? styles.connector : styles.connectorDeactivate}></View>

                    {/* Step 2 */}
                    <View style={step >= 2 ? styles.steps : styles.stepsDeactive}>
                        <Text style={step >= 2 ? styles.stepsNum : styles.stepsNumDeactive}>2</Text>
                    </View>

                    {/* Connector */}
                    <View style={step >= 3 ? styles.connector : styles.connectorDeactivate}></View>

                    {/* Step 3 */}
                    <View style={step >= 3 ? styles.steps : styles.stepsDeactive}>
                        <Text style={step >= 3 ? styles.stepsNum : styles.stepsNumDeactive}>3</Text>
                    </View>

                    {/* Connector */}
                    <View style={step >= 4 ? styles.connector : styles.connectorDeactivate}></View>

                    {/* Step 4 */}
                    <View style={step >= 4 ? styles.steps : styles.stepsDeactive}>
                        <Text style={step >= 4 ? styles.stepsNum : styles.stepsNumDeactive}>4</Text>
                    </View>

                    {/* Connector */}
                    <View style={step >= 5 ? styles.connector : styles.connectorDeactivate}></View>

                    {/* Step 5 */}
                    <View style={step >= 5 ? styles.steps : styles.stepsDeactive}>
                        <Text style={step >= 5 ? styles.stepsNum : styles.stepsNumDeactive}>5</Text>
                    </View>

                    {/* Connector */}
                    <View style={step >= 6 ? styles.connector : styles.connectorDeactivate}></View>

                    {/* Step 6 */}
                    <View style={step >= 6 ? styles.steps : styles.stepsDeactive}>
                        <Text style={step >= 6 ? styles.stepsNum : styles.stepsNumDeactive}>6</Text>
                    </View>

                </View>

                {/* Form */}
                {component}
            </View>
        </SafeAreaView>
    )
}

export default RForm;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },
    img: {
        width: 280,
        height: 40,
        marginLeft: 35,
    },
    heading: {
        fontSize: 22,
        textAlign: "center",
        color: "#48B846",
        fontWeight: "bold",
        marginTop: 40,
    },
    stepsWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    steps: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#48B846",
        borderRadius: 100,
        backgroundColor: "#C7FFC6"
    },
    stepsDeactive: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#C7C3C3",
        borderRadius: 100,
        backgroundColor: "#E9E9E9"
    },
    stepsNum: {
        color: "#48B846",
        fontWeight: "bold",
        fontSize: 16
    },
    stepsNumDeactive: {
        color: "#B7BEB7",
        fontWeight: "bold",
        fontSize: 16
    },
    connector: {
        width: 30,
        height: 2,
        backgroundColor: "#48B846"
    },
    connectorDeactivate: {
        width: 30,
        height: 2,
        backgroundColor: "#E9E9E9"
    },
})