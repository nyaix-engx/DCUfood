import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../Components/Button';
import Animated from 'react-native-reanimated';
import CardComponent from '../Components/CardComponent';

function HomeScreen({navigation}: {navigation: any}) {
  const insets = useSafeAreaInsets();

  const handleAddRecipe = () => {
    navigation.navigate('Recipe');
  };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <View style={styles.header}>
        <View style={styles.header_content_left}>
          <Text style={styles.header_content_left_text}>Welcome Neil</Text>
        </View>
        <View style={styles.header_content_right}>
          <Button onPress={handleAddRecipe} />
        </View>
      </View>
      <View style={styles.content}>
        <Animated.ScrollView
          contentContainerStyle={styles.content_card_wrapper}
          showsVerticalScrollIndicator={false}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  header: {
    marginVertical: RFValue(10),
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
  },
  header_content_left: {
    display: 'flex',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingEnd: RFValue(30),
    backgroundColor: 'blue',
  },
  header_content_left_text: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
  },
  header_content_right: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: RFValue(20),
    backgroundColor: 'yellow',
    padding: RFValue(10),
  },
  content_card_wrapper: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    rowGap: RFValue(9),
    flexWrap: 'wrap',
  },
});

export default HomeScreen;
