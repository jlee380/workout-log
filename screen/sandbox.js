import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>boxOne</Text>
            <Text style={styles.boxTwo}>boxOne</Text>
            <Text style={styles.boxThree}>boxOne</Text>
            <Text style={styles.boxFour}>boxOne</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 40,
        backgroundColor: '#ddd'
    },
    boxOne: {
        flex: 1,
        padding: 10,
        backgroundColor: 'violet'
    },
    boxTwo: {
        padding: 10,
        backgroundColor: 'gold'
    },
    boxThree: {
        padding: 10,
        backgroundColor: 'coral'
    },
    boxFour: {
        padding: 10,
        backgroundColor: 'skyblue'
    },
})