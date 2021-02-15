import { StyleSheet } from 'react-native';
const theme = StyleSheet.create({
    container: {
        flex: 1,
        // margin: 1,
        padding: 1
    },
    centerFlex: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fff",
        width: "100%",
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    appButtonContainer: {
        flex: 1,
        flexDirection: "row",
        elevation: 8,
        // backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRightWidth: 1
    },
    appButtonText: {
        fontSize: 12
    },
    searchView: {
        flex: 1,
        // flexDirection: "row",
        width: "100%",
        maxHeight: 60,
        minHeight: 40,
        // height: 40,
        backgroundColor: "#1d3557",
        position: "relative",
    },
    InputStyle: {
        flex: 1,
        margin: 10,
        height: 35,
        backgroundColor: "#fff",

    },
    searchBtn: {
        position: "absolute",
        right: 9,
        top: 10,
        height: 40,
        width: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e63946",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    headerStyles: {
        backgroundColor: "#a8dadc"
    }
});
export default theme;