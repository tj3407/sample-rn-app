import { Link } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Card, Text } from 'react-native-elements'

function FacilityDashboard(props) {
  return (
    <ScrollView>
      <Card>
        <View>
          <Text h4>No jobs posted</Text>
          <Link to={{ screen: 'FacilityCreateJobPosting' }}>
            Create a job posting
          </Link>
        </View>
      </Card>
    </ScrollView>
  )
}

export default FacilityDashboard
