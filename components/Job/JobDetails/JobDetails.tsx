import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'

function JobDetails({ route, navigation }) {
  const { job } = route.params
  return (
    <ScrollView style={styles.container}>
      <Text h4>{job.jobTitle}</Text>
      <Text h4>
        {job.pay.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </Text>
      <Button
        title="Book"
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

export default JobDetails
