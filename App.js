import React from 'react';
import { StyleSheet, Text, SafeAreaView,View } from 'react-native';
import PersonStatusBar from './src/components/StatusBar'

export default function App() {
    return (
            <View style={styles.appContainer}>
                <PersonStatusBar/>
                <View style={styles.container}>
                    <Text>Content Here</Text>
                </View>
            </View>
    );

}

const styles = StyleSheet.create({
    appContainer: {
      // marginTop: 20
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
