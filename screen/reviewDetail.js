import React from 'react';
import { Text, View } from 'react-native';
import List from '../shared/list'

export default function ReviewDetail({ route, navigation}) {
    // const { title } = route.params;
    return (
        <View>
            <List>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
            </List>
        </View>
    )
}