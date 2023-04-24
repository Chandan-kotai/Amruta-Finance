import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../../utils/CustomButton';

const BFormStep6 = () => {
  const [formValue, setFormValue] = useState({
    meet_person: "",
    relation_with_applicant: "",
    no_of_year: "",
    ownership: ""
  });

  const [formError, setFormError] = useState({})

  const handleFormData = () => {
    nextStep()
  }

  useEffect(() => {

  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 200, marginTop: 20 }}>
      <View style={styles.inputGrp}>
        {/* // Verifier Name */}
        <Text style={[styles.labels, { marginTop: 15, }]}>Verifier Name</Text>
        <TextInput
          style={styles.inputBox}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Enter Verifier Name"}
          value={formValue.meet_person}
          onChangeText={value => setFormValue({ ...formValue, meet_person: value })}
        />
        {formError.meet_person ?
          <Text style={styles.error}>{formError.meet_person}</Text>
          : null
        }

        {/* // Other details/summary */}
        <Text style={[styles.labels, { marginTop: 15, }]}>Other details/summary</Text>
        <TextInput
          style={styles.inputBox}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Enter Other details/summary"}
          value={formValue.no_of_year}
          onChangeText={value => setFormValue({ ...formValue, no_of_year: value })}
        />
        {formError.no_of_year ?
          <Text style={styles.error}>{formError.no_of_year}</Text>
          : null
        }

        {/* // Latitude & Longitude */}
        <Text style={[styles.labels, { marginTop: 15, }]}>Latitude & Longitude</Text>
        <TextInput
          style={styles.inputBox}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Enter latitude & longitude"}
          value={formValue.no_of_year}
          onChangeText={value => setFormValue({ ...formValue, no_of_year: value })}
        />
        {formError.no_of_year ?
          <Text style={styles.error}>{formError.no_of_year}</Text>
          : null
        }

        {/* // button */}
        <View style={{ marginTop: 30, marginBottom: 15 }}>
          <CustomButton btnText={"Submit"} onPressFunc={handleFormData} />
        </View>
      </View>
    </ScrollView>
  )
}

export default BFormStep6;

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
  }
})