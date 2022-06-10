import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../styles';

const BoxFa = (props) => {
    return (
        <>
            <View style={styles.homeOutContentBox}>
                <View style={styles.homeContentBox}>
                    <FontAwesome5 name={props.name} size={props.size} color={props.color} />
                </View>
                <Text>{props.title}</Text>
            </View>
        </>
    );
}

export default BoxFa ;