import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Headers = ({ title, back }) => {
    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={back}>
                    <FontAwesome5Icon name='chevron-left' size={20} color="white" />
                </TouchableOpacity>
                <Text style={styles.headText}>{title}</Text>
            </View>
        </>
    );
}

export default Headers;