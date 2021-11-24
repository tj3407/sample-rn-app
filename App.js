import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from 'react-native-elements'

import { theme } from './styles/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import InitialSelection from './components/InitialSelection/InitialSelection'
import NurseLogin from './components/Nurse/NurseLogin/NurseLogin'
import NurseDashboard from './components/Nurse/NurseDashboard/NurseDashboard'
import NurseSignUp from './components/Nurse/NurseSignUp/NurseSignUp'
import FacilitySignUp from './components/Facility/FacilitySignUp/FacilitySignUp'
import FacilityLogin from './components/Facility/FacilityLogin/FacilityLogin'
import FacilityDashboard from './components/Facility/FacilityDashboard/FacilityDashboard'
import JobPosting from './components/Job/JobPosting/JobPosting'
import JobDetails from './components/Job/JobDetails/JobDetails'
import JobCreate from './components/Job/JobCreate/JobCreate'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
            <Stack.Screen
              name="InitialSelection"
              component={InitialSelection}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
            <Stack.Screen
              name="Nurse Login"
              component={NurseLogin}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
            <Stack.Screen
              name="Nurse Dashboard"
              component={NurseDashboard}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
            <Stack.Screen
              name="Nurse Sign Up"
              component={NurseSignUp}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
            <Stack.Screen
              name="Facility Login"
              component={FacilityLogin}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
            <Stack.Screen
              name="Facility Sign Up"
              component={FacilitySignUp}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
            <Stack.Screen
              name="Facility Dashboard"
              component={FacilityDashboard}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
            <Stack.Screen
              name="Job Posting"
              component={JobPosting}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
            <Stack.Screen
              name="Job Details"
              component={JobDetails}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
            <Stack.Screen
              name="Job Create"
              component={JobCreate}
              options={{
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTitleStyle: {
                  color: '#000',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
