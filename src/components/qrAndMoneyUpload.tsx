import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";


const QrAndMoneyUpload: React.FC = ({ icon, text }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={icon} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EF4A15',
        width: 125,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 10
    },
    image: {
        width: 15,
        height: 15,
        marginLeft: 16
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'TT Norms Pro Bold',
        marginLeft: 6
    }
});
export default QrAndMoneyUpload;