import React, { useState } from 'react';
import { globalStyles } from '../style/global';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { DatePicker, Text, View, Button } from 'native-base';


export default function CalendarPage({ navigation }) {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     date: {
  //       "dateString": "",
  //       "day": null,
  //       "month": null,
  //       "timestamp": null,
  //       "year": null,
  //     }
  //   }
  // }
    const [ day, setDay ] = useState();
    const [ dateString, setDateString ] = useState();

    const getSelectedDate = (dayInfo) => {
      setDay(dayInfo.day);
      setDateString(dayInfo.dateString);
      
    }
    
    return (
      <View style={globalStyles.container}>
          <Calendar
            onDayPress={(dayInfo) => {getSelectedDate(dayInfo)}}
          />
          <View style={styles.calendarMargin}></View>
          <Button
            block
            onPress={() => {
              navigation.navigate('WorkoutLog', {dateString: dateString})
            }}
          ><Text>Start Log</Text></Button>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarMargin: {
    marginBottom: 10
  }
});
