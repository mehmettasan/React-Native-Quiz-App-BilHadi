import React from 'react';
import { View, Button } from 'react-native'
import auth from "@react-native-firebase/auth"
import styles from "./SettingsPage.style"

const SettingsPage = () => {
    return (
        <View style={styles.container}>
            <Button title='log out' onPress={async () => {
                await auth().signOut()
                setUser(null)
            }} />
        </View>
    )
}

export default SettingsPage;