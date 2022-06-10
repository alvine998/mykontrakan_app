import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import normalize from "react-native-normalize";
import { logo, logoFull } from "../../assets";
import { styles } from '../../styles'

const Login = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const sendSession = async (email) => {
        AsyncStorage.setItem("session", email)
    }

    const login = async () => {
        if (!email) {
            alert("Email wajib diisi!")
        } else if (!password) {
            alert("Password wajib diisi!")
        } else if (email == '1' && password == '1') {
            sendSession(email)
            props.navigation.navigate("home")
            alert("Login Sukses")
        } else {
            alert("Email / password salah!")
        }
    }

    useEffect(() => {

    }, [])
    return (
        <View style={styles.bgLogin}>
            <View style={styles.centering}>
                <Image source={logo} style={styles.loginImage} />
                <View>
                    <Text style={styles.textTitle}>MyKontrakan</Text>
                </View>
                <View style={styles.boxLogin}>
                    <TextInput onChangeText={(e) => setEmail(e)} value={email} style={styles.textInput} placeholderTextColor="#808080" placeholder="Email" />
                </View>
                <View style={styles.boxLoginPassword}>
                    <TextInput onChangeText={(e) => setPassword(e)} value={password} style={styles.textInput} placeholderTextColor="#808080" placeholder="Password" secureTextEntry={true} />
                    {/* <Icon type={"font-awesome"} name="heartbeat"  size={normalize(20)}  /> */}
                </View>
                <TouchableOpacity onPress={login} style={styles.buttonLogin}>
                    <Text style={styles.textButton}>Masuk</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;

