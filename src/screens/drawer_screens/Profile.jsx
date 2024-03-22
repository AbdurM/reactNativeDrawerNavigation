import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { store } from '../../state/store'

const Profile = () => {

  const [loginState, setLoginState] = useState();
  useEffect(() => {
    setLoginState(store.getState().login.value);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First Name</Text>
      <Text style={styles.description}> {loginState?.firstName}</Text>
      <Text style={styles.title}>Last Name</Text>
      <Text style={styles.description}> {loginState?.lastName}</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    margin: 5,
    fontSize: 16,
  },
})