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
  render: () => JSX.Element;
}

const CustomButton: React.FC<ButtonProps> = ({onPress, render}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {render()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(15),
    backgroundColor: 'white',
  },
});

export default CustomButton;
