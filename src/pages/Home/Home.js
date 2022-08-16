import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import auth from "@react-native-firebase/auth"
import { UserContext } from '../../context/userContext';
import styles from "./Home.style"
import Quest from "../../components/Quest"


const HomePage = () => {
    const { user, setUser, reference } = useContext(UserContext)
    const [point, setPoint] = useState(0)
    const [gold, setGold] = useState(0)
    const [userName, setUserName] = useState("")
    async function getUserName() {
        await reference.ref(`/Users/${user.uid}`).once('value').then((snapshot) => {
            setUserName(snapshot.val().userName)
        });
    }

    async function getPoint() {
        await reference.ref('/Users/' + user.uid)
            .on('value', snapshot => {
                setPoint(snapshot.val().point)
                setGold(snapshot.val().gold)
            });
    }

    useEffect(() => {
        getUserName()
        getPoint()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.userName}>{userName} puan: {point} gold: {gold}</Text>
            <View style={styles.body}>
                <Quest />
            </View>
        </View>
    )
}

export default HomePage;