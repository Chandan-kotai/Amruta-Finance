import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomSwitch from '../../../utils/CustomSwitch';
import CustomButton from '../../../utils/CustomButton';
import Toast from 'react-native-toast-message'

const RFormStep4 = ({ nextStep, setStep4 }) => {
    const [labour, setLabour] = useState(false);
    const [pep, setPep] = useState(false);
    const [gambling, setGambling] = useState(false);
    const [tobaco, setTobaco] = useState(false);
    const [pornography, setPornography] = useState(false);
    const [arms, setArms] = useState(false);

    const [formValue, setFormValue] = useState({
        is_labour: labour ? "Yes" : "No",
        is_labour_reason: "",
        is_pep: pep ? "Yes" : "No",
        is_pep_reason: "",
        is_gambling: gambling ? "Yes" : "No",
        is_gambling_reason: "",
        is_tobaco: tobaco ? "Yes" : "No",
        is_tobaco_reason: "",
        is_pornography: pornography ? "Yes" : "No",
        is_pornography_reason: "",
        is_arms: arms ? "Yes" : "No",
        is_arms_reason: "",
        others_reason: ""
    });
    const [formError, setFormError] = useState({});

    const handleFormData = () => {
        const validationErrors = validateForm();
        setFormError(validationErrors);
        // console.log("outside if", address);

        formValue.is_labour = labour ? "Yes" : "No";
        formValue.is_pep = pep ? "Yes" : "No";
        formValue.is_gambling = gambling ? "Yes" : "No";
        formValue.is_tobaco = tobaco ? "Yes" : "No";
        formValue.is_pornography = pornography ? "Yes" : "No";
        formValue.is_arms = arms ? "Yes" : "No";

        if (Object.keys(validationErrors).length === 0) {
            // console.log("inside if");
            setStep4(formValue)
            Toast.show({
                type: "success",
                text1: "Data Saved Successfully",
            })
            nextStep()
        }
    }

    const validateForm = () => {
        const error = {}
        const {
            is_labour_reason,
            is_pep_reason,
            is_gambling_reason,
            is_tobaco_reason,
            is_pornography_reason,
            is_arms_reason,
            others_reason
        } = formValue;

        if (labour) {
            if (!is_labour_reason) {
                error.is_labour_reason = "Please Fill Up this Field"
            }
        }
        if (pep) {
            if (!is_pep_reason) {
                error.is_pep_reason = "Please Fill Up this Field"
            }
        }
        if (gambling) {
            if (!is_gambling_reason) {
                error.is_gambling_reason = "Please Fill Up this Field"
            }
        }
        if (tobaco) {
            if (!is_tobaco_reason) {
                error.is_tobaco_reason = "Please Fill Up this Field"
            }
        }
        if (pornography) {
            if (!is_pornography_reason) {
                error.is_pornography_reason = "Please Fill Up this Field"
            }
        }
        if (arms) {
            if (!is_arms_reason) {
                error.is_arms_reason = "Please Fill Up this Field"
            }
        }
        if (!others_reason) {
            error.others_reason = "Please Fill Up this Field"
        }

        return error;
    }

    useEffect(() => {

    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 200, marginTop: 20 }}>
            <View style={styles.inputGrp}>
                {/* Any other suspicious activity seen */}
                <Text style={styles.heading}>Any other suspicious activity seen</Text>

                {/* // Forced Labour / Child Labour */}
                <CustomSwitch isEnabled={labour} setIsEnabled={setLabour} text={"Forced Labour / Child Labour"} />

                {/* // If Yes Please Specify */}
                {labour ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Yes Please Specify</Text>
                    : null
                }
                {labour ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.is_labour_reason}
                        onChangeText={value => setFormValue({ ...formValue, is_labour_reason: value })}
                    />
                    : null
                }
                {formError?.is_labour_reason ?
                    <Text style={styles.error}>{formError?.is_labour_reason}</Text>
                    : null
                }

                {/* Political Connection(PEP) */}
                <CustomSwitch isEnabled={pep} setIsEnabled={setPep} text={"Political Connection(PEP)"} />

                {/* // If Yes Please Specify */}
                {pep ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Yes Please Specify</Text>
                    : null
                }
                {pep ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.is_pep_reason}
                        onChangeText={value => setFormValue({ ...formValue, is_pep_reason: value })}
                    />
                    : null
                }
                {formError?.is_pep_reason ?
                    <Text style={styles.error}>{formError?.is_pep_reason}</Text>
                    : null
                }

                {/* Gambling */}
                <CustomSwitch isEnabled={gambling} setIsEnabled={setGambling} text={"Gambling"} />

                {/* // If Yes Please Specify */}
                {gambling ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Yes Please Specify</Text>
                    : null
                }
                {gambling ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.is_gambling_reason}
                        onChangeText={value => setFormValue({ ...formValue, is_gambling_reason: value })}
                    />
                    : null
                }
                {formError?.is_gambling_reason ?
                    <Text style={styles.error}>{formError?.is_gambling_reason}</Text>
                    : null
                }

                {/* Tobaco Trading */}
                <CustomSwitch isEnabled={tobaco} setIsEnabled={setTobaco} text={"Tobaco Trading"} />

                {/* // If Yes Please Specify */}
                {tobaco ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Yes Please Specify</Text>
                    : null
                }
                {tobaco ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.is_tobaco_reason}
                        onChangeText={value => setFormValue({ ...formValue, is_tobaco_reason: value })}
                    />
                    : null
                }
                {formError?.is_tobaco_reason ?
                    <Text style={styles.error}>{formError?.is_tobaco_reason}</Text>
                    : null
                }

                {/* Pornography */}
                <CustomSwitch isEnabled={pornography} setIsEnabled={setPornography} text={"Pornography"} />

                {/* // If Yes Please Specify */}
                {pornography ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Yes Please Specify</Text>
                    : null
                }
                {pornography ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.is_pornography_reason}
                        onChangeText={value => setFormValue({ ...formValue, is_pornography_reason: value })}
                    />
                    : null
                }
                {formError?.is_pornography_reason ?
                    <Text style={styles.error}>{formError?.is_pornography_reason}</Text>
                    : null
                }

                {/* Arms & Ammunition */}
                <CustomSwitch isEnabled={arms} setIsEnabled={setArms} text={"Arms & Ammunition"} />

                {/* // If Yes Please Specify */}
                {arms ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Yes Please Specify</Text>
                    : null
                }
                {arms ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.is_arms_reason}
                        onChangeText={value => setFormValue({ ...formValue, is_arms_reason: value })}
                    />
                    : null
                }
                {formError?.is_arms_reason ?
                    <Text style={styles.error}>{formError?.is_arms_reason}</Text>
                    : null
                }

                {/* // Others, please specify */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Others, Please Specify</Text>

                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter Reason"}
                    value={formValue.others_reason}
                    onChangeText={value => setFormValue({ ...formValue, others_reason: value })}
                />
                {formError?.others_reason ?
                    <Text style={styles.error}>{formError?.others_reason}</Text>
                    : null
                }

                {/* // button */}
                <View style={{ marginTop: 30, marginBottom: 15 }}>
                    <CustomButton btnText={"Next"} onPressFunc={handleFormData} />
                </View>
            </View>
        </ScrollView>
    )
}

export default RFormStep4

const styles = StyleSheet.create({
    inputGrp: {
        // marginTop: 28,
        // borderWidth: 1,
    },
    inputBox: {
        paddingLeft: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'rgba(8, 65, 126, 0.51)',
        backgroundColor: "#F2F1F1",
    },
    labels: {
        fontSize: 16,
        marginBottom: 8,
        marginLeft: 15,
        color: "#484848",
    },
    dropdownBox: {
        paddingLeft: 15,
        paddingRight: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'rgba(8, 65, 126, 0.51)',
        backgroundColor: "#F2F1F1",
        height: 40,
    },
    heading: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
    },
    error: {
        color: "#f00",
        marginLeft: 15,
        marginTop: 3,
        fontSize: 12,
    },
})