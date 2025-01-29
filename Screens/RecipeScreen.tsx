import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextInput, FAB} from 'react-native-paper';
import FileUploadUI from '../Components/FileUploadUI';

// const handleHead = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>;

function RecipeScreen() {
  const [text, setText] = React.useState('');
  const insets = useSafeAreaInsets();
  const [recipeDescription, setRecipeDescription] = React.useState('');
  const richTextEditorRef = React.useRef(null);

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.recipe_name}>
        <View style={styles.recipe_name_wrapper}>
          <TextInput
            value={text}
            mode="outlined"
            label="Recipe Name"
            contentStyle={styles.recipe_name_text}
            onChangeText={text => setText(text)}
          />
          <FAB
            icon="note-edit-outline"
            mode="flat"
            style={styles.recipe_name_button}
            onPress={() => console.log('Pressed')}
          />
        </View>
      </View>
      <View style={styles.recipe_photo}>
        <FileUploadUI />
      </View>
      <View style={styles.recipe_details}>
        <RichEditor
          ref={richTextEditorRef}
          style={styles.richEditor}
          initialContentHTML={recipeDescription}
          onChange={html => setRecipeDescription(html)}
          placeholder="Write your recipe details here..."
          // androidHardwareAccelerationDisabled // Fix for Android performance
        />
        <RichToolbar
          editor={richTextEditorRef}
          style={styles.richToolbar}
          actions={[
            'bold',
            'italic',
            'underline',
            'strikeThrough',
            'insertBulletsList',
            'insertOrderedList',
            'undo',
            'redo',
          ]}
        />
      </View>
      <View style={styles.recipe_submit}>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Submit
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    paddingHorizontal: RFValue(20),
    // alignItems: 'center',
    flexWrap: 'wrap',
    rowGap: RFValue(10),
  },
  recipe_name: {
    flex: 1,
    width: '100%',
  },
  recipe_name_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: RFValue(5),
  },
  recipe_name_text: {
    // flex: 1,
    width: '100%',
  },
  recipe_name_button: {},
  recipe_photo: {
    flex: 3.5,
    width: '100%',
    marginTop: RFValue(20),
  },

  recipe_details: {
    flex: 4.5,
    // backgroundColor: 'orange',
    marginTop: RFValue(25),
    marginBottom: RFValue(0),
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
  },

  richEditor: {
    // backgroundColor: 'purple',
    // borderWidth: 1,
    // borderColor: '#ddd',
    // borderRadius: 4,
    // padding: 8,
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10),

    width: '100%',
    minHeight: 200,
  },
  richToolbar: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    borderColor: '#ddd',
    borderBottomLeftRadius: RFValue(10),
    borderBottomRightRadius: RFValue(10),

    // paddingHorizontal: 1,
    // borderWidth: 1,
    // borderRadius: 4,
    // marginTop: 8,
  },

  recipe_submit: {
    flex: 1,
  },
});

export default RecipeScreen;
