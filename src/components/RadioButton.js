import React, { Component, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';

const RadioButton = ({ toggle, name }) => {
    return (
        <>
            <View>
                <View style={styles.radioBg}>
                    {
                        toggle == true ? 
                        (
                            <View key={name} style={styles.radioActive}/>
                        ) : (
                            <View/>
                        )
                    }
                </View>
            </View>
        </>
    );
}

export default RadioButton;