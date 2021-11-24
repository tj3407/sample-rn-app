import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import moment from 'moment'
import { JobsData } from '../JobPosting/JobPosting'

interface RouteParams {
  job: JobsData
}

function JobDetails({ route, navigation }) {
  const { job }: RouteParams = route.params
  return (
    <ScrollView style={styles.container}>
      <Text h3>{job.jobTitle}</Text>
      <Text h4>
        {job.pay.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </Text>
      <Text>
        {`Shift: ${moment(job.shift.start.toString(), 'LT').format(
          'HH:mm'
        )} - ${moment(
          (job.shift.start + job.shift.duration).toString(),
          'LT'
        ).format('HH:mm')} (${job.shift.duration} hrs)`}
      </Text>
      <Text>{job.name}</Text>
      <Text>
        {job.city}, {job.state}
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
