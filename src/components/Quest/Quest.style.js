import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        minHeight:350,
        width:"70%",
        borderWidth:1,
        borderColor:"white",
        alignSelf:"center",
        margin:10,
        borderRadius:15,
    },
    quest_container:{
        borderBottomWidth:1,
        borderColor:"white",
        minHeight:70
    },
    quest_text:{
        color:"white",
        fontSize:19,
        fontWeight:"bold",
        padding:10,
    },
    answer_container:{
        alignItems:"center",
        justifyContent:"center",
    },
    answer_button:{
        borderWidth:1,
        borderColor:"white",
        width:"90%",
        minHeight:35,
        borderRadius:10,
        marginTop:10,
        marginBottom:10,
    },
    answer_text:{
        color:"white",
        fontSize:18,
        padding:10,
    }
})