import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Auth from '../screens/Auth';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/Auth/SignInScreen';

const AppDrawerNavigation = createDrawerNavigator({
  TourList: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Tour List',
    },
  },
  CreateTour: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Create Tour',
    },
  },
  OrderTour: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Order Tour',
    },
  },
  Profile: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Profile',
    },
  },
  Settings: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Settins',
    },
  },
  About: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'About',
    },
  },
  Logout: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Logout',
    },
  },
});

const AppNavigation = createStackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      header: null,
    },
  },

  Home: {
    screen: AppDrawerNavigation,
    navigationOptions: {header: null},
  },
});

export default createAppContainer(AppNavigation);
