/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import React from 'react';
import { Provider } from 'react-redux';
// import {AppRegistry} from 'react-native';
import App from './App';
import configStore from './src/store/configStore';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
const store = configStore();
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => (props) => (
	<Provider store={store}>
		<App {...props}/>
	</Provider>
), () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});