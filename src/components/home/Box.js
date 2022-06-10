import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles';

const Box = (props) => {
    return (
        <>
            <View style={styles.homeOutContentBox}>
                <View style={styles.homeContentBox}>
                    <Ionicons name={props.name} size={props.size} color={props.color} />
                </View>
                <Text>{props.title}</Text>
            </View>
        </>
    );
}

export default Box;