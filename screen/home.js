import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ReviewForm from './reviewForm';
import List from '../shared/list'
import { globalStyles } from '../style/global';

export default function Home({ navigation }) {
    const [ reviews, setReviews ] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', id: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', id: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', id: '3' },
    ])

    const pressHandler = (item) => {
        console.log(item);
        navigation.navigate('ReviewDetail', item)
    }

    return (
        <View style={globalStyles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item)}>
                        {/* <Text style={globalStyles.titleText}>{item.title}</Text> */}
                        <List>
                            <Text>{item.title}</Text>
                        </List>
                    </TouchableOpacity>
                    
                )}
            />
            <ReviewForm />
        </View>
    )
}
