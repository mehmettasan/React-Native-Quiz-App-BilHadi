import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native'
import styles from "./Quest.style"

const Quest=()=>{
    let text="a\n b\n c\n d"
    return(
        <View style={styles.container}>
            <View style={styles.quest_container}>
                <Text style={styles.quest_text}>Aşağıdakilerden Hangisi Aşağıdadır?</Text>
            </View>
            <View style={styles.answer_container}>
                <TouchableOpacity style={styles.answer_button}>
                    <Text style={styles.answer_text}>bu Aşağıda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer_button}>
                    <Text style={styles.answer_text}>bu daha Aşağıda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer_button}>
                    <Text style={styles.answer_text}>bu çok Aşağıda </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer_button}>
                    <Text style={styles.answer_text}>bu en Aşağıda</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quest