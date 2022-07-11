import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo, logoFull } from "../assets";


const Splash = (props) => {
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.dispatch(StackActions.replace("login"))
        }, 1000)
    })
    return (
        <View>
            <View style={styles.background}>
                <View style={styles.objCenter}>
                    <Image source={logo} style={styles.imgSize} />
                    <View style={{marginTop:normalize(20)}}>
                        <Text style={{color:"black", fontSize:normalize(25)}}>My Kontrakan</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: "#fff"
    },
    imgSize: {
        width: normalize(200),
        height: normalize(200)
    },
    objCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})