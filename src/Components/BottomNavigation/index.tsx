import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../Screens/Home';
import List from '../../Screens/List';
import Contact from '../../Screens/Contact';

const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#000" size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="Lista de Descontos"
        component={List}
        options={{
          tabBarLabel: 'Lista de Descontos',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              color="#000"
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Contatos"
        component={Contact}
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="card-account-mail-outline"
              color="#000"
              size={30}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const BottomNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};

export default BottomNavigation;
