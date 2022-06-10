import React, { Component, useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Kontrakan/Header'
import { styles } from '../../../styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import normalize from 'react-native-normalize';
import RadioButton from '../../../components/RadioButton';
import { logoFull } from '../../../assets';


const TambahKontrakan = (props) => {
    const [radio, setRadio] = useState(true)
    const [radio2, setRadio2] = useState(false)
    const [radioValue, setRadioValue] = useState()

    const changeRadio = () => {
        setRadio(true)
        setRadio2(false)
    }

    const changeRadio2 = () => {
        setRadio(false)
        setRadio2(true)
    }

    return (
        <>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <FontAwesome5 name='chevron-left' size={20} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headText}>Tambah Kontrakan</Text>
                </View>
                <View style={styles.addContainer}>
                    <View style={styles.addCenterLogo}>
                        <Image source={logoFull} style={styles.addImage}/>
                    </View>
                    <TextInput underlineColorAndroid={true} placeholder="Nama Kontrakan" />
                    <TextInput underlineColorAndroid={true} placeholder="Alamat Kontrakan" />
                    <TextInput underlineColorAndroid={true} placeholder="Nama Pengelola" />
                    <View style={{ paddingLeft: normalize(10) }}>
                        <Text>Jenis Kelamin :</Text>
                        <View style={styles.addRadioContainer}>
                            <TouchableOpacity onPress={changeRadio} style={{ flexDirection: "row" }}>
                                <RadioButton name={"radio1"} toggle={radio} />
                                <Text style={{ paddingLeft: normalize(10) }}>Laki-Laki</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={changeRadio2} style={{ flexDirection: "row", marginLeft: normalize(20) }}>
                                <RadioButton name={"radio2"} toggle={radio2} />
                                <Text style={{ paddingLeft: normalize(10) }}>Perempuan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TextInput underlineColorAndroid={true} placeholder="No Telepon" keyboardType='number-pad' maxLength={13} />
                    <TextInput underlineColorAndroid={true} placeholder="Harga Kontrakan" keyboardType='number-pad' maxLength={13}  />
                    <TextInput underlineColorAndroid={true} placeholder="Jumlah Kamar" keyboardType='number-pad' maxLength={999} style={{width:normalize(150)}} />
                    <TouchableOpacity>
                        <View style={styles.addButtonSave}>
                            <Text style={styles.addButtonText}>Simpan</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default TambahKontrakan