import { StyleSheet, Text, View, Image, TouchableOpacity, PermissionsAndroid, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { request, PERMISSIONS } from 'react-native-permissions';
import CustomButton from '../../../utils/CustomButton';

const BFormStep5 = ({ nextStep }) => {
  const refRBSheet = useRef();
  const [images, setImages] = useState({
    sign_board_pic: "",
    stock_pic: "",
    office_setup_pic: "",
    landmark_pic: "",
    kyc_pic: "",
    customer_pic: ""
  })
  const [option, setOption] = useState("");

  // console.log("image from state=>", typeof images.customer_pic.length);

  const openRBSheet = (value) => {
    refRBSheet.current.open();
    setOption(value)
  }

  const setFile = (image) => {
    if (option === "optn1") {
      setImages({ ...images, sign_board_pic: image })
    }
    if (option === "optn2") {
      setImages({ ...images, stock_pic: image })
    }
    if (option === "optn3") {
      setImages({ ...images, office_setup_pic: image })
    }
    if (option === "optn4") {
      setImages({ ...images, landmark_pic: image })
    }
    if (option === "optn5") {
      setImages({ ...images, kyc_pic: image })
    }
    if (option === "optn6") {
      setImages({ ...images, customer_pic: image })
    }
  }

  const openCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const res = await launchCamera({ saveToPhotos: true, mediaType: "photo" })
        // console.log("image from camera=>", res);
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
      const granted = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const res = await launchImageLibrary({ saveToPhotos: true, mediaType: "photo" })
        // console.log("image from gallery=>", res?.assets[0]);
        setFile(res?.assets)
        closeRBSheet()
      } else {
        Alert.alert("Permission Denied!!!")
      }
    } catch (err) {
      console.log(err);
    }
  }

  const closeRBSheet = () => {
    refRBSheet.current.close()
  }

  const nextFunc = ()=>{
    if (images.sign_board_pic &&
      images.stock_pic &&
      images.office_setup_pic &&
      images.landmark_pic &&
      images.kyc_pic &&
      images.customer_pic
    ) {
      nextStep()
    }
  }

  useEffect(() => {
    
  }, [])

  return (
    <View style={{}}>
      {/* Any other suspicious activity seen */}
      <Text style={styles.heading}>Photographs Capturing Criteria</Text>

      {/* body */}
      <View style={{ marginHorizontal: 10, }}>

        {/* Sign board pic with building entranc */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Sign board pic with Building Entrance</Text>
            <Text style={{ fontSize: 11 }}>(Business/Visiting card photo if sign board is missing)</Text>
          </View>

          {!images.sign_board_pic.length ?
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

        {/* Stock Pics */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Stock Pics</Text>
          </View>

          {!images.stock_pic.length ?
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
        {/* Office Setup */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Office Setup</Text>
            <Text style={{ fontSize: 11 }}>(Minimum 2 photo from differnt angle)</Text>
          </View>

          {!images.office_setup_pic.length ?
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

        {/* Photos of nearest landmark/Locality */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Photos of nearest landmark/Locality</Text>
          </View>

          {!images.landmark_pic.length ?
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

        {/* KYC photo */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>KYC photo</Text>
          </View>

          {!images.kyc_pic.length ?
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

        {/* Customer Photo and FE selfi */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Customer Photo and FE Selfie</Text>
          </View>

          {!images.customer_pic.length ?
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
        <CustomButton btnText={"Next"} onPressFunc={nextFunc} />
      </View>
    </View>
  )
}

export default BFormStep5;

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
  }
})