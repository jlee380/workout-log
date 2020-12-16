import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Container, Header, Content, Form, Item, Picker, Icon } from 'native-base';
import { workoutData } from '../data/workoutData'

export default function ReviewFormBase() {
    const [ workoutType, setBodyPart ] = useState('chest');
    const [ workoutLists, setWorkoutLists ] = useState([]);

    const onValueChange = (value) => {
        setBodyPart(value);
        handleWorkoutList(value);
    }

    const handleWorkoutList = (value) => {
        setWorkoutLists([]);
        workoutData.map((a) => {
          if(a.workoutType.toLowerCase() == value) {
            setWorkoutLists(workoutLists => workoutLists.concat(a.workoutName))
          }
        })
        
    }

    const workoutTypes = ['Chest', 'Back', 'Arm', 'Abs', 'Leg'];

    return (
      <Container>
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                androidIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your workout"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={workoutType}
                onValueChange={(value) => onValueChange(value)}
              >
                {
                    workoutTypes.map((a) => 
                        <Picker.Item label={a} value={a.toLowerCase()} key={a} />
                    )
                }
              </Picker>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                androidIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your workout"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={workoutType}
                // onValueChange={(value) => onValueChange(value)}
              >
                {
                    workoutLists.map((a) => 
                    <Picker.Item label={a} value={a.toLowerCase()} key={a} />
                )
                }
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
}