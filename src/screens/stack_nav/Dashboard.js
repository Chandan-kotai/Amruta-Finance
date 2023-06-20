import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, PermissionsAndroid, Alert, Linking, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import axios from 'axios';
import CustomLoader from '../../utils/CustomLoader';
import Toast from 'react-native-toast-message';
import { Api } from '../../services/api';

const Dashboard = ({ navigation, route }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const { id } = route?.params;

    const totalSubmited = taskList?.filter(item => item?.status === "true")

    const fetchTaskList = async () => {
        // console.log("user_id =>", route?.params);
        const config = {
            method: "get",
            url: Api + "/get-all/" + id,
        }
        // console.log(config);
        try {
            setStatus(true);
            const res = await axios(config);
            setStatus(false);
            // console.log("response=>", res?.data);
            if (res?.data) {
                setTaskList(res?.data);
            } else {
                Toast.show({
                    type: "info",
                    text1: "No Records Found",
                    text2: "Pleaase Try Again"
                });
            }
        } catch (exc) {
            // console.log("Error=>", exc);
            Toast.show({
                type: "error",
                text1: exc.message,
                text2: "Something Went Wrong. Pleaase Try Again",
            });
            setStatus(false);
        }
    }

    const navigateForm = (item) => {
        // console.log(item);
        if (item?.verification_type === "Business") {
            navigation.navigate("bform", { item: item });
        }
        if (item?.verification_type === "Residence") {
            navigation.navigate("rform", { item: item });
        }
    }

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                // {
                //     title: "Amruta Finance",
                //     message: 'Amruta Finance needs to access your Location',
                //     buttonNegative: 'Cancel',
                //     buttonPositive: 'OK',
                // },
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // console.log("granted");
            } else {
                Alert.alert("Amruta Finance", "This application needs to access the device location to function properly.", [
                    { text: 'OK', onPress: () => Linking.openSettings() }
                ])
            }

            const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (!hasPermission) {
                Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
            }
        } catch (err) {
            console.log(err);
        }
    }

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            fetchTaskList();
            setRefreshing(false);
        }, 2000);
    }

    useEffect(() => {
        fetchTaskList();
        requestLocationPermission();
    }, [])

    return (
        <SafeAreaView style={styles.parent}>
            <View style={{flex: 1}}>
                {/* // head logo */}
                <View>
                    <Image style={styles.img} source={require("../../assets/images/logo.png")} />
                </View>

                {/* // head options */}
                <View style={styles.optionsWrap}>
                    {/* <TouchableOpacity onPress={() => setOpen(true)}> */}
                    <View style={styles.calendar}>
                        <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require("../../assets/icons/calendar.png")} />
                        <Text style={{ color: "#000", fontSize: 16 }}>{date.toDateString()}</Text>
                    </View>
                    {/* </TouchableOpacity> */}

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
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image style={{ width: 20, height: 20 }} source={require("../../assets/icons/menu.png")} />
                    </TouchableOpacity>
                </View>

                {/* // display */}
                <View style={styles.displayWrap}>
                    {/* // Asssigned */}
                    <View style={[styles.display, { marginLeft: 12 }]}>
                        <Text style={styles.displayText}>{taskList?.length}</Text>
                        <Text style={{ color: "#000" }}>Total Assigned</Text>
                    </View>

                    {/* // Submission */}
                    <View style={[styles.display, { marginRight: 12 }]}>
                        <Text style={styles.displayText}>{totalSubmited?.length}</Text>
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

                    {/* refresh control */}
                    {/* <TouchableOpacity onPress={()=> fetchTaskList()}> */}
                        <View style={styles.refreshBtn}>
                            <Image style={{ width: 15, height: 15 }} source={require("../../assets/icons/arrow-down-line.png")} />
                            <Text style={{ fontSize: 12, color: "#000", marginLeft: 5 }}>Pull Down to Refresh</Text>
                        </View>
                    {/* </TouchableOpacity> */}

                    {/* // content */}
                    {taskList?.length ?
                        <FlatList
                            data={taskList}
                            showsVerticalScrollIndicator={false}
                            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#48B846"]} />}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <View>
                                    {index === 0 ? <View style={{ marginBottom: 15 }}></View> : null}
                                    <TouchableOpacity
                                        onPress={() => navigateForm(item)}
                                        disabled={item?.status === "true" ? true : false}
                                    >
                                        <View style={styles.content}>
                                            <Text style={{ color: "#000" }}>{item?.applicant_id}</Text>
                                            <Text
                                                style={
                                                    item?.status === "true" ? { color: "#48B846" } : { color: "#EB3A79" }
                                                }
                                            >
                                                {item?.status === "true" ? "Submited" : "Pending"}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    {index === taskList?.length - 1 ? <View style={{ marginBottom: (60 * taskList?.length) + 35 }}></View> : null}
                                </View>
                            )}
                        />
                        :
                        <View style={styles.nrFound}>
                            <Text style={{ color: "#000", textAlign: "center" }}>No Records Found</Text>
                        </View>
                    }
                </View>
            </View>
            <CustomLoader loader={status} />
        </SafeAreaView >
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
        width: 143,
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
        borderBottomColor: "#A39A9A",
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    refreshBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 15,
        backgroundColor: "#eceaea",
        paddingVertical: 5,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    },
    nrFound: {
        alignItems: "center",
        marginHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
})