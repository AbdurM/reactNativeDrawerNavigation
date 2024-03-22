import { StyleSheet, TextInput, View, Button, Text } from 'react-native'
import React from 'react'

const LoginHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> First Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={() => { }}
            />
            <Text> Last Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={() => { }}
            />
            <Button title='Login' onPress={() => navigation.navigate('DrawerNavigator')} />
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