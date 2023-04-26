import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

const Dashboard = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
        <SafeAreaView style={styles.parent}>
            <View>
                {/* // head logo */}
                <View>
                    <Image style={styles.img} source={require("../../assets/images/logo.png")} />
                </View>

                {/* // head options */}
                <View style={styles.optionsWrap}>
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <View style={styles.calendar}>
                            <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require("../../assets/icons/calendar.png")} />
                            <Text style={{ color: "#000", fontSize: 16 }}>{date.toDateString()}</Text>
                        </View>
                    </TouchableOpacity>

                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode="date"
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />

                    {/* // menu */}
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 20 }} source={require("../../assets/icons/menu.png")} />
                    </TouchableOpacity>
                </View>

                {/* // display */}
                <View style={styles.displayWrap}>
                    {/* // Asssigned */}
                    <View style={[styles.display, { marginLeft: 12 }]}>
                        <Text style={styles.displayText}>120</Text>
                        <Text style={{ color: "#000" }}>Total Assigned</Text>
                    </View>

                    {/* // Submission */}
                    <View style={[styles.display, { marginRight: 12 }]}>
                        <Text style={styles.displayText}>20</Text>
                        <Text style={{ color: "#000" }}>Total Submitted</Text>
                    </View>
                </View>

                {/* // body */}
                <View style={styles.bodyWrap}>
                    {/* // head */}
                    <View style={styles.heading}>
                        <Text style={{ color: "#000", fontSize: 17 }}>Applicant Id</Text>
                        <Text style={{ color: "#000", fontSize: 17 }}>Status</Text>
                    </View>

                    {/* // content */}
                    <TouchableOpacity>
                        <View style={styles.content}>
                            <Text style={{ color: "#000" }}>122365</Text>
                            <Text style={{ color: "#48B846" }}>Submited</Text>
                        </View>
                    </TouchableOpacity>

                    {/* // content */}
                    <TouchableOpacity onPress={() => navigation.navigate("bform", { id: "122365", type: "Office" })}>
                        <View style={styles.content}>
                            <Text style={{ color: "#000" }}>122365</Text>
                            <Text style={{ color: "#EB3A79" }}>Pending</Text>
                        </View>
                    </TouchableOpacity>

                    {/* // content */}
                    <TouchableOpacity onPress={() => navigation.navigate("rform", { id: "122363", type: "Residencial" })}>
                        <View style={styles.content}>
                            <Text style={{ color: "#000" }}>122363</Text>
                            <Text style={{ color: "#EB3A79" }}>Pending</Text>
                        </View>
                    </TouchableOpacity>
                    {/* // content */}
                    <TouchableOpacity>
                        <View style={styles.content}>
                            <Text style={{ color: "#000" }}>122365</Text>
                            <Text style={{ color: "#48B846" }}>Submited</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    img: {
        width: 330,
        height: 60,
        marginLeft: 15,
        marginTop: 20,
    },
    calendar: {
        flexDirection: "row",
        alignItems: "center",
    },
    optionsWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        marginHorizontal: 15,
    },
    displayWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: "#48B846",
        borderRadius: 10,
        height: 100
    },
    display: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: 130,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    displayText: {
        fontSize: 26,
        color: "#48B846",
        fontWeight: "900",
    },
    bodyWrap: {
        marginTop: 40,
    },
    heading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginBottom: 15,
        borderBottomColor: "#A39A9A",
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})