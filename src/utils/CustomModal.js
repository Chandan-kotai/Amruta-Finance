import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomModal = ({ isModal, modalExec, textColor, text }) => {
    return (
        <Modal
            animationType='fade'
            visible={isModal}
            transparent={true}
        >
            <View style={styles.ModalWrap}>
                <Text style={{ fontSize: 16, color: textColor, marginVertical: 30, fontWeight: "bold", textAlign: "center" }}>
                    {text}
                </Text>

                <TouchableOpacity style={styles.modalButton} onPress={modalExec}>
                    <Text style={styles.btnText}>OK</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    ModalWrap: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 7,
        paddingBottom: 20,
        paddingHorizontal: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: "center",
        width: 300,
        marginVertical: 310,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        margin: 6,
        textAlign: 'center',
        textTransform: "uppercase",
    },
    modalButton: {
        alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: "#2D75FF",
        borderRadius: 3
    },
});

export default CustomModal;