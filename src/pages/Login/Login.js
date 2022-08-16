import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import styles from "./Login.style"
import { UserContext } from '../../context/userContext';


const LoginPage = ({navigation}) => {
    const {setUser}=useContext(UserContext)
    const initialValues = {
        email: '',
        password: "",
    }

    const hadleLogin = async ({email,password}) => {
        try {
            await auth().signInWithEmailAndPassword(email,password)
            await setUser(auth().currentUser)
        } catch (error) {
            Alert.alert("Hatalı Giriş","Hatalı Giriş Yaptınız Lütfen Bilgilerinizi Kontrol Edip Tekrkar Deneyiniz...")    
        }
    }

    function goRegisterPage(){
        navigation.navigate("RegisterPage")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.title}>BİL</Text>
                <Text style={styles.title}>HADİ</Text>
            </View>
            <View style={styles.body_container}>
                <View style={styles.login_container}>
                    <Text style={styles.login_text}>Giriş Yap</Text>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => hadleLogin(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="E-Posta..."
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder="Şifre..."
                                    secureTextEntry
                                />
                                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                    <Text style={styles.btn_text}>Giriş Yap</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                    <TouchableOpacity style={styles.button_kayit} onPress={goRegisterPage}>
                        <Text style={styles.btn_text_kayit}>Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginPage;