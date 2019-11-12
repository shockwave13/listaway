import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import LoginScreen from '../screens/LoginScreen';
import ResetEmailScreen from '../screens/ResetEmailScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

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
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  ResetEmail: {
    screen: ResetEmailScreen,
    navigationOptions: {
      title: 'Reset email',
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Create your profile',
    },
  },
  Home: {
    screen: AppDrawerNavigation,
    navigationOptions: {header: null},
  },
});

export default createAppContainer(AppNavigation);
