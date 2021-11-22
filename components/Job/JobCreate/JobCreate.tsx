import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

function JobCreate({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Input
        label="Job Title"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Input
        label="Pay"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Input
        label="Start Date"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Input
        label="Start Time"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Input
        label="# of Hours"
        autoCompleteType="email"
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Button
        title="Create Job"
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

export default JobCreate
