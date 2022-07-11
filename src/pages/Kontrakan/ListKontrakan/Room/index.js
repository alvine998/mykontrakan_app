import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import normalize from 'react-native-normalize';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ListRoom from '../../../../components/Kontrakan/Room/ListRoom';
import { styles } from '../../../../styles';
import Headers from '../../../../components/Kontrakan/Header'

const Room = ({navigation}) => {
    const [toggle, setToggle] = useState(false)
    const dataRoom = [
        {
            no: 1,
            name: 'Empty',
            nik: '',
            start: '',
            end: '',
            condition: 'Good',
            status: 'available',
            deleted: 0
        },
        {
            no: 2,
            name: 'Empty',
            nik: '',
            start: '',
            end: '',
            condition: 'Good',
            status: 'available',
            deleted: 0
        },
        {
            no: 3,
            name: 'Empty',
            nik: '',
            start: '',
            end: '',
            condition: 'Good',
            status: 'available',
            deleted: 0
        },
        {
            no: 4,
            name: 'Eva July',
            nik: '12345678',
            start: '2022-06-06',
            end: '2022-07-06',
            condition: 'Good',
            status: 'not available',
            deleted: 0
        },
    ]

    useEffect(() => {

    }, [])
    return (
        <>
            <Headers title="Data Kamar" back={()=>navigation.goBack()} />
            <View style={{ padding: normalize(30) }}>
                {
                    dataRoom.length < 0 ? (
                        <View>
                            <Text>Belum ada kamar</Text>
                            <Button
                                title={"Tambah Kamar"}
                            />
                        </View>
                    ) : (
                        <View>
                            <ListRoom data={dataRoom} />
                        </View>
                    )
                }
            </View>
        </>
    );
}

export default Room;