import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles';

const ListBox = ({ housename, address, managername, totalroom, availableroom }) => {
    return (
        <>
            <View style={styles.listBox}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Text>{housename}</Text>
                        <Text>{address}</Text>
                        <Text>{managername}</Text>
                    </View>
                    <View style={styles.listCenterRight}>
                        <Text>Jumlah Kamar : {totalroom}</Text>
                        <Text style={availableroom <= 5 ? {color:"red"}:{}}>Tersedia : {availableroom}</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

export default ListBox;