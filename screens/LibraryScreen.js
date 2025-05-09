import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../theme';

// Create a simple placeholder component
const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.subtitle}>This feature is under development</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    color: Colors.text,
    fontSize: 18,
  },
  subtitle: {
    color: Colors.textSecondary,
    marginTop: 8,
  },
});

export default LibraryScreen;
