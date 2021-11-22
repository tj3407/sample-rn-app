import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h3>Nurse Login</Text>
      <Input
        label="Username"
        autoCompleteType="email"
        placeholder="email@address.com"
        leftIcon={<Icon name="user" size={24} color="gray" />}
      />
      <Input
        label="Password"
        autoCompleteType="password"
        placeholder="Password"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
        secureTextEntry
      />
      <Button
        title="Login"
        type="solid"
        onPress={() => navigation.navigate('Nurse Dashboard')}
        // onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] })}
      />
      <Button
        title="Sign Up"
        type="outline"
        onPress={() => navigation.navigate('Nurse Sign Up')}
        // onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] })}
      />
      <Button title="Forgot Password" type="clear" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default Login
