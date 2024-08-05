import React, { useState, useRef, useEffect } from 'react';
import { View, Button, StyleSheet, BackHandler } from 'react-native';
import BottomHalf from '../components/BottomHalf';
import { useFocusEffect } from '@react-navigation/native';

export default function Page2Screen() {
  const [screen, setScreen] = useState<string>('');
  const navigationStack = useRef<string[]>([]);

  const handleScreen1Press = () => {
    navigationStack.current.push('Screen1');
    setScreen('Screen1');
  };

  const handleScreen2Press = () => {
    navigationStack.current.push('Screen2');
    setScreen('Screen2');
  };

  const handleBackPress = () => {
    if (navigationStack.current.length > 0) {
      navigationStack.current.pop();
      const lastScreen = navigationStack.current[navigationStack.current.length - 1] || '';
      setScreen(lastScreen);
      return true; // Prevent default behavior
    }
    return false; // Allow default behavior if stack is empty
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return handleBackPress();
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [navigationStack.current])
  );

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Button title="Screen 1" onPress={handleScreen1Press} />
        <Button title="Screen 2" onPress={handleScreen2Press} />
      </View>
      <BottomHalf screen={screen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
