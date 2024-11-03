import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import QrAndMoneyUpload from '../../components/qrAndMoneyUpload';
import CardDetail from '../../components/cardDetail';
import Spending from '../../components/spending';

import cardHeaderIcon from '../../../assets/Images/card.png';
import qr from '../../../assets/Images/qr.png';
import uploadMoney from '../../../assets/Images/uploadMoney.png';


const Cards: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={styles.cardContainerHeader}>Kartım</Text>
                <Image resizeMode='cover' style={styles.cardHeaderImage} source={cardHeaderIcon} /> 
            </View>
            <View style={styles.QrAndMoneyUploadContainer}>
                <QrAndMoneyUpload icon={qr} text="QR ile öde"/>
                <QrAndMoneyUpload icon={uploadMoney} text="Para yükle" />
            </View>
            <View style={styles.cardInformation}>
                <Text style={styles.cardInformationText}>Kart Bilgileri</Text>
                <CardDetail />
            </View>
            <View style={styles.cardMovements}>
                <View style={styles.cardMovementsHeader}>
                    <Text style={styles.cardInformationText}>Kart Hareketleri</Text>
                    <View style={styles.cardMovementsHeaderContainer}>
                        <Text style={styles.cardMovementsHeaderText}>Tümü</Text>
                    </View>
                </View>
               <Spending />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        height: 257,
        borderBottomWidth: 1,
        borderBottomColor: '#EF4A15',
    },
    cardContainerHeader: {
        fontSize: 16,
        fontWeight: '500',
        color: '#313538',
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'TT Norms Pro Bold'
    },
    cardHeaderImage: {
        width: 228,
        alignSelf: 'center',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        marginTop: "auto"
    },
    QrAndMoneyUploadContainer: {
        flexDirection: 'row',
        marginTop: 12,
        marginBottom: 15,
        alignItems: 'center',   
        justifyContent: 'center',
    },
    cardInformation: {
        marginHorizontal: 20,
    },
    cardInformationText: {
        color: '#151718',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'TT Norms Pro Medium',
        marginTop: 15,
        fontWeight: '500'
    },
    cardMovements: {
        marginHorizontal: 20,
    },
    cardMovementsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 15,
    },
    cardMovementsHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#EDF1F2',
        width: 62,
        height: 32,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    cardMovementsHeaderText: {
        color: '#313538',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'TT Norms Pro Medium',
        fontWeight: '500'
    }
});
export default Cards;