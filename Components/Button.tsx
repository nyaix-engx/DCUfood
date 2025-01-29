import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {RFValue} from 'react-native-responsive-fontsize';

interface ButtonProps {
  onPress: (event?: GestureResponderEvent) => void; // Type for the onPress function
}

const Button: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>
        <Icon name="plus" size={RFValue(16)} color="#900" />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: RFValue(50),
    height: RFValue(48),
    borderRadius: RFValue(15),
    backgroundColor: 'white',
  },
});

export default Button;
