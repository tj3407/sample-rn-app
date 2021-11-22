import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

function FacilityLogin({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text h4>Facility Login</Text>
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
      />
      <Button
        title="Login"
        type="solid"
        onPress={() => navigation.navigate('Facility Dashboard')}
        // onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] })}
      />
      <Button
        title="Sign Up"
        type="outline"
        onPress={() => navigation.navigate('Facility Sign Up')}
        // onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] })}
      />
      <Button title="Forgot Password" type="clear" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default FacilityLogin
