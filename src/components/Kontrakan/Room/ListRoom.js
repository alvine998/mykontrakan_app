import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { styles } from '../../../styles';

const ListRoom = ({ data }) => {
    const onPressToggle = async (id) => {
        if (id) {
            alert("Kamar no " + id)
        }
    }

    useEffect(() => {

    }, [data])
    return (
        <View>
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                {
                    data.map((data, index) => (
                        <TouchableOpacity onPress={() => onPressToggle(data?.no)} key={index}>
                            <View style={[styles.roomBox,{marginLeft:normalize(10)}]}>
                                <Text style={styles.roomNoText}>{data?.no}</Text>
                            </View>
                            <Text style={styles.roomStatusText}>{data?.status}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    );
}

export default ListRoom;