import React from 'react'
import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'

function InitialSelection({ navigation }) {
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Facility Login')}>
        <Card>
          <Card.Title>For Healthcare Facilities</Card.Title>
          <Card.Image
            source={require('../../assets/facility.jpg')}
            style={{ width: '100%', height: 250 }}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Nurse Login')}>
        <Card>
          <Card.Title>For Nurses</Card.Title>
          <Card.Image
            source={require('../../assets/nurse.jpg')}
            style={{ width: '100%', height: 250 }}
          />
        </Card>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default InitialSelection
