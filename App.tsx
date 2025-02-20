import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <MyTabs />
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// import React from 'react';
// import {Button, View, StyleSheet} from 'react-native';
// import Animated, {
//   useSharedValue,
//   withSpring,
//   useAnimatedStyle,
// } from 'react-native-reanimated';

// export default function App() {
//   const translateX = useSharedValue<number>(0);

//   const handlePress = () => {
//     translateX.value += 50;
//   };

//   const animatedStyles = useAnimatedStyle(() => ({
//     transform: [{translateX: withSpring(translateX.value * 2)}],
//   }));

//   return (
//     <>
//       <Animated.View style={[styles.box, animatedStyles]} />
//       <View style={styles.container}>
//         <Button onPress={handlePress} title="Click me" />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     height: 120,
//     width: 120,
//     backgroundColor: '#b58df1',
//     borderRadius: 20,
//     marginVertical: 50,
//   },
// });
