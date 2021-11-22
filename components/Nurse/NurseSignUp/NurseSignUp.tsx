import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

function NurseSignUp({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text h4>Nurse Sign Up</Text>
      <Input
        label="Email"
        autoCompleteType="email"
        leftIcon={<Icon name="envelope" size={24} color="gray" />}
      />
      <Input
        label="First Name"
        autoCompleteType="email"
        leftIcon={<Icon name="user" size={24} color="gray" />}
      />
      <Input
        label="Last Name"
        autoCompleteType="email"
        leftIcon={<Icon name="user" size={24} color="gray" />}
      />
      <Input
        label="Password"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
        secureTextEntry
      />
      <Button
        title="Sign Up"
        type="solid"
        onPress={() => navigation.navigate('Nurse Login')}
        // onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] })}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default NurseSignUp
