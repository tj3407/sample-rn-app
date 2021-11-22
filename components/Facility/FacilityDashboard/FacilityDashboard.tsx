import { Link } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-elements'

function FacilityDashboard(props) {
  return (
    <ScrollView>
      <Card>
        <View>
          <Text h4>No jobs posted</Text>
          <Link to={{ screen: 'Job Create' }} style={styles.link}>
            Create a job posting
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

export default FacilityDashboard
