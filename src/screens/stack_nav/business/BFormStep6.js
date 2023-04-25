import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Alert, PermissionsAndroid, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../../utils/CustomButton';
import Geolocation from '@react-native-community/geolocation';

const BFormStep6 = () => {
  const [formValue, setFormValue] = useState({
    verifier_name: "",
    summary: "",
    lat_long: ""
  });

  const [formError, setFormError] = useState({})

  const handleFormData = () => {
    Alert.alert("Submitted")
  }

  const sendIntent = async () => {
    await Linking.sendIntent({
      action: 'android.settings.LOCATION_SOURCE_SETTINGS',
    });
    
  }

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Amruta Finance",
          message: 'Amruta Finance needs to access your Location',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(position => {
          let lat = JSON.stringify(position.coords.latitude);
          let long = JSON.stringify(position.coords.longitude);
          console.log(lat + "," + long);
          setFormValue({ ...formValue, lat_long: lat + "," + long })
        }, (error) => {
          // sendIntent()
          Alert.alert("Turn on GPS")
        }
        )

      } else {
        Alert.alert("Permission Denied!!!")
      }
    } catch (err) {
      console.log(err);
    }
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
          value={formValue.verifier_name}
          onChangeText={value => setFormValue({ ...formValue, verifier_name: value })}
        />
        {formError.verifier_name ?
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
        {formError.summary ?
          <Text style={styles.error}>{formError.summary}</Text>
          : null
        }

        {/* // Latitude & Longitude */}
        <Text style={[styles.labels, { marginTop: 15, }]}>Latitude & Longitude</Text>
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
        {formError.lat_long ?
          <Text style={styles.error}>{formError.lat_long}</Text>
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
  },
  error: {
    color: "#f00",
    marginLeft: 15,
    marginTop: 3,
    fontSize: 12,
},
})