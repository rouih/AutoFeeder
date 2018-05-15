import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/Pages/Login';

import Routes from './src/Routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <StatusBar
          backgroundColor="#005662"
          barStyle="default"
        />
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#00838f',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  }
});
