import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

function JobDetails({ route }) {
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default JobDetails
