import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker'; // Import from image-picker
import {RFValue} from 'react-native-responsive-fontsize';

const FileUploadUI = () => {
  const [files, setFiles] = useState<any[]>([]);
  console.log(files);
  const handlePickFile = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo', // Only allow image selection
        selectionLimit: 1, // Allows multiple files to be selected
      });

      if (result.didCancel) {
        console.log('User cancelled image picker');
        return;
      }

      if (result.assets) {
        const newFile = {
          name: result.assets[0]?.fileName || 'Unknown',
          uri: result.assets[0]?.uri || '',
          size: result.assets[0]?.fileSize || 0,
        };

        setFiles(prevFiles => [...prevFiles, newFile]);
      }
    } catch (err) {
      console.error('ImagePicker Error: ', err);
    }
  };

  const handleRemoveFile = (fileUri: string) => {
    Alert.alert('Remove File', 'Are you sure you want to remove this file?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () =>
          setFiles(prevFiles => prevFiles.filter(file => file.uri !== fileUri)),
      },
    ]);
  };

  const renderFileItem = ({item}: {item: any}) => (
    <View style={styles.fileItem}>
      <Icon name="image" size={RFValue(20)} color="#FF8800" />
      <View style={styles.fileInfo}>
        <Text style={styles.fileName}>{item.name}</Text>
        <Text style={styles.fileSize}>
          {item.size ? (item.size / (1024 * 1024)).toFixed(2) : 'Unknown'} MB
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="download" size={RFValue(20)} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveFile(item.uri)}>
          <Icon name="trash" size={RFValue(20)} color="#FF0000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Files</Text>
      <TouchableOpacity style={styles.uploadZone} onPress={handlePickFile}>
        <Icon name="add-circle-outline" size={RFValue(40)} color="#999" />
        <Text style={styles.uploadText}>Tap to choose images</Text>
        <Text style={styles.uploadInfo}>Max file size: 10 MB</Text>
      </TouchableOpacity>

      <FlatList
        data={files}
        renderItem={renderFileItem}
        keyExtractor={item => item.uri}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginBottom: RFValue(10),
  },
  uploadZone: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: RFValue(10),
    backgroundColor: 'grey',
    paddingVertical: RFValue(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(5),
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  uploadText: {
    fontSize: RFValue(16),
    color: '#666',
    marginTop: RFValue(10),
  },
  uploadInfo: {
    fontSize: RFValue(12),
    color: '#999',
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: RFValue(10),
    backgroundColor: '#FFF',
    borderRadius: RFValue(10),
    marginBottom: RFValue(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  fileInfo: {
    flex: 1,
    marginLeft: RFValue(10),
  },
  fileName: {
    fontSize: RFValue(9),
    fontWeight: '500',
  },
  fileSize: {
    fontSize: RFValue(9),
    color: '#666',
    marginTop: RFValue(2),
  },
  actions: {
    flexDirection: 'row',
    gap: RFValue(10),
  },
});

export default FileUploadUI;
