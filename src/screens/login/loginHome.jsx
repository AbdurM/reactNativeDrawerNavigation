import { StyleSheet, TextInput, View, Button, Text } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { saveLoginDetails } from '../../state/slices/loginSlice';
import { store } from '../../state/store'
import { getLoginDetails } from '../../storage/loginDetailsStorage';

const LoginHome = ({ navigation }) => {
    const [isAlreadyLoggedIn, setIsAlreadyLoggedIn] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(async () => {
        const loginDetails = await getLoginDetails();
        if (loginDetails) {
            setIsAlreadyLoggedIn(true);
            setFirstName(loginDetails.value.firstName)
            setLastName(loginDetails.value.lastName)
        }

    }, [])

    return (
        <View style={styles.container}>
            <Text> First Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setFirstName(text)}
            />
            <Text> Last Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setLastName(text)}
            />
            <Button title='Login' onPress={() => {
                store.dispatch(saveLoginDetails({
                    firstName: firstName,
                    lastName: lastName,
                }));

                navigation.navigate('DrawerNavigator');
            }} />
        </View>
    )
}

export default LoginHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})