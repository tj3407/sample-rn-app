import { Link } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button, Card, Input } from 'react-native-elements'
import { Text } from 'react-native-elements'

function Dashboard({ navigation }) {
  return (
    <ScrollView>
      <Card>
        <View style={styles.view}>
          <Text>No jobs booked for today</Text>
          <Link to={{ screen: 'Job Posting' }} style={styles.link}>
            Search available jobs
          </Link>
        </View>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#33a2ab',
    fontSize: 16,
  },
})

export default Dashboard
