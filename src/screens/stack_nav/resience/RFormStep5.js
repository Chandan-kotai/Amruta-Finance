import { StyleSheet, Text, View, Image, TouchableOpacity, PermissionsAndroid, Alert, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { request, PERMISSIONS } from 'react-native-permissions';
import CustomButton from '../../../utils/CustomButton';
import Toast from 'react-native-toast-message'
import Geolocation from '@react-native-community/geolocation';

const RFormStep5 = ({ nextStep, setStep5 }) => {
  const refRBSheet = useRef();
  const [images, setImages] = useState({
    building_pic: "",
    building_pic_loc: "",
    name_plate_pic: "",
    name_plate_pic_loc: "",
    residence_setup_pic: [],
    residence_setup_pic_loc: "",
    landmark_pic: "",
    landmark_pic_loc: "",
    kyc_pic: "",
    kyc_pic_loc: "",
    customer_pic: "",
    customer_pic_loc: "",
  })
  const [option, setOption] = useState("");
  const [locData, setLocData] = useState();

  // console.log("image from state=>", images.residence_setup_pic);
  // console.log("image from var pics=>", pics);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(position => {
      let lat = JSON.stringify(position.coords.latitude);
      let long = JSON.stringify(position.coords.longitude);
      setLocData(lat + "," + long);
    }, (error) => {
      Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
    }
    )
  };

  const openRBSheet = (value) => {
    refRBSheet.current.open();
    setOption(value)
  }

  const setFile = (image) => {
    if (option === "optn1") {
      console.log(locData);
      if (locData) {
        setImages({ ...images, building_pic: image, building_pic_loc: locData })
      } else {
        Alert.alert("Please Try Again!!");
      }
    }
    if (option === "optn2") {
      if (locData) {
        setImages({ ...images, name_plate_pic: image, name_plate_pic_loc: locData })
      } else {
        Alert.alert("Please Try Again!!");
      }
    }
    if (option === "optn3") {
      if (locData) {
        setImages(prevState => ({
          ...prevState,
          residence_setup_pic: [...prevState.residence_setup_pic, image[0]],
          residence_setup_pic_loc: locData
        }))
      } else {
        Alert.alert("Please Try Again!!");
      }
    }
    if (option === "optn4") {
      if (locData) {
        setImages({ ...images, landmark_pic: image, landmark_pic_loc: locData })
      } else {
        Alert.alert("Please Try Again!!");
      }
    }
    if (option === "optn5") {
      if (locData) {
        setImages({ ...images, kyc_pic: image, kyc_pic_loc: locData })
      } else {
        Alert.alert("Please Try Again!!");
      }
    }
    if (option === "optn6") {
      if (locData) {
        setImages({ ...images, customer_pic: image, customer_pic_loc: locData })
      } else {
        Alert.alert("Please Try Again!!");
      }
    }
  }

  const openCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
      getCurrentPosition();
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const res = await launchCamera({ saveToPhotos: true, mediaType: "photo" })
        // console.log("image from camera=>", res?.assets);
        setFile(res?.assets)
        closeRBSheet()
      } else {
        Alert.alert("Permission Denied!!!")
      }
    } catch (err) {
      console.log(err);
    }
  }

  const openGallery = async () => {
    try {
      if (Platform.Version >= 31) {
        const granted = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
        getCurrentPosition();
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const res = await launchImageLibrary({ saveToPhotos: true, mediaType: "photo" })
          setFile(res?.assets)
          // console.log("image from gallery=>", res?.assets[0]);
          closeRBSheet()
        } else {
          Alert.alert("Permission Denied!!!")
        }
      } else {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        getCurrentPosition();
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const res = await launchImageLibrary({ saveToPhotos: true, mediaType: "photo" })
          // console.log("image from gallery=>", res?.assets[0]);
          setFile(res?.assets)
          closeRBSheet()
        } else {
          Alert.alert("Permission Denied!!!")
        }
      }

    } catch (err) {
      console.log(err);
    }
  }

  const closeRBSheet = () => {
    refRBSheet.current.close()
  }

  const [formError, setFormError] = useState({});

  const handleFormData = () => {
    const validationErrors = validateForm();
    setFormError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStep5(images)
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
      building_pic,
      name_plate_pic,
      residence_setup_pic,
      landmark_pic,
      kyc_pic,
      customer_pic
    } = images;

    if (!building_pic) {
      error.building_pic = "This Field is Required"
    }
    if (!name_plate_pic) {
      error.name_plate_pic = "This Field is Required"
    }
    if (residence_setup_pic?.length === 0) {
      error.residence_setup_pic = "This Field is Required"
    }
    if (residence_setup_pic?.length === 1) {
      error.residence_setup_pic = "Minimum 2 Photo Required"
    }
    if (!landmark_pic) {
      error.landmark_pic = "This Field is Required"
    }
    if (!kyc_pic) {
      error.kyc_pic = "This Field is Required"
    }
    if (!customer_pic) {
      error.customer_pic = "This Field is Required"
    }

    return error;
  }

  // useEffect(() => {

  // }, [])

  return (
    <View style={{}}>
      {/* Any other suspicious activity seen */}
      <Text style={styles.heading}>Photographs Capturing Criteria</Text>

      {/* body */}
      <View style={{ marginHorizontal: 10, }}>

        {/* Outside Photo of Building or Locality */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Outside Photo of Building or Locality</Text>
          </View>

          {!images?.building_pic?.length ?
            <TouchableOpacity onPress={() => openRBSheet("optn1")}>
              <View style={styles.imgWrap}>
                <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
              </View>
            </TouchableOpacity>
            :
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/check.png")} />
            </View>
          }
        </View>
        {formError?.building_pic ?
          <Text style={styles.error}>{formError?.building_pic}</Text>
          : null
        }

        {/* Name Plate Photo with Entrance */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Name Plate Photo with Entrance</Text>
          </View>

          {!images?.name_plate_pic?.length ?
            <TouchableOpacity onPress={() => openRBSheet("optn2")}>
              <View style={styles.imgWrap}>
                <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
              </View>
            </TouchableOpacity>
            :
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/check.png")} />
            </View>
          }
        </View>
        {formError?.name_plate_pic ?
          <Text style={styles.error}>{formError?.name_plate_pic}</Text>
          : null
        }

        {/* Residence Setup Pics */}
        <View style={styles.itemContainer}>
          <View style={{ marginBottom: 3 }}>
            <Text style={{ fontSize: 16 }}>Residence Setup Pics</Text>
            <Text style={{ fontSize: 11 }}>(Minimum 2 Interior Pics)</Text>
          </View>

          {images?.residence_setup_pic?.length < 2 ?
            <TouchableOpacity onPress={() => openRBSheet("optn3")}>
              <View style={styles.imgWrap}>
                <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
              </View>
            </TouchableOpacity>
            :
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/check.png")} />
            </View>
          }
        </View>
        {formError?.residence_setup_pic ?
          <Text style={styles.error}>{formError?.residence_setup_pic}</Text>
          : null
        }

        {/* Photos of Nearest Landmark */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Photos of Nearest Landmark</Text>
          </View>

          {!images?.landmark_pic?.length ?
            <TouchableOpacity onPress={() => openRBSheet("optn4")}>
              <View style={styles.imgWrap}>
                <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
              </View>
            </TouchableOpacity>
            :
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/check.png")} />
            </View>
          }
        </View>
        {formError?.landmark_pic ?
          <Text style={styles.error}>{formError?.landmark_pic}</Text>
          : null
        }

        {/* KYC photo */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>KYC photo</Text>
          </View>

          {!images?.kyc_pic?.length ?
            <TouchableOpacity onPress={() => openRBSheet("optn5")}>
              <View style={styles.imgWrap}>
                <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
              </View>
            </TouchableOpacity>
            :
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/check.png")} />
            </View>
          }
        </View>
        {formError?.kyc_pic ?
          <Text style={styles.error}>{formError?.kyc_pic}</Text>
          : null
        }

        {/* Customer Photo and FE selfi */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Customer Photo and FE Selfie</Text>
          </View>

          {!images?.customer_pic?.length ?
            <TouchableOpacity onPress={() => openRBSheet("optn6")}>
              <View style={styles.imgWrap}>
                <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
              </View>
            </TouchableOpacity>
            :
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/check.png")} />
            </View>
          }
        </View>
        {formError?.customer_pic ?
          <Text style={styles.error}>{formError?.customer_pic}</Text>
          : null
        }

      </View>
      <View style={styles.bsWrap}>
        <RBSheet
          height={150}
          animationType='slide'
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(19, 19, 19, 0.5)",
            },
            draggableIcon: {
              backgroundColor: "#A49F9F",
              height: 3,
              width: 50,
            },
          }}
        >
          <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
            {/* heading and close button */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>Upload Photo</Text>
              <TouchableOpacity onPress={() => closeRBSheet()}>
                <Image style={{}} source={require("../../../assets/icons/close.png")} />
              </TouchableOpacity>
            </View>

            {/* camera & gallery */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10, marginTop: 20 }}>
              <TouchableOpacity style={styles.button} onPress={() => openCamera()}>
                <Image style={{ marginRight: 5, width: 18, height: 18 }} source={require("../../../assets/icons/camera_w.png")} />
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Take Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => openGallery()}>
                <Image style={{ marginRight: 5, width: 18, height: 18 }} source={require("../../../assets/icons/gallery.png")} />
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}>Open Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>

      {/* // button */}
      <View style={{ marginTop: 30, marginBottom: 15 }}>
        <CustomButton btnText={"Next"} onPressFunc={handleFormData} />
      </View>
    </View>
  )
}

export default RFormStep5;

const styles = StyleSheet.create({
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 20,
  },
  imgWrap: {
    width: 30,
    height: 30,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#48B846",
    borderRadius: 100,
    backgroundColor: "#C7FFC6"
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  bsWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#48B846",
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 20
  },
  error: {
    color: "#f00",
    marginLeft: 5,
    fontSize: 12,
  },
})