/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/App.js';
import {name as appName} from './app.json';
import {YaMap} from 'react-native-yamap';
YaMap.init('d1a4224c-227d-478b-b093-23c8e2b15d85');
AppRegistry.registerComponent(appName, () => App);
