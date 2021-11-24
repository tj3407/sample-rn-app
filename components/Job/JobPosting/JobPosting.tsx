import React from 'react'
import uuid from 'react-native-uuid'
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import moment from 'moment'

interface ShiftMetaData {
  start: number
  duration: number
}

export interface JobsData {
  id: string
  name: string
  jobTitle: string
  pay: number
  city: string
  state: string
  shift: ShiftMetaData
}

const jobsData = [
  {
    id: uuid.v4(),
    name: 'Kaiser Permanente San Leandro',
    jobTitle: 'PACU RN',
    pay: 600,
    city: 'San Leandro',
    state: 'CA',
    shift: {
      start: 8,
      duration: 8,
    },
  },
  {
    id: uuid.v4(),
    name: 'Stanford Hospital',
    jobTitle: 'ER RN',
    pay: 800,
    city: 'Palo Alto',
    state: 'CA',
    shift: {
      start: 8,
      duration: 4,
    },
  },
  {
    id: uuid.v4(),
    name: 'UCLA Hospital',
    jobTitle: 'Med Surge RN',
    pay: 300,
    city: 'Los Angeles',
    state: 'CA',
    shift: {
      start: 16,
      duration: 4,
    },
  },
  {
    id: uuid.v4(),
    name: 'St. Rose Hospital',
    jobTitle: 'ICU RN',
    pay: 400,
    city: 'Hayward',
    state: 'CA',
    shift: {
      start: 12,
      duration: 4,
    },
  },
  {
    id: uuid.v4(),
    name: 'Sutter Health',
    jobTitle: 'PACU RN',
    pay: 600,
    city: 'Irvine',
    state: 'CA',
    shift: {
      start: 16,
      duration: 8,
    },
  },
  {
    id: uuid.v4(),
    name: 'Kaiser Permanente',
    jobTitle: 'ER RN',
    pay: 600,
    city: 'Anaheim',
    state: 'CA',
    shift: {
      start: 8,
      duration: 8,
    },
  },
]

function JobPosting({ navigation }) {
  return (
    <ScrollView>
      {jobsData.map((job, i) => (
        <ListItem key={i} bottomDivider containerStyle={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Job Details', { job })}>
            <ListItem.Content>
              <ListItem.Title>{job.jobTitle}</ListItem.Title>
              <ListItem.Subtitle>
                {job.pay.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </ListItem.Subtitle>
              <ListItem.Subtitle>{`${job.city}, ${job.state}`}</ListItem.Subtitle>
              <ListItem.Subtitle>{`Shift: ${moment(
                job.shift.start.toString(),
                'LT'
              ).format('HH:mm')} - ${moment(
                (job.shift.start + job.shift.duration).toString(),
                'LT'
              ).format('HH:mm')} (${
                job.shift.duration
              } hrs)`}</ListItem.Subtitle>
              <ListItem.Subtitle>{`ID: ${job.id}`}</ListItem.Subtitle>
            </ListItem.Content>
          </TouchableOpacity>
        </ListItem>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default JobPosting
