import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
    // Header
    header: {
        width: '100%',
        height: normalize(50),
        backgroundColor: "#808080",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: normalize(20)
    },
    headText: {
        color: "white",
        fontSize: normalize(18),
        marginLeft: normalize(30),
        fontWeight: "bold"
    },

    // Login
    centering: {
        alignItems: "center",
        justifyContent: "center"
    },
    bgLogin: {
        backgroundColor: "white",
        height: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    boxLogin: {
        width: normalize(250),
        height: normalize(40),
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginTop: normalize(10)
    },
    boxLoginPassword: {
        width: normalize(250),
        height: normalize(40),
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginTop: normalize(10),
        flexDirection: "row"
    },
    textTitle: {
        color: "black",
        fontSize: normalize(32),
        marginBottom: normalize(20)
    },
    textInput: {
        color: "black",
        fontSize: normalize(16)
    },
    textButton: {
        color: "white",
        fontSize: normalize(18),
    },
    buttonLogin: {
        width: normalize(250),
        height: normalize(30),
        backgroundColor: "#808080",
        marginTop: normalize(20),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    loginImage: {
        width: normalize(100),
        height: normalize(120)
    },

    // Home
    homeBg: {
        width: '100%',
        height: normalize(200),
        backgroundColor: "#9AF08B",
        borderBottomLeftRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    homeTextTitle: {
        fontSize: normalize(24),
        fontWeight: 'bold',
        marginLeft: normalize(20)
    },
    homeContainer: {
        paddingLeft: normalize(30),
        paddingRight: normalize(30),
        paddingTop: normalize(20),
        paddingBottom: normalize(20)
    },
    homeOutContentBox: {
        alignItems: "center",
        justifyContent: "center",
        margin: normalize(20)
    },
    homeContentBox: {
        borderRadius: 10,
        borderWidth: 1,
        width: normalize(75),
        height: normalize(75),
        alignItems: "center",
        justifyContent: "center"
    },
    homeWrapperHorizontal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    homeTextMoney: {
        marginBottom: normalize(20),
        fontSize: normalize(24),
        fontWeight: "bold"
    },
    homeContext: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    // Radio Button
    radioBg: {
        width: normalize(20),
        height: normalize(20),
        borderRadius: 20,
        backgroundColor: "#dfdfdf",
        alignItems: "center",
        justifyContent: "center"
    },
    radioActive: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "green"
    },

    // Add Kontrakan
    addContainer: {
        padding: normalize(30)
    },
    addRadioContainer: {
        paddingLeft: normalize(20),
        flexDirection: "row",
        paddingTop: normalize(10)
    },
    addButtonSave: {
        width: '100%',
        height: normalize(40),
        backgroundColor: "#098FB3",
        marginTop: normalize(20),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    addButtonText: {
        color: "white",
        fontSize: normalize(20)
    },
    addImage: {
        width: normalize(100),
        height: normalize(100)
    },
    addCenterLogo: {
        alignItems: "center",
        justifyContent: "center"
    },
    textJK: {
        color: "black",
        fontSize: normalize(18),
        marginTop: normalize(10)
    },

    // List Kontrakan
    listBox: {
        width: '100%',
        height: normalize(100),
        borderWidth: 1,
        borderRadius: 20,
        padding: normalize(20)
    },
    listCenterRight: {
        paddingLeft: normalize(20)
    },

    // List Room
    roomBox: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    roomNoText: {
        fontSize: normalize(24),
        color: "black"
    },
    roomStatusText: {
        fontSize: normalize(16),
        textAlign: "center",
        marginBottom: normalize(10)
    },
    roomStatusTextAvailable: {
        fontSize: normalize(16),
        textAlign: "center",
        marginBottom: normalize(10),
        color:"green"
    },
    centeringLeft: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: normalize(10)
    },
    btnClose: {
        width: normalize(150),
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        height:normalize(35),
        marginTop:normalize(20)
    },
    btnFill: {
        width: normalize(150),
        backgroundColor: "orange",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        height:normalize(35),
        marginTop:normalize(20)
    },
    modalView: {
        backgroundColor: "white",
        height: normalize(250),
        width: normalize(300),
        borderRadius: 20,
        padding:normalize(20),
        justifyContent:"center"
    },
    modalText: {
        color: "black",
        fontSize: normalize(20)
    },
    centeringModal:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:normalize(100)
    }
})