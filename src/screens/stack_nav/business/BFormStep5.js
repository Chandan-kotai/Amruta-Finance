import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BFormStep5 = ({ nextStep }) => {

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

          <TouchableOpacity onPress={()=> nextStep()}>
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Stock Pics */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Stock Pics</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Office Setup */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Office Setup</Text>
            <Text style={{ fontSize: 11 }}>(Minimum 2 photo from differnt angle)</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Photos of nearest landmark/Locality */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Photos of nearest landmark/Locality</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
            </View>
          </TouchableOpacity>
        </View>

        {/* KYC photo */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>KYC photo</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Customer Photo and FE selfi */}
        <View style={styles.itemContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Customer Photo and FE selfi</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.imgWrap}>
              <Image style={{ width: 15, height: 15 }} source={require("../../../assets/icons/camera.png")} />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default BFormStep5

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
  }
})