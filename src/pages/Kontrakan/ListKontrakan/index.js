import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ListBox from '../../../components/Kontrakan/ListBox';
import { styles } from '../../../styles';

const ListKontrakan = (props) => {

    const listData = [
        {
            housename: 'Al-Baqarah',
            address: 'Gg. Rambutan, Papanggo',
            mangername: 'M Maulana Mansur',
            totalroom: 15,
            availableroom: 4
        },
        {
            housename: 'Ali-Imran',
            address: 'Gg. Nangka, Papanggo',
            mangername: 'M Maulana Mansur',
            totalroom: 15,
            availableroom: 7
        }
    ]
    return (
        <>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <FontAwesome5Icon name='chevron-left' size={20} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headText}>List Kontrakan</Text>
                </View>

                <View style={{ padding: normalize(30) }}>
                    {
                        listData.map((data, i) => (
                            <TouchableOpacity onPress={()=>props.navigation.navigate("list-room")} style={{ marginBottom: normalize(10) }} key={i}>
                                <ListBox
                                    address={data.address}
                                    housename={data.housename}
                                    managername={data.mangername}
                                    totalroom={data.totalroom}
                                    availableroom={data.availableroom}
                                />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </>
    );
}

export default ListKontrakan;