import {Dimensions, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {Text, PlatformPressable} from '@react-navigation/elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import RecipeScreen from '../Screens/RecipeScreen';

const {height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();

  const {buildHref} = useLinkBuilder();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.09,
        // paddingBottom: insets.bottom,

        backgroundColor: 'red',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: 'purple',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: insets.bottom,
              height: height * 0.06,
            }}>
            <Text style={{color: isFocused ? colors.primary : colors.text}}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const HomeStack = createStackNavigator();
const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="Recipe"
      component={RecipeScreen}
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
);

function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
