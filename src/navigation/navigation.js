import React from 'react'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from '../assets/colors/Color'
import WeeklySpendingLimit from '../screens/WeeklySpendingLimit/WeeklySpendingLimit.screen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Debit Card"
        component={Home}
        options={{
          tabBarActiveTintColor: Color.COLOR_PRIMARY,
          tabBarInactiveTintColor: Color.GRAY,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'credit-card'} size={25} color={focused ? Color.COLOR_PRIMARY : Color.GRAY} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: Color.COLOR_PRIMARY,
          tabBarInactiveTintColor: Color.GRAY,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'user'} size={25} color={focused ? Color.COLOR_PRIMARY : Color.GRAY} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        />
        <Stack.Screen
          name="WeeklySpendingLimit"
          options={{ headerShown: false }}
          component={WeeklySpendingLimit}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
