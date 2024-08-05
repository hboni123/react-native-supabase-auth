import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Screen2;
