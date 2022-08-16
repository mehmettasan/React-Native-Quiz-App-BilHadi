import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#261d32",
    },
    header_container: {
        flex: 2,
        justifyContent: "center"
    },
    title: {
        fontSize: 70,
        fontWeight: "bold",
        color: "white",
        marginLeft: 20,
        alignSelf: "flex-start"
    },
    body_container: {
        flex: 3,
        alignItems: "center",
    },
    login_container: {
        backgroundColor: "white",
        height: 350,
        width: "70%",
        alignItems: "center",
        borderRadius: 15,
    },
    login_text: {
        marginTop: 10,
        color: "black",
        fontSize: 25,
        fontWeight: "bold"
    },
    input: {
        width: "90%",
        borderRadius: 10,
        height: 50,
        padding: 10,
        margin: 5,
        backgroundColor: "#e0e0e0",
        fontSize: 18
    },
    button: {
        marginTop: 20,
        minWidth: "70%",
        backgroundColor: "white",
        borderColor: "#261d32",
        borderWidth: 1,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    btn_text: {
        color: "#261d32",
        fontSize: 20
    },
    button_kayit: {
        marginTop: 20,
        minWidth: "70%",
        backgroundColor: "#261d32",
        borderColor: "#261d32",
        borderWidth: 1,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    btn_text_kayit: {
        color: "white",
        fontSize: 20
    }
})