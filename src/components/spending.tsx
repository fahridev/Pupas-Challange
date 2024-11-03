import React from "react";
import { View, Text,Image, StyleSheet,FlatList } from "react-native";
import CardSSt from "../../assets/Images/cardSST.png";

const Spending: React.FC = () => {
    const spendingJson = [
        {
            id: 1,
            title: "LC Waikiki Mağazacılık Hizmetleri",
            amount: "-1300₺",
            time: "30.08.2024",
            icon: CardSSt,
        },
        {
            id: 2,
            title: "Happy Moon's Group",
            amount: "-310₺",
            time: "13.04.2024",
            icon: CardSSt,
        },
    ];
    return (
        <View style={styles.container}>
            <FlatList
                data={spendingJson}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.spendingContainer}>
                        <Image style={styles.image} source={item.icon} />
                        <View style={styles.textContainer}>
                            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                            <Text style={styles.subText}>{item.time}</Text>
                        </View>
                        <Text style={styles.time}>{item.amount}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    spendingContainer: {
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
    textContainer: {
        marginLeft: 12,
        flex: 1,
    },
    title: {
        color: '#151718',
        fontSize: 14,
        fontFamily: 'TT Norms Pro Bold',
        maxWidth: 168,
    },  
    time: {
        color: '#151718',
        fontSize: 14,
        fontFamily: 'TT Norms Pro Bold',
        marginRight: 12,
    },
    subText: {
        color: '#697177',
        fontSize: 14,
        fontFamily: 'TT Norms Pro Regular',
    },
});

export default Spending;