import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../../utils/CustomButton';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

const negativeSubCat = [
    {
        label: "Door Locked/ Customer Not Available",
        value: "Door Locked/ Customer Not Available"
    },
    {
        label: "Customer Shifted/ Address/ PIN Mismatched",
        value: "Customer Shifted/ Address/ PIN Mismatched"
    },
    {
        label: "Issue in Office Setup",
        value: "Issue in Office Setup"
    },
    {
        label: "Non Traceable/ Non Contactable",
        value: "Non Traceable/ Non Contactable"
    },
    {
        label: "Issue in Residence Setup",
        value: "Issue in Residence Setup"
    },
    {
        label: "Customer Denied Loan/ Verification/ Not Co-operating",
        value: "Customer Denied Loan/ Verification/ Not Co-operating"
    },
    {
        label: "Sign board Missing/ Board name Mismatched",
        value: "Sign board Missing/ Board name Mismatched"
    },
    {
        label: "Others",
        value: "Others"
    }
]

const reportStatCat = [
    {
        label: "Positive",
        value: "Positive"
    },
    {
        label: "Negative",
        value: "Negative"
    },
    {
        label: "Referred",
        value: "Referred"
    }
]

const BFormStep1 = ({ navigation }) => {
    const [formValue, setFormValue] = useState({
        applicant_id: "",
        verification_type: "",
        fi_reference_no: "",
        applicant_name: "",
        applicant_phone: "",
        business_address: "",
        allocation_date_time: "",
        visit_date_time: "",
        fos_name: "",
        report_status: "",
        photo_count: "",
        negative_sub_status: "",
        address_confirm: isEnabled ? "Yes" : "No",
        landmark: "",
        meet_person: "",
        relation_with_applicant: "",
    });
    const [formError, setFormError] = useState({})
    const [isEnabled, setIsEnabled] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [negativeStat, setNegativeStat] = useState(null);
    const [reportStat, setReportStat] = useState(null);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleFormData = () => {
        navigation.navigate("step2")
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

                        {/* // applicant_id */}
                        <Text style={styles.labels}>Applicant Id</Text>
                        <TextInput
                            style={styles.inputBox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={"Enter Applicant Id"}
                            value={formValue.applicant_id}
                        />

                        {/* // Verification Type */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Verification Type</Text>
                        <TextInput
                            style={styles.inputBox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={"Verification Type"}
                            value={formValue.verification_type}
                            onChangeText={value => setFormValue({ ...formValue, verification_type: value })}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }
                        {/* // Fl Reference No */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Fl Reference No</Text>
                        <TextInput
                            style={styles.inputBox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={"Fl Reference No"}
                            value={formValue.verification_type}
                            onChangeText={value => setFormValue({ ...formValue, verification_type: value })}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

                        {/* // Applicant’s Name */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Applicant’s Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={"Enter Applicant’s Name"}
                            value={formValue.applicant_name}
                            onChangeText={value => setFormValue({ ...formValue, applicant_name: value })}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

                        {/* // Applicant’s Phone Number */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Applicant’s Phone Number</Text>
                        <TextInput
                            style={styles.inputBox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={"Enter Applicant’s Phone Number"}
                            value={formValue.applicant_phone}
                            onChangeText={value => setFormValue({ ...formValue, applicant_phone: value })}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

                        {/* // Business Address */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Business Address</Text>
                        <TextInput
                            style={styles.inputBox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={"Enter Business Address"}
                            value={formValue.business_address}
                            onChangeText={value => setFormValue({ ...formValue, business_address: value })}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

                        {/* // Allocation Date & Time */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Allocation Date & Time</Text>
                        <View style={{ position: "relative" }}>
                            <TextInput
                                style={styles.inputBox}
                                autoCapitalize="none"
                                editable={false}
                                placeholder={"MM/DD/YY HH:MM"}
                                value={formValue.allocation_date_time}
                            />

                            <TouchableOpacity style={{ position: "absolute", top: 9, right: 10 }} onPress={() => setOpen1(true)}>
                                <Image style={{}} source={require("../../../assets/icons/calendar.png")} />
                            </TouchableOpacity>

                            <DatePicker
                                modal
                                open={open1}
                                date={new Date()}
                                mode="datetime"
                                onConfirm={(date) => {
                                    setOpen1(false)
                                    setFormValue({ ...formValue, allocation_date_time: date.toDateString() + " | " + date.toLocaleTimeString() })
                                }}
                                onCancel={() => {
                                    setOpen1(false)
                                }}
                            />
                        </View>

                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

                        {/* // Visit Date & Time */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Visit Date & Time</Text>
                        <View style={{ position: "relative" }}>
                            <TextInput
                                style={styles.inputBox}
                                autoCapitalize="none"
                                editable={false}
                                placeholder={"MM/DD/YY HH:MM"}
                                value={formValue.visit_date_time}
                            />

                            <TouchableOpacity style={{ position: "absolute", top: 9, right: 10 }} onPress={() => setOpen2(true)}>
                                <Image style={{}} source={require("../../../assets/icons/calendar.png")} />
                            </TouchableOpacity>

                            <DatePicker
                                modal
                                open={open2}
                                date={new Date()}
                                mode="datetime"
                                onConfirm={(date) => {
                                    setOpen2(false)
                                    setFormValue({ ...formValue, visit_date_time: date.toDateString() + " | " + date.toLocaleTimeString() })
                                }}
                                onCancel={() => {
                                    setOpen2(false)
                                }}
                            />
                        </View>
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

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
                            data={reportStatCat}
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
                                setReportStat(item.value);
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
                            data={negativeSubCat}
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
                                setNegativeStat(item.value);
                                setIsFocus(false);
                                setFormValue({ ...formValue, negative_sub_status: item.value })
                            }}
                        />
                        {formError.verification_type ?
                            <Text style={styles.error}>{formError.verification_type}</Text>
                            : null
                        }

                        {/* // Address Confirmed */}
                        <View style={{
                            marginTop: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{ marginLeft: 15, fontSize: 16, color: "#484848", }}>Address Confirmed</Text>
                            <Switch
                                trackColor={{ false: '#BEBFBE', true: '#48B846' }}
                                onValueChange={toggleSwitch}
                                ios_backgroundColor="#3e3e3e"
                                value={isEnabled}
                            />
                        </View>

                        {/* // Landmark */}
                        <Text style={[styles.labels, { marginTop: 15, }]}>Landmark</Text>
                        <TextInput
                            style={styles.inputBox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={"Enter Landmark"}
                            value={formValue.verification_type}
                            onChangeText={value => setFormValue({ ...formValue, verification_type: value })}
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

export default BFormStep1

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