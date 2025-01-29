import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardComponent = () => (
  <View style={styles.cardContainer}>
    <ImageBackground
      source={{uri: 'https://picsum.photos/id/237/200/300'}}
      style={styles.imageBackground}>
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{'Sanjay'}</Text>
        <Text style={styles.date}>{'sad'}</Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    width: windowWidth / 2 - RFValue(10) - RFValue(5), // Adjust the size of the square
    height: (windowWidth / 2 - RFValue(10) - RFValue(4)) * 0.7,
    borderRadius: RFValue(10),
    overflow: 'hidden',
    borderWidth: RFValue(1),
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust overlay opacity
  },
  textContainer: {
    padding: RFValue(10),
  },
  name: {
    color: '#fff',
    fontSize: RFValue(18),
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: RFValue(11),
    marginTop: RFValue(4),
  },
});
export default CardComponent;
