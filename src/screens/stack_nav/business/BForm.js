import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import BFormStep1 from './BFormStep1';
import BFormStep2 from './BFormStep2';
import BFormStep3 from './BFormStep3';
import BFormStep4 from './BFormStep4';
import BFormStep5 from './BFormStep5';
import BFormStep6 from './BFormStep6';

const BForm = ({ navigation }) => {
    const [step, setStep] = useState(1);
    const [component, setComponent] = useState();

    const prevStep = () => {
        if(step <= 1){
            navigation.goBack();
            return;
        }
        setStep(step - 1)
    }

    const nextStep = () => {
        setStep(step + 1)
    }

    useEffect(() => {
        if (step === 1) {
            setComponent(<BFormStep1 nextStep={nextStep} />)
        }
        else if (step === 2) {
            setComponent(<BFormStep2 nextStep={nextStep} />)
        }
        else if (step === 3) {
            setComponent(<BFormStep3 nextStep={nextStep} />)
        }
        else if (step === 4) {
            setComponent(<BFormStep4 nextStep={nextStep} />)
        }
        else if (step === 5) {
            setComponent(<BFormStep5 nextStep={nextStep} />)
        }
        else if (step === 6) {
            setComponent(<BFormStep6 nextStep={nextStep} />)
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

                <Text style={styles.heading}>Business Verification Report</Text>

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

export default BForm;

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