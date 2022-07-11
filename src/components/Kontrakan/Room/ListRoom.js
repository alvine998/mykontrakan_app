import React, { useEffect, useState } from 'react'
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { styles } from '../../../styles';

const ListRoom = ({ data }) => {
    const onPressToggle = async (id) => {
        if (id) {
            alert("Kamar no " + id)
        }
    }
    const [modal, setModal] = useState(false)

    useEffect(() => {

    }, [data])
    return (
        <View>
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                {
                    data.map((data, index) => (
                        <View style={styles.centeringLeft}>
                            <TouchableOpacity onPress={() => setModal(true)} key={index}>
                                <View style={styles.roomBox}>
                                    <Text style={styles.roomNoText}>{data?.no}</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={data?.status == 'available' ? styles.roomStatusTextAvailable : styles.roomStatusText}>{data?.status.toUpperCase()}</Text>
                            <View style={styles.centering}>
                                <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={modal}
                                    onRequestClose={() => {
                                        setModal(false);
                                    }}
                                >
                                    <View style={styles.centeringModal}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalText}>Nama Penghuni : {data?.name}</Text>
                                            <Text style={styles.modalText}>No Kamar : {data?.no}</Text>
                                            <Text style={styles.modalText}>NIK : {data?.nik}</Text>
                                            <Text style={styles.modalText}>Mulai : {data?.start}</Text>
                                            <Text style={styles.modalText}>Berakhir : {data?.end}</Text>
                                            <Text style={styles.modalText}>Kondisi Kamar : {data?.condition}</Text>
                                            <View style={styles.centering}>
                                                {
                                                    data?.status == 'available' ? (
                                                        <View>
                                                            <TouchableOpacity
                                                                style={styles.btnFill}
                                                                onPress={() => setModal(false)}
                                                            >
                                                                <Text style={styles.textStyle}>Isi data kamar</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={styles.btnClose}
                                                                onPress={() => setModal(false)}
                                                            >
                                                                <Text style={styles.textStyle}>Kembali</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    ) : <TouchableOpacity
                                                        style={styles.btnClose}
                                                        onPress={() => setModal(false)}
                                                    >
                                                        <Text style={styles.textStyle}>Kembali</Text>
                                                    </TouchableOpacity>
                                                }

                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    );
}

export default ListRoom;