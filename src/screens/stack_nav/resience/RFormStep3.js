import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import CustomButton from '../../../utils/CustomButton';
import CustomSwitch from '../../../utils/CustomSwitch';
import Toast from 'react-native-toast-message'


const feedbackCat = [
    {
        label: "Positive",
        value: "Positive"
    },
    {
        label: "Negative",
        value: "Negative"
    },
    {
        label: "Not Known",
        value: "Not Known"
    }
];

const businessBoardCat = [
    {
        label: "Yes",
        value: "Yes"
    },
    {
        label: "No",
        value: "No"
    },
    {
        label: "Mismatch",
        value: "Mismatch"
    },
    {
        label: "Temporary",
        value: "Temporary"
    }
];

const residenceCat = [
    {
        label: "Flat",
        value: "Flat"
    },
    {
        label: "Villa",
        value: "Villa"
    },
    {
        label: "Independent House",
        value: "Independent House"
    },
    {
        label: "PG",
        value: "PG"
    }
];

const localityCat = [
    {
        label: "Residential Society",
        value: "Residential Society"
    },
    {
        label: "Slum",
        value: "Slum"
    },
    {
        label: "Chawl",
        value: "Chawl"
    },
    {
        label: "Others",
        value: "Others"
    }
];

const exteriorCat = [
    {
        label: "Pukka",
        value: "Pukka"
    },
    {
        label: "Temporary",
        value: "Temporary"
    },
    {
        label: "Tin Shed",
        value: "Tin Shed"
    }
];

const setupCat = [
    {
        label: "Good",
        value: "Good"
    },
    {
        label: "Average",
        value: "Average"
    },
    {
        label: "Low",
        value: "Low"
    },
    {
        label: "Temporary",
        value: "Temporary"
    }
];

const RFormStep3 = ({ nextStep, setStep3 }) => {
    const [imgAllow, setImgAlllow] = useState(false);
    const [stay, setStay] = useState(false);

    const [formValue, setFormValue] = useState({
        name_plate_seen: "",
        mismatch_temporary: "",
        type_of_locality: "",
        residence_type: "",
        exterior_details: "",
        inside_img_allow: "",
        if_no_reason: "",
        setup_details: "",
        is_applicant_stay: "",
        if_not_stay_reason: "",
        neighbor_name_1: "",
        neighbor_address_1: "",
        feedback_1: "",
        if_no_reason_1: "",
        neighbor_name_2: "",
        neighbor_address_2: "",
        feedback_2: "",
        if_no_reason_2: ""
    });
    const [formError, setFormError] = useState({});

    const handleFormData = () => {
        const validationErrors = validateForm();
        setFormError(validationErrors);
        // console.log("outside if", address);

        formValue.inside_img_allow = imgAllow ? "Yes" : "No";
        formValue.is_applicant_stay = stay ? "Yes" : "No";

        if (Object.keys(validationErrors).length !== 0) {
            // console.log("inside if");
            setStep3(formValue)
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
            name_plate_seen,
            mismatch_temporary,
            type_of_locality,
            residence_type,
            exterior_details,
            inside_img_allow,
            if_no_reason,
            setup_details,
            is_applicant_stay,
            if_not_stay_reason,
            neighbor_name_1,
            neighbor_address_1,
            feedback_1,
            if_no_reason_1,
            neighbor_name_2,
            neighbor_address_2,
            feedback_2,
            if_no_reason_2,
        } = formValue;

        if (!name_plate_seen) {
            error.name_plate_seen = "Please Fill Up this Field"
        }
        if (name_plate_seen === "Mismatch" || name_plate_seen === "Temporary") {
            if (!mismatch_temporary) {
                error.mismatch_temporary = "Please Fill Up this Field"
            }
        }
        if (!type_of_locality) {
            error.type_of_locality = "Please Fill Up this Field"
        }
        if (!residence_type) {
            error.residence_type = "Please Fill Up this Field"
        }
        if (!exterior_details) {
            error.exterior_details = "Please Fill Up this Field"
        }
        if (!imgAllow) {
            if (!if_no_reason) {
                error.if_no_reason = "Please Fill Up this Field"
            }
        }
        if (!setup_details) {
            error.setup_details = "Please Fill Up this Field"
        }
        if (!stay) {
            if (!if_not_stay_reason) {
                error.if_not_stay_reason = "Please Fill Up this Field"
            }
        }
        if (!neighbor_name_1) {
            error.neighbor_name_1 = "Please Fill Up this Field"
        }
        if (!neighbor_address_1) {
            error.neighbor_address_1 = "Please Fill Up this Field"
        }
        if (!feedback_1) {
            error.feedback_1 = "Please Fill Up this Field"
        }
        if (feedback_1 === "Negative") {
            if (!if_no_reason_1) {
                error.if_no_reason_1 = "Please Fill Up this Field"
            }
        }
        if (!neighbor_name_2) {
            error.neighbor_name_2 = "Please Fill Up this Field"
        }
        if (!neighbor_address_2) {
            error.neighbor_address_2 = "Please Fill Up this Field"
        }
        if (!feedback_2) {
            error.feedback_2 = "Please Fill Up this Field"
        }
        if (feedback_2 === "Negative") {
            if (!if_no_reason_2) {
                error.if_no_reason_2 = "Please Fill Up this Field"
            }
        }

        return error;
    }

    useEffect(() => {

    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 200, marginTop: 20 }}>
            <View style={styles.inputGrp}>
                {/* // Is Name Plate Seen */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Is Name Plate Seen</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={businessBoardCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.name_plate_seen}
                    onChange={item => {
                        setFormValue({ ...formValue, name_plate_seen: item.value })
                    }}
                />
                {formError?.name_plate_seen ?
                    <Text style={styles.error}>{formError?.name_plate_seen}</Text>
                    : null
                }

                {/* // If mismatch/Temporary,pls specify */}
                {formValue.name_plate_seen === "Mismatch" || formValue.name_plate_seen === "Temporary" ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Mismatch/Temporary Please Specify</Text>
                    : null
                }
                {formValue.name_plate_seen === "Mismatch" || formValue.name_plate_seen === "Temporary" ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.mismatch_temporary}
                        onChangeText={value => setFormValue({ ...formValue, mismatch_temporary: value })}
                    />
                    : null
                }
                {formError?.mismatch_temporary ?
                    <Text style={styles.error}>{formError?.mismatch_temporary}</Text>
                    : null
                }

                {/* // Type Of Locality */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Type Of Locality</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={localityCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.type_of_locality}
                    onChange={item => {
                        setFormValue({ ...formValue, type_of_locality: item.value })
                    }}
                />
                {formError?.type_of_locality ?
                    <Text style={styles.error}>{formError?.type_of_locality}</Text>
                    : null
                }

                {/* // Residence type */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Residence type</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={residenceCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.residence_type}
                    onChange={item => {
                        setFormValue({ ...formValue, residence_type: item.value })
                    }}
                />
                {formError?.residence_type ?
                    <Text style={styles.error}>{formError?.residence_type}</Text>
                    : null
                }

                {/* // Exterior Details */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Exterior Details</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={exteriorCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.exterior_details}
                    onChange={item => {
                        setFormValue({ ...formValue, exterior_details: item.value })
                    }}
                />
                {formError?.exterior_details ?
                    <Text style={styles.error}>{formError?.exterior_details}</Text>
                    : null
                }

                {/* Entry and Inside Images Allowed */}
                <CustomSwitch isEnabled={imgAllow} setIsEnabled={setImgAlllow} text={"Entry and Inside Images Allowed"} />

                {/* // If No,please specify Reason */}
                {!imgAllow ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If No Please Specify Reason</Text>
                    : null
                }
                {!imgAllow ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.if_no_reason}
                        onChangeText={value => setFormValue({ ...formValue, if_no_reason: value })}
                    />
                    : null
                }
                {formError?.if_no_reason ?
                    <Text style={styles.error}>{formError?.if_no_reason}</Text>
                    : null
                }

                {/* // Setup Details (Interior) */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Setup Details (Interior)</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={setupCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.setup_details}
                    onChange={item => {
                        setFormValue({ ...formValue, setup_details: item.value })
                    }}
                />
                {formError?.setup_details ?
                    <Text style={styles.error}>{formError?.setup_details}</Text>
                    : null
                }

                {/* Does Applicant Stay at the Address */}
                <CustomSwitch isEnabled={stay} setIsEnabled={setStay} text={"Does Applicant Stay at the Address"} />

                {/* // If No, Please Specify Reason */}
                {!stay ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If No, Please Specify Reason</Text>
                    : null
                }
                {!stay ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.if_not_stay_reason}
                        onChangeText={value => setFormValue({ ...formValue, if_not_stay_reason: value })}
                    />
                    : null
                }
                {formError?.if_not_stay_reason ?
                    <Text style={styles.error}>{formError?.if_not_stay_reason}</Text>
                    : null
                }

                {/* // Neighbor Name 1  */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Neighbor Name 1 </Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter Neighbor Name 1"}
                    value={formValue.neighbor_name_1}
                    onChangeText={value => setFormValue({ ...formValue, neighbor_name_1: value })}
                />
                {formError?.neighbor_name_1 ?
                    <Text style={styles.error}>{formError?.neighbor_name_1}</Text>
                    : null
                }

                {/* // Address/ Details */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Neighbor Address/ Details 1</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter Reason"}
                    value={formValue.neighbor_address_1}
                    onChangeText={value => setFormValue({ ...formValue, neighbor_address_1: value })}
                />
                {formError?.neighbor_address_1 ?
                    <Text style={styles.error}>{formError?.neighbor_address_1}</Text>
                    : null
                }

                {/* // Neighbor Feedback 1 */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Neighbor Feedback 1</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={feedbackCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.feedback_1}
                    onChange={item => {
                        setFormValue({ ...formValue, feedback_1: item.value })
                    }}
                />
                {formError?.feedback_1 ?
                    <Text style={styles.error}>{formError?.feedback_1}</Text>
                    : null
                }

                {/* // If No,please specify Reason */}
                {formValue.feedback_1 === "Negative" ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Negative Please Specify Reason</Text>
                    : null
                }
                {formValue.feedback_1 === "Negative" ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.if_no_reason_1}
                        onChangeText={value => setFormValue({ ...formValue, if_no_reason_1: value })}
                    />
                    : null
                }
                {formError?.if_no_reason_1 ?
                    <Text style={styles.error}>{formError?.if_no_reason_1}</Text>
                    : null
                }

                {/* // Neighbor Name 2  */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Neighbor Name 2 </Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter Neighbor Name 2"}
                    value={formValue.neighbor_name_2}
                    onChangeText={value => setFormValue({ ...formValue, neighbor_name_2: value })}
                />
                {formError?.neighbor_name_2 ?
                    <Text style={styles.error}>{formError?.neighbor_name_2}</Text>
                    : null
                }

                {/* // Address/ Details */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Neighbor Address/ Details 2</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter Reason"}
                    value={formValue.neighbor_address_2}
                    onChangeText={value => setFormValue({ ...formValue, neighbor_address_2: value })}
                />
                {formError?.neighbor_address_2 ?
                    <Text style={styles.error}>{formError?.neighbor_address_2}</Text>
                    : null
                }

                {/* // Neighbor Feedback 2 */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Neighbor Feedback 2</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={feedbackCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.feedback_2}
                    onChange={item => {
                        setFormValue({ ...formValue, feedback_2: item.value })
                    }}
                />
                {formError?.feedback_2 ?
                    <Text style={styles.error}>{formError?.feedback_2}</Text>
                    : null
                }

                {/* // If No,please specify Reason */}
                {formValue.feedback_2 === "Negative" ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Negative Please Specify Reason</Text>
                    : null
                }
                {formValue.feedback_2 === "Negative" ?
                    <TextInput
                        style={styles.inputBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder={"Enter Reason"}
                        value={formValue.if_no_reason_2}
                        onChangeText={value => setFormValue({ ...formValue, if_no_reason_2: value })}
                    />
                    : null
                }
                {formError?.if_no_reason_2 ?
                    <Text style={styles.error}>{formError?.if_no_reason_2}</Text>
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

export default RFormStep3

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