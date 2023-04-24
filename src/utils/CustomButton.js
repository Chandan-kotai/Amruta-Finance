import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'

const CustomButton = ({ btnText, onPressFunc }) => {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.button} onPress={()=>onPressFunc()}>
                <Text style={styles.buttonText}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        alignItems: "center",
    },
    button:{
        paddingHorizontal: 80,
        paddingVertical: 10,
        backgroundColor: "#48B846",
        borderRadius: 20,
        width:"100%",
    },
    buttonText:{
        color:"#fff",
        textAlign: "center",
        fontWeight: "bold",
    }
})

export default CustomButton
