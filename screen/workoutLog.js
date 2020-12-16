import React from 'react';
import { globalStyles } from '../style/global'
import { Text, View, Button } from 'native-base';
import ReviewForm from './reviewFormBase'

export default function WorkoutLog({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
        <Text>
            {navigation.getParam('dateString')}
        </Text>
        <ReviewForm />
    </View>
  );
}
