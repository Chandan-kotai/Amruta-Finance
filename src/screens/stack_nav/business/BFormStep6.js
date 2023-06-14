import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Alert, PermissionsAndroid, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../../utils/CustomButton';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import CustomLoader from '../../../utils/CustomLoader';
import { Api } from '../../../services/api';

const BFormStep6 = ({ navigation, step1, step2, step3, step4, step5, username }) => {
  const [formValue, setFormValue] = useState({
    verifier_name: "",
    summary: "",
    // lat_long: ""
  });
  const [status, setStatus] = useState(false)
  const [formError, setFormError] = useState({})
  // console.log(step5.sign_board_pic[0]);

  const handleFormData = () => {
    const validationErrors = validateForm();
    setFormError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();

      // step 1
      formData.append('applicant_id', step1.applicant_id);
      formData.append('verification_type', step1.verification_type);
      formData.append('fi_reference_no', step1.fi_reference_no);
      formData.append('applicant_name', step1.applicant_name);
      formData.append('applicant_phone', step1.applicant_phone);
      formData.append('business_address', step1.business_address);
      formData.append('allocation_date_time', step1.allocation_date_time);
      formData.append('visit_date_time', step1.visit_date_time);
      formData.append('fos_name', step1.fos_name);
      formData.append('report_status', step1.report_status);
      formData.append('photo_count', step1.photo_count);
      formData.append('negative_sub_status', step1.negative_sub_status);
      formData.append('address_confirm', step1.address_confirm);
      formData.append('landmark', step1.landmark);

      // step 2
      formData.append('meet_person', step2.meet_person);
      formData.append('relation_with_applicant', step2.relation_with_applicant);
      formData.append('no_of_year', step2.no_of_year);
      formData.append('ownership', step2.ownership);

      // step 3
      formData.append('business_board_seen', step3.business_board_seen);
      formData.append('mismatch_temporary', step3.mismatch_temporary);
      formData.append('type_of_locality', step3.type_of_locality);
      formData.append('inside_img_allow', step3.inside_img_allow);
      formData.append('if_no_reason', step3.if_no_reason);
      formData.append('office_setup_seen', step3.office_setup_seen);
      formData.append('office_setup_details', step3.office_setup_details);
      formData.append('no_of_emp_seen', step3.no_of_emp_seen);
      formData.append('stock_seen', step3.stock_seen);
      formData.append('neighbor_name_1', step3.neighbor_name_1);
      formData.append('neighbor_address_1', step3.neighbor_address_1);
      formData.append('feedback_1', step3.feedback_1);
      formData.append('if_no_reason_1', step3.if_no_reason_1);
      formData.append('neighbor_name_2', step3.neighbor_name_2);
      formData.append('neighbor_address_2', step3.neighbor_address_2);
      formData.append('feedback_2', step3.feedback_2);
      formData.append('if_no_reason_2', step3.if_no_reason_2);

      // step 4
      formData.append('is_labour', step4.is_labour);
      formData.append('is_labour_reason', step4.is_labour_reason);
      formData.append('is_pep', step4.is_pep);
      formData.append('is_pep_reason', step4.is_pep_reason);
      formData.append('is_gambling', step4.is_gambling);
      formData.append('is_gambling_reason', step4.is_gambling_reason);
      formData.append('is_tobaco', step4.is_tobaco);
      formData.append('is_tobaco_reason', step4.is_tobaco_reason);
      formData.append('is_pornography', step4.is_pornography);
      formData.append('is_pornography_reason', step4.is_pornography_reason);
      formData.append('is_arms', step4.is_arms);
      formData.append('is_arms_reason', step4.is_arms_reason);
      formData.append('others_reason', step4.others_reason);

      // step 5
      formData.append('sign_board_pic', {
        type: step5?.sign_board_pic[0].type,
        uri: step5?.sign_board_pic[0]?.uri,
        name: step5?.sign_board_pic[0]?.fileName
      });

      formData.append('sign_board_pic_loc', step5?.sign_board_pic_loc);

      formData.append('stock_pic', {
        type: step5?.stock_pic[0].type,
        uri: step5?.stock_pic[0]?.uri,
        name: step5?.stock_pic[0]?.fileName
      });

      formData.append('stock_pic_loc', step5?.stock_pic_loc);

      step5?.office_setup_pic?.forEach((image, index) => {
        formData.append(`office_setup_pic_${index}`, {
          uri: image.uri,
          type: image.type,
          name: image.fileName
        });
      });

      formData.append('office_setup_pic_loc', step5?.office_setup_pic_loc);

      formData.append('landmark_pic', {
        type: step5?.landmark_pic[0].type,
        uri: step5?.landmark_pic[0]?.uri,
        name: step5?.landmark_pic[0]?.fileName
      });

      formData.append('landmark_pic_loc', step5?.landmark_pic_loc);

      formData.append('kyc_pic', {
        type: step5?.kyc_pic[0].type,
        uri: step5?.kyc_pic[0]?.uri,
        name: step5?.kyc_pic[0]?.fileName
      });

      formData.append('kyc_pic_loc', step5?.kyc_pic_loc);

      formData.append('customer_pic', {
        type: step5?.customer_pic[0].type,
        uri: step5?.customer_pic[0]?.uri,
        name: step5?.customer_pic[0]?.fileName
      });

      formData.append('customer_pic_loc', step5?.customer_pic_loc);

      // step 6
      formData.append('verifier_name', formValue.verifier_name);
      formData.append('summary', formValue.summary);
      // formData.append('lat_long', formValue.lat_long);

      // formData.append('username', username)

      // console.log("form data =>", formData);
      sendFormData(formData)
    }else{
      console.log("from else");
    }
  }

  const validateForm = () => {
    const error = {}

    const {
      verifier_name,
      summary,
      lat_long
    } = formValue;

    if (!verifier_name) {
      error.verifier_name = "This Field is Required"
    }
    if (!summary) {
      error.summary = "This Field is Required"
    }
    // if (!lat_long) {
    //   error.lat_long = "This Field is Required"
    // }

    return error;
  }


  const sendFormData = async (formData) => {
    var config = {
      method: "post",
      url: Api+"/add-applicant",
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    }

    console.log("form data func =>", formData);

    try {
      setStatus(true)
      const res = await axios(config);
      setStatus(false)
      console.log("server response=>", res.data);
      if (res?.data?.result === "success") {
        navigation.replace("fmsg")
      } else {
        Toast.show({
          type: "info",
          text1: "Something Went Wrong. Pleaase Try Again",
        })
      }
    } catch (exc) {
      // console.log("error=>", exc);
      Toast.show({
        type: "error",
        text1: exc.message,
        text2: "Something Went Wrong. Pleaase Try Again",
      })
    }

  }

  // useEffect(() => {

  // }, [])

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
          value={formValue.verifier_name}
          onChangeText={value => setFormValue({ ...formValue, verifier_name: value })}
        />
        {formError?.verifier_name ?
          <Text style={styles.error}>{formError.verifier_name}</Text>
          : null
        }

        {/* // Other details/summary */}
        <Text style={[styles.labels, { marginTop: 15, }]}>Other details/summary</Text>
        <TextInput
          style={styles.inputBox}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Enter Other details/summary"}
          value={formValue.summary}
          onChangeText={value => setFormValue({ ...formValue, summary: value })}
        />
        {formError?.summary ?
          <Text style={styles.error}>{formError.summary}</Text>
          : null
        }

        {/* // Latitude & Longitude */}
        {/* <Text style={[styles.labels, { marginTop: 15, }]}>Latitude & Longitude</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.inputBox}
            autoCapitalize="none"
            editable={false}
            autoCorrect={false}
            placeholder={"Latitude & Longitude"}
            value={formValue.lat_long}
            onChangeText={value => setFormValue({ ...formValue, lat_long: value })}
          />

          <TouchableOpacity style={{ position: "absolute", top: 8, right: 10 }} onPress={() => requestLocationPermission()}>
            <Image style={{}} source={require("../../../assets/icons/map-pin.png")} />
          </TouchableOpacity>
        </View>
        {formError?.lat_long ?
          <Text style={styles.error}>{formError.lat_long}</Text>
          : null
        } */}

        {/* // button */}
        <View style={{ marginTop: 30, marginBottom: 15 }}>
          <CustomButton btnText={"Submit"} onPressFunc={handleFormData} />
        </View>
      </View>
      <CustomLoader loader={status} />
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
  },
  error: {
    color: "#f00",
    marginLeft: 15,
    marginTop: 3,
    fontSize: 12,
  },
})