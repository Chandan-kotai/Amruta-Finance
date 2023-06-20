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

const localityCat = [
    {
        label: "Industrial",
        value: "Industrial"
    },
    {
        label: "Commercial",
        value: "Commercial"
    },
    {
        label: "Shopping Mall",
        value: "Shopping Mall"
    },
    {
        label: "Residential",
        value: "Residential"
    },
    {
        label: "Others",
        value: "Others"
    }
];

const BFormStep3 = ({ nextStep, setStep3 }) => {
    const [imgAllow, setImgAlllow] = useState(false);
    const [offSetup, setOffSetup] = useState(false);
    const [stock, setStock] = useState(false);
    const [formValue, setFormValue] = useState({
        business_board_seen: "",
        mismatch_temporary: "",
        type_of_locality: "",
        inside_img_allow: "",
        if_no_reason: "",
        office_setup_seen: "",
        office_setup_details: "",
        no_of_emp_seen: "",
        stock_seen: "",
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
        formValue.office_setup_seen = offSetup ? "Yes" : "No";
        formValue.stock_seen = stock ? "Yes" : "No";

        if (Object.keys(validationErrors).length === 0) {
            // console.log("inside if");
            setStep3(formValue)
            Toast.show({
                type: "success",
                text1: "Date Saved Successfully",
            })
            nextStep()
        }
    }

    const validateForm = () => {
        const error = {}
        const {
            business_board_seen,
            mismatch_temporary,
            type_of_locality,
            inside_img_allow,
            if_no_reason,
            office_setup_seen,
            office_setup_details,
            no_of_emp_seen,
            stock_seen,
            neighbor_name_1,
            neighbor_address_1,
            feedback_1,
            if_no_reason_1,
            neighbor_name_2,
            neighbor_address_2,
            feedback_2,
            if_no_reason_2,
        } = formValue;

        if (!business_board_seen) {
            error.business_board_seen = "Please Fill Up this Field"
        }
        if (business_board_seen === "Mismatch" || business_board_seen === "Temporary") {
            if (!mismatch_temporary) {
                error.mismatch_temporary = "Please Fill Up this Field"
            }
        }
        if (!type_of_locality) {
            error.type_of_locality = "Please Fill Up this Field"
        }
        if (!imgAllow) {
            if (!if_no_reason) {
                error.if_no_reason = "Please Fill Up this Field"
            }
        }
        if (offSetup) {
            if (!office_setup_details) {
                error.office_setup_details = "Please Fill Up this Field"
            }
        }
        if (!no_of_emp_seen) {
            error.no_of_emp_seen = "Please Fill Up this Field"
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
                {/* // Is Business board seen */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Is Business board seen</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={businessBoardCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.business_board_seen}
                    onChange={item => {
                        setFormValue({ ...formValue, business_board_seen: item.value })
                    }}
                />
                {formError?.business_board_seen ?
                    <Text style={styles.error}>{formError?.business_board_seen}</Text>
                    : null
                }

                {/* // If mismatch/Temporary,pls specify */}
                {formValue.business_board_seen === "Mismatch" || formValue.business_board_seen === "Temporary" ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>If Mismatch/Temporary Please Specify</Text>
                    : null
                }
                {formValue.business_board_seen === "Mismatch" || formValue.business_board_seen === "Temporary" ?
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

                {/* Office setup Seen */}
                <CustomSwitch isEnabled={offSetup} setIsEnabled={setOffSetup} text={"Office setup Seen"} />

                {/* // Office Setup details */}
                {offSetup ?
                    <Text style={[styles.labels, { marginTop: 15, }]}>Office Setup details</Text>
                    : null
                }
                {offSetup ?
                    <Dropdown
                        style={styles.dropdownBox}
                        data={[
                            {
                                label: "Permanent",
                                value: "Permanent"
                            },
                            {
                                label: "Temporary",
                                value: "Temporary"
                            },
                        ]}
                        placeholder='Select...'
                        containerStyle={{ borderRadius: 20 }}
                        itemContainerStyle={{ borderRadius: 20 }}
                        selectedTextStyle={{ color: "#000", fontSize: 14 }}
                        labelField="label"
                        valueField="value"
                        value={formValue.office_setup_details}
                        onChange={item => {
                            setFormValue({ ...formValue, office_setup_details: item.value })
                        }}
                    />
                    : null
                }
                {formError?.office_setup_details ?
                    <Text style={styles.error}>{formError?.office_setup_details}</Text>
                    : null
                }

                {/* // Total No of Employees Seen */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Total No of Employees Seen</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter No of Employees Seen"}
                    value={formValue.no_of_emp_seen}
                    onChangeText={value => setFormValue({ ...formValue, no_of_emp_seen: value })}
                />
                {formError?.no_of_emp_seen ?
                    <Text style={styles.error}>{formError?.no_of_emp_seen}</Text>
                    : null
                }

                {/* Stock Seen */}
                <CustomSwitch isEnabled={stock} setIsEnabled={setStock} text={"Stock Seen"} />

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
                    placeholder={"Enter Neighbor Address/ Details"}
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
                    <Text style={[styles.labels, { marginTop: 15, }]}>If No Please Specify Reason</Text>
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
                    placeholder={"Enter Neighbor Address/ Details"}
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
                    <Text style={[styles.labels, { marginTop: 15, }]}>If No,please specify Reason</Text>
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

export default BFormStep3

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