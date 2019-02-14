import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class PassportScreen extends React.Component {
  static navigationOptions = {
    title: 'Passport',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Passport Content</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
