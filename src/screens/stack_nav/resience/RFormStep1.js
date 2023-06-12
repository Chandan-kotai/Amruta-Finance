import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../../utils/CustomButton';
import DatePicker from 'react-native-date-picker';
import CustomSwitch from '../../../utils/CustomSwitch';
import { Dropdown } from 'react-native-element-dropdown';
import Toast from 'react-native-toast-message'

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

const RFormStep1 = ({ nextStep, setStep1, id, type }) => {
    const [formValue, setFormValue] = useState({
        applicant_id: id,
        verification_type: type,
        fi_reference_no: "",
        applicant_name: "",
        applicant_phone: "",
        business_address: "",
        allocation_date_time: "",
        visit_date_time: "",
        fos_name: "",
        report_status: "",
        photo_count: "7",
        negative_sub_status: "",
        address_confirm: "",
        landmark: ""
    });
    const [formError, setFormError] = useState({})
    const [address, setAddress] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    // console.log("outside", formValue.address_confirm);


    const handleFormData = () => {
        const validationErrors = validateForm();
        setFormError(validationErrors);

        formValue.address_confirm = address ? "Yes" : "No"

        if (Object.keys(validationErrors).length === 0) {
            setStep1(formValue)
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
            fi_reference_no,
            applicant_name,
            applicant_phone,
            business_address,
            allocation_date_time,
            visit_date_time,
            fos_name,
            report_status,
            photo_count,
            negative_sub_status,
            landmark,
            meet_person,
            relation_with_applicant,
        } = formValue;

        if (!fi_reference_no) {
            error.fi_reference_no = "Please Fill Up this Field"
        }
        if (!applicant_name) {
            error.applicant_name = "Please Fill Up this Field"
        }
        if (!applicant_phone) {
            error.applicant_phone = "Please Fill Up this Field"
        }
        if (!business_address) {
            error.business_address = "Please Fill Up this Field"
        }
        if (!allocation_date_time) {
            error.allocation_date_time = "Please Fill Up this Field"
        }
        if (!visit_date_time) {
            error.visit_date_time = "Please Fill Up this Field"
        }
        if (!fos_name) {
            error.fos_name = "Please Fill Up this Field"
        }
        if (!report_status) {
            error.report_status = "Please Fill Up this Field"
        }
        if (!photo_count) {
            error.photo_count = "Please Fill Up this Field"
        }
        if (!negative_sub_status) {
            error.negative_sub_status = "Please Fill Up this Field"
        }
        if (!landmark) {
            error.landmark = "Please Fill Up this Field"
        }

        return error;
    }

    useEffect(() => {

    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 200, marginTop: 20 }}>
            <View style={styles.inputGrp}>

                {/* // applicant_id */}
                <Text style={styles.labels}>Applicant Id</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    placeholder={"Enter Applicant Id"}
                    value={formValue.applicant_id}
                />

                {/* // Verification Type */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Verification Type</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    placeholder={"Verification Type"}
                    value={formValue.verification_type}
                // onChangeText={value => setFormValue({ ...formValue, verification_type: value })}
                />
                {/* {formError.verification_type ?
                    <Text style={styles.error}>{formError.verification_type}</Text>
                    : null
                } */}

                {/* // Fl Reference No */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Fl Reference No</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Fl Reference No"}
                    value={formValue.fi_reference_no}
                    onChangeText={value => setFormValue({ ...formValue, fi_reference_no: value })}
                />
                {formError?.fi_reference_no ?
                    <Text style={styles.error}>{formError.fi_reference_no}</Text>
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
                {formError?.applicant_name ?
                    <Text style={styles.error}>{formError.applicant_name}</Text>
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
                {formError?.applicant_phone ?
                    <Text style={styles.error}>{formError.applicant_phone}</Text>
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
                {formError?.business_address ?
                    <Text style={styles.error}>{formError.business_address}</Text>
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

                {formError?.allocation_date_time ?
                    <Text style={styles.error}>{formError.allocation_date_time}</Text>
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
                {formError?.visit_date_time ?
                    <Text style={styles.error}>{formError.visit_date_time}</Text>
                    : null
                }

                {/* // FOS Name */}
                <Text style={[styles.labels, { marginTop: 15, }]}>FOS Name</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter FOS Name"}
                    value={formValue.fos_name}
                    onChangeText={value => setFormValue({ ...formValue, fos_name: value })}
                />
                {formError?.fos_name ?
                    <Text style={styles.error}>{formError.fos_name}</Text>
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
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.report_status}
                    onChange={item => {
                        setFormValue({ ...formValue, report_status: item.value })
                    }}
                />

                {formError?.report_status ?
                    <Text style={styles.error}>{formError.report_status}</Text>
                    : null
                }

                {/* // Photo Count */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Photo Count</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={false}
                    placeholder={"Enter Photo Count"}
                    value={formValue.photo_count}
                    // onChangeText={value => setFormValue({ ...formValue, photo_count: value })}
                />
                {formError?.photo_count ?
                    <Text style={styles.error}>{formError.photo_count}</Text>
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
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.negative_sub_status}
                    onChange={item => {
                        setFormValue({ ...formValue, negative_sub_status: item.value })
                    }}
                />

                {formError?.negative_sub_status ?
                    <Text style={styles.error}>{formError.negative_sub_status}</Text>
                    : null
                }

                {/* // Address Confirmed */}
                <CustomSwitch isEnabled={address} setIsEnabled={setAddress} text={"Address Confirmed"} />

                {/* // Landmark */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Landmark</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter Landmark"}
                    value={formValue.landmark}
                    onChangeText={value => setFormValue({ ...formValue, landmark: value })}
                />
                {formError?.landmark ?
                    <Text style={styles.error}>{formError.landmark}</Text>
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

export default RFormStep1

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
    error: {
        color: "#f00",
        marginLeft: 15,
        marginTop: 3,
        fontSize: 12,
    },
})