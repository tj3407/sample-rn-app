import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

function FacilitySignUp({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text h4>Facility Sign Up</Text>
      <Input
        label="Email"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Input
        label="First Name"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Input
        label="Last Name"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Input
        label="Company Name"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Input
        label="Phone Number"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Input
        label="Zip Code"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
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
        onPress={() => navigation.navigate('Facility Login')}
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

export default FacilitySignUp
