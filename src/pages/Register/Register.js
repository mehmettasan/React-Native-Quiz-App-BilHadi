import React,{useContext, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import styles from "./Register.style";
import { UserContext } from '../../context/userContext';


const RegisterPage = ({navigation}) => {
    const {setUser,reference}=useContext(UserContext)
    const [blockButtons,setBlockButtons]=useState(false)
    const initialValues = {
        email: '',
        password: "",
        username:"",
    }

    const handleRegister =async ({email,password,username}) => {
        try {
            setBlockButtons(true)
            await auth().createUserWithEmailAndPassword(email,password).then((userCredintial) => {
                reference.ref("Users/"+auth().currentUser.uid).set({
                    userName:username,
                    email,
                    password,
                    point:0,
                    gold:0,
                }).then((res) => {
                    setUser(auth().currentUser)
                    setBlockButtons(false) 
                }).catch(err => console.log("error : \n", err))
            }).catch(error => {
                Alert.alert("Bir hata Oluştu","Lütfen Bilgilerinizi Kontrol Edip Tekrar Deneyiniz...")
                setBlockButtons(false) 
            })
            
        } catch (error) {
           Alert.alert("Bir hata Oluştu","Lütfen Bilgilerinizi Kontrol Edip Tekrar Deneyiniz...")
           setBlockButtons(false)
        }
    }

    function goLoginPage(){
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.title}>BİL</Text>
                <Text style={styles.title}>HADİ</Text>
            </View>
            <View style={styles.body_container}>
                <View style={styles.login_container}>
                    <Text style={styles.login_text}>Kayıt Ol</Text>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => handleRegister(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    placeholder="Kullanıcı Adı..."
                                />
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
                                <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={blockButtons}>
                                    <Text style={styles.btn_text}>Kayıt Ol</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                    <TouchableOpacity style={styles.button_kayit} onPress={goLoginPage} disabled={blockButtons}>
                        <Text style={styles.btn_text_kayit}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RegisterPage;