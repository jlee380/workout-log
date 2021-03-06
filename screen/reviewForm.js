import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../style/global';

export default function ReviewForm() {
    return(
        <View>
            <Formik
                initialValues={{ title: '', body: '', rating: ''}}
                onSubmit={(values)=> {
                    console.log(values)
                }}
            >
                {
                    (props) => (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review Title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                            />
                            <TextInput
                                multiline
                                style={globalStyles.input}
                                placeholder='Review Body'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                            />
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Rating 1-5'
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                keyboardType='numeric'
                            />
                            <Button title='Submit' color='maroon' onPress={props.handleSubmit} />
                        </View>
                    )
                }
            </Formik>
        </View>
    )
}