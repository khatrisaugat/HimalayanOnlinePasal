import { StyleSheet, Dimensions } from 'react-native';
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
        // elevation: 8,
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
        backgroundColor: "#fff"
    },
    ScrollViewStyle: {
        backgroundColor: "#ccc",
        flex: 1,
        paddingBottom: 15,
        marginBottom: 50
    },
    singleProductView: {
        backgroundColor: "#fff",
        display: "flex",
        position: "relative",
        width: Dimensions.get('window').width / 2 - 25,
        height: 300,
        borderRadius: 15,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        marginTop: 20

    },
    cardImage: {
        display: "flex",
        position: "absolute",
        width: Dimensions.get('window').width / 2 - 25,
        height: 150,
        borderRadius: 15,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        top: 0
    },
    cardBody: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 150,
    },
    cardHeading: {
        fontSize: 18,
        padding: 10,
        maxHeight: 70,
        fontWeight: "600",
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: "600",
        color: "#e63946"
    },
    strikePrice: {
        textDecorationLine: "line-through"
    },
    addToCartBtn: {
        flex: 1,
        flexDirection: "row",
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: Dimensions.get('window').width / 3 - 25
    },
    ProductView: {
        flex: 1,
        width: "100%",
        alignItems: "stretch",
        justifyContent: "space-evenly",
        paddingRight: 0,
        paddingLeft: 0,
        marginRight: 0,
        marginLeft: 0
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "stretch",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 0,
        paddingLeft: 0,
        marginRight: 0,
        marginLeft: 0
    },
    headingText: {
        fontSize: 24,
        fontWeight: "600",
        alignSelf: "flex-start",
        left: 0
    },
    verticalScrollView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around"
    },
    simpleCard: {
        display: "flex",
        width: Dimensions.get('window').width - 25,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 15,
        alignSelf: "center",
        marginTop: 25,
        borderBottomWidth: 3,
        borderTopWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    loginInput: {
        height: 40,
        backgroundColor: "#fff",
        width: Dimensions.get('window').width / 1.5,
        borderWidth: 1.5,
        borderRadius: 10,
        padding: 4,
        margin: 4,
    },
    simpleBtn: {
        display: "flex",
        flexDirection: "row",
        width: (Dimensions.get('window').width / 1.5) / 2,
        backgroundColor: "#1d3557",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        borderRadius: 10,
        marginBottom: 10
    },
    simpleLinkBtn: {
        backfaceVisibility: "visible"
    },
    categoriesHeading: {
        backgroundColor: "#ccc",
        width: Dimensions.get("window").width / 4,
        height: Dimensions.get("window").height - 50,
        margin: 5,
        marginLeft: 0,
        padding: 5,
        borderRightWidth: 3,
        borderRadius: 10,
        paddingBottom: 50,

    },
    categoriesItems: {
        // backgroundColor: "#fff",
        width: (Dimensions.get("window").width / 4) * 3 - 20,
        height: Dimensions.get("window").height - 50,
        margin: 5,
        padding: 5,
        paddingBottom: 50,
    },
    categories: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: Dimensions.get("window").width,
    },
    singleCategory: {
        flex: 1,
        borderBottomWidth: 2,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    categoryIcon: {
        height: 35,
        width: 35
    },
    cartItemContainer: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#fff",
        marginLeft: 2,
        position: "relative",
        minHeight: 110,
    },
    cartImage: {
        display: "flex",
        // alignSelf: "auto",
        height: 100,
        width: 100,
        position: "absolute",
        left: 10,
        top: 5,
    },
    cartItemText: {
        display: "flex",
        position: "absolute",
        left: Dimensions.get('window').width / 2,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    checkbox: {
        display: "flex",
        position: "absolute",
        right: 5,
        width: 20,
        height: 20,
        borderRadius: 20,
        top: 40,
        borderWidth: 2
    },
    checkRadioSelected: {
        borderWidth: 2,
        borderColor: "#fff",
        backgroundColor: "#000",
        width: 16,
        height: 16,
        borderRadius: 16
    },
    checkRadio: {
        borderWidth: 2,
        borderColor: "#fff",
        backgroundColor: "#fff",
        width: 16,
        height: 16,
        borderRadius: 16
    },
    cartHeading: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        minHeight: 100,
        backgroundColor: "#ded9e2"
    },
    CheckOutBtnView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        position: "absolute",
        bottom: 50,
        left: 0,
        right: 0,
        // marginTop: 15,
        // marginTop: 0,
        backgroundColor: "#ded9e2",
        height: 70
    }

});
export default theme;