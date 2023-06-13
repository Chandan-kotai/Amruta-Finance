import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../../utils/CustomButton';
import { Dropdown } from 'react-native-element-dropdown';
import Toast from 'react-native-toast-message'


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
    }
]

const BFormStep2 = ({ nextStep, setStep2 }) => {
    const [formValue, setFormValue] = useState({
        meet_person: "",
        relation_with_applicant: "",
        no_of_year: "",
        ownership: ""
    });
    const [formError, setFormError] = useState({})

    const handleFormData = () => {
        const validationErrors = validateForm();
        setFormError(validationErrors);
        // console.log("outside if", address);

        if (Object.keys(validationErrors).length !== 0) {
            // console.log("inside if");
            setStep2(formValue)
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
            meet_person,
            relation_with_applicant,
            no_of_year,
            ownership,
        } = formValue;

        if (!meet_person) {
            error.meet_person = "Please Fill Up this Field"
        }
        if (!relation_with_applicant) {
            error.relation_with_applicant = "Please Fill Up this Field"
        }
        if (!no_of_year) {
            error.no_of_year = "Please Fill Up this Field"
        }
        if (!ownership) {
            error.ownership = "Please Fill Up this Field"
        }

        return error;
    }

    useEffect(() => {

    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 200, marginTop: 20 }}>
            <View style={styles.inputGrp}>
                {/* // meet_person */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Name of the Person Met</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter Name of the Person Met"}
                    value={formValue.meet_person}
                    onChangeText={value => setFormValue({ ...formValue, meet_person: value })}
                />
                {formError.meet_person ?
                    <Text style={styles.error}>{formError.meet_person}</Text>
                    : null
                }

                {/* // Relationship with Applicant */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Relationship with Applicant</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={relationStatCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.relation_with_applicant}
                    onChange={item => {
                        setFormValue({ ...formValue, relation_with_applicant: item.value })
                    }}
                />
                {formError.relation_with_applicant ?
                    <Text style={styles.error}>{formError.relation_with_applicant}</Text>
                    : null
                }

                {/* // No of Yrs in Present address */}
                <Text style={[styles.labels, { marginTop: 15, }]}>No of Yrs in Present Address</Text>
                <TextInput
                    style={styles.inputBox}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"Enter No of Yrs in Present Address"}
                    value={formValue.no_of_year}
                    onChangeText={value => setFormValue({ ...formValue, no_of_year: value })}
                />
                {formError.no_of_year ?
                    <Text style={styles.error}>{formError.no_of_year}</Text>
                    : null
                }

                {/* // Ownership */}
                <Text style={[styles.labels, { marginTop: 15, }]}>Ownership</Text>
                <Dropdown
                    style={styles.dropdownBox}
                    data={ownerStatCat}
                    placeholder='Select...'
                    containerStyle={{ borderRadius: 20 }}
                    itemContainerStyle={{ borderRadius: 20 }}
                    selectedTextStyle={{ color: "#000", fontSize: 14 }}
                    labelField="label"
                    valueField="value"
                    value={formValue.ownership}
                    onChange={item => {
                        setFormValue({ ...formValue, ownership: item.value })
                    }}
                />
                {formError.ownership ?
                    <Text style={styles.error}>{formError.ownership}</Text>
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

export default BFormStep2

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