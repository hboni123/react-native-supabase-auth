import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type BottomHalfProps = {
  screen: string;
};

const BottomHalf: React.FC<BottomHalfProps> = ({ screen }) => {
  let content;
  switch (screen) {
    case 'Screen1':
      content = <Text style={styles.text}>This is Screen 1</Text>;
      break;
    case 'Screen2':
      content = <Text style={styles.text}>This is Screen 2</Text>;
      break;
    default:
      content = <Text style={styles.text}>This is the bottom half covering 75% of the screen.</Text>;
      break;
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
  },
});

export default BottomHalf;
