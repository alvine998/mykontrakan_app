import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { PureComponent, useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { logo } from '../../assets';
import Box from '../../components/home/Box';
import BoxFa from '../../components/home/BoxFa';
import { styles } from '../../styles';

const Home = (props, { navigations }) => {
    const [session, setSession] = useState()
    const navigate = props.navigation.navigate
    const checkSession = async () => {
        AsyncStorage.getItem("session").then(
            res => {
                console.log(res);
                if (!res) {
                    navigate("login")
                }
            }
        )
    }

    const removeSession = async () => {
        await AsyncStorage.removeItem("session")
        navigate("login")
    }

    const dataBox = [
        {
            title: 'Tambah',
            name: 'add-circle',
            size: 50,
            dest: "tambah-kontrakan"
        },
        {
            title: 'List',
            name: 'list',
            size: 50,
            dest: "list-kontrakan"
        },
        {
            title: 'Ubah',
            name: 'create',
            size: 50,
            dest: "edit-kontrakan"
        }
    ]

    const dataBoxFa = [
        {
            title: 'Pemasukan',
            name: 'wallet',
            size: 50,
            dest: "tambah-kontrakan"
        },
        {
            title: 'Pengeluaran',
            name: 'money-check',
            size: 40,
            dest: "list-kontrakan"
        },
        {
            title: 'Riwayat',
            name: 'clock',
            size: 50,
            dest: "edit-kontrakan"
        }
    ]

    const dataBoxSetting = [
        {
            title: 'Profil',
            name: 'user',
            size: 50,
            dest: "tambah-kontrakan"
        },
        {
            title: 'Pesan Masuk',
            name: 'envelope',
            size: 50,
            dest: "tambah-kontrakan"
        },
        {
            title: 'Pengaturan',
            name: 'sliders-h',
            size: 40,
            dest: "list-kontrakan"
        }
    ]

    useEffect(() => {
        checkSession()
    }, [])


    return (
        <ScrollView>
            <View style={styles.homeBg}>
                <View style={styles.homeContext}>
                    <Image source={logo} style={styles.loginImage} />
                    <Text style={styles.homeTextTitle}>My Kontrakan</Text>
                </View>
            </View>
            <View style={styles.homeContainer}>
                <Text style={styles.homeTextMoney}>Saldo : Rp. 0,-</Text>
                <Text>Kontrakan</Text>
                <View style={styles.homeWrapperHorizontal}>
                    {
                        dataBox.map((data, index) => (
                            <TouchableOpacity key={index} onPress={() => props.navigation.navigate(data.dest)}>
                                <Box title={data?.title} name={data?.name} size={data?.size} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <Text>Keuangan</Text>
                <View style={styles.homeWrapperHorizontal}>
                    {
                        dataBoxFa.map((data, index) => (
                            <TouchableOpacity key={index} onPress={() => props.navigation.navigate(data.dest)}>
                                <BoxFa title={data?.title} name={data?.name} size={data?.size} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <Text>Akun</Text>
                <View style={styles.homeWrapperHorizontal}>
                    {
                        dataBoxSetting.map((data, index) => (
                            <TouchableOpacity key={index} onPress={() => props.navigation.navigate(data.dest)}>
                                <BoxFa title={data?.title} name={data?.name} size={data?.size} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <Button onPress={removeSession} type='solid' title={"Logout"} />
            </View>
        </ScrollView>
    );
}

export default Home;