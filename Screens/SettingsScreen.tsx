import React, {useState} from 'react';
import Animated, {Easing, FadeInUp, FadeOutLeft} from 'react-native-reanimated';
import {View, Text, FlatList, Switch, Button, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Chef = {
  id: string;
  name: string;
  isAdmin: boolean;
};

function SettingsScreen() {
  const insets = useSafeAreaInsets();

  const [chefs, setChefs] = useState<Chef[]>([
    {id: '1', name: 'Chef John', isAdmin: false},
    {id: '2', name: 'Chef Emily', isAdmin: false},
    {id: '3', name: 'Chef Michael', isAdmin: false},
  ]);

  const toggleAdmin = (id: string) => {
    setChefs(prevChefs =>
      prevChefs.map(chef =>
        chef.id === id ? {...chef, isAdmin: !chef.isAdmin} : chef,
      ),
    );
  };

  const deleteChef = (id: string) => {
    setChefs(prevChefs => prevChefs.filter(chef => chef.id !== id));
  };

  return (
    <Animated.View
      entering={FadeInUp}
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <FlatList
        data={chefs}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Animated.View
            entering={FadeInUp.duration(500).easing(Easing.ease)}
            exiting={FadeOutLeft.duration(500).easing(Easing.ease)}
            style={styles.chefItem}>
            <Text style={styles.chefName}>{item.name}</Text>
            <Switch
              value={item.isAdmin}
              onValueChange={() => toggleAdmin(item.id)}
            />
            <Button
              title="Delete"
              onPress={() => deleteChef(item.id)}
              color="red"
            />
          </Animated.View>
        )}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  chefItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chefName: {
    fontSize: 18,
    flex: 1,
  },
});

export default SettingsScreen;
