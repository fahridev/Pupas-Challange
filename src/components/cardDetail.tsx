import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import CardTime from "../../assets/Images/CardTime.png";
import CardSSt from "../../assets/Images/cardSST.png";
import Copy from "../../assets/Images/Copy.png";

const CardDetail: React.FC = ({ icon, text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardLineTop}>
                <Image style={styles.image} source={CardTime} />
                <Text style={styles.text}>4310 1030 3000 9530</Text>
                <Image style={styles.copyImage} source={Copy} />
            </View>
            <View style={styles.cardLineTop}>
                <Image style={styles.image} source={CardTime} />
                <Text style={styles.text}>12/24</Text>
                <Image style={styles.imageSST} source={CardSSt} />
                <Text style={styles.cardSST}>430</Text>
                <Image style={styles.copyImage} source={Copy} />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container : {
        width: "100%",
        borderWidth: 1,
        borderColor: '#EDF1F2',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
    },
    cardLineTop: {
        height: 56,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#EDF1F2',
        alignItems: 'center',
    },
    image: {
        width: 32,
        height: 32,
        marginLeft: 12,
    },
    imageSST: {
        width: 32,
        height: 32,
        marginLeft: 32,
    },
    text: {
        color: '#151718',
        fontSize: 14,
        fontFamily: 'TT Norms Pro Bold',
        marginLeft: 12,
    },
    copyImage: {
        width: 18,
        height: 18,
        marginLeft: 12,
    },
    cardSST : {
        color: '#151718',
        fontSize: 14,
        fontFamily: 'TT Norms Pro Bold',
        marginLeft: 12,
    }
});

export default CardDetail;