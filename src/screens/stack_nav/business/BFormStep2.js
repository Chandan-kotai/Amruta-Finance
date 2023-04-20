import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../../utils/CustomButton';
import { Dropdown } from 'react-native-element-dropdown';

const relationStatCat = [
    {
        label: "Self",
        value: "Self"
    },
    {
        label: "Spouse",
        value: "Spouse"
    },
    {
        label: "Family",
        value: "Family"
    },
    {
        label: "Others",
        value: "Others"
    },
]

const ownerStatCat = [
    {
        label: "Rented",
        value: "Rented"
    },
    {
        label: "Owned",
        value: "Owned"
    },
    {
        label: "Parental House",
        value: "Parental House"
    },
]


const BFormStep2 = () => {
    const [formValue, setFormValue] = useState({
        meet_person: "",
        relation_with_applicant: "",
    });
    const [formError, setFormError] = useState({})
    const [isFocus, setIsFocus] = useState(false);

    const handleFormData = () => {
        // navigation.navigate("step2")
    }

    useEffect(() => {

    }, [])

    return (
        <SafeAreaView style={styles.parent}>
            <View style={{ width: "95%" }}>
                {/* Navigation */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
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
                    <View style={styles.connector}></View>

                    {/* Step 2 */}
                    <View style={styles.steps}>
                        <Text style={styles.stepsNum}>2</Text>
                    </View>
                    {/* Connector */}
                    <View style={styles.connectorDeactivate}></View>

                    {/* Step 3 */}
                    <View style={styles.stepsDeactive}>
                        <Text style={styles.stepsNumDeactive}>3</Text>
                    </View>
                    {/* Connector */}
                    <View style={styles.connectorDeactivate}></View>

                    {/* Step 4 */}
                    <View style={styles.stepsDeactive}>
                        <Text style={styles.stepsNumDeactive}>4</Text>
                    </View>
                    {/* Connector */}
                    <View style={styles.connectorDeactivate}></View>

                    {/* Step 5 */}
                    <View style={styles.stepsDeactive}>
                        <Text style={styles.stepsNumDeactive}>5</Text>
                    </View>
                    {/* Connector */}
                    <View style={styles.connectorDeactivate}></View>

                    {/* Step 6 */}
                    <View style={styles.stepsDeactive}>
                        <Text style={styles.stepsNumDeactive}>6</Text>
                    </View>

                </View>

                {/* Form */}
                {/* // input sections */}
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 200, marginTop: 20 }}>
                    <View style={styles.inputGrp}>
                        {/* // FOS Name */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>FOS Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={"Enter FOS Name"}
                            value={formValue.verification_type}
                            onChangeText={value => setFormValue({ ...formValue, verification_type: value })}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

                        {/* // Report Status */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Report Status</Text>
                        <Dropdown
                            style={styles.dropdownBox}
                            data={relationStatCat}
                            placeholder='Select...'
                            containerStyle={{ borderRadius: 20 }}
                            itemContainerStyle={{ borderRadius: 20 }}
                            selectedTextStyle={{ color: "#000" }}
                            labelField="label"
                            valueField="value"
                            value={formValue.report_status}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                // setReportStat(item.value);
                                setIsFocus(false);
                                setFormValue({ ...formValue, report_status: item.value })
                            }}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

                        {/* // Photo Count */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Photo Count</Text>
                        <TextInput
                            style={styles.inputBox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={"Enter Photo Count"}
                            value={formValue.verification_type}
                            onChangeText={value => setFormValue({ ...formValue, verification_type: value })}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

                        {/* // Negative Sub Status */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Negative Sub Status</Text>
                        <Dropdown
                            style={styles.dropdownBox}
                            data={ownerStatCat}
                            placeholder='Select...'
                            containerStyle={{ borderRadius: 20 }}
                            itemContainerStyle={{ borderRadius: 20 }}
                            selectedTextStyle={{ color: "#000" }}
                            labelField="label"
                            valueField="value"
                            value={formValue.negative_sub_status}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                // setNegativeStat(item.value);
                                setIsFocus(false);
                                setFormValue({ ...formValue, negative_sub_status: item.value })
                            }}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }


                        {/* // button */}
                        <View style={{ marginTop: 30, marginBottom: 15 }}>
                            <CustomButton btnText={"Next"} onPressFunc={handleFormData} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default BFormStep2

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
    }
})