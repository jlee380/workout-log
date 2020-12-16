import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../style/global';

export default function List(props) {
    return (
        <View style={globalStyles.listContainer}>
            <View style={globalStyles.titleText}>{props.children}</View>
        </View>
    )
}