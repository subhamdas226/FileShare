import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../GlobalStyles";
import * as DocumentPicker from "expo-document-picker";
import {
  useFocusEffect,
  useNavigation,
  NavigationProp,
} from "@react-navigation/native";
import FileSystem from "expo-file-system";
import { Button, Avatar } from "react-native-paper";

const SelectFiles = () => {
  const navigation: NavigationProp<any> = useNavigation();
  const [files, setFiles] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      selectFiles();
    }, [])
  );

  function humanizeFileSize(fileSize: number) {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let unitIndex = 0;
    while (fileSize >= 1024 && unitIndex < units.length - 1) {
      fileSize /= 1024;
      unitIndex++;
    }
    return `${fileSize.toFixed(2)} ${units[unitIndex]}`;
  }

  const selectFiles = async () => {
    try {
      const files: any = await DocumentPicker.getDocumentAsync({
        // type: ['allFiles'],
        type: "*/*",
        multiple: true,
      });
      console.log(files , files.assets.length);
      setFiles(files.assets);
    } catch (err) {
      console.log(err);
    }
  };

  // const shareFiles = async () => {
  //   try {
  //     const files = await FileSystem.readAsStringAsync(files.map(file => file.uri));

  //     // Share the files with other users
  //     console.log(files);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={"default" || "dark-content" || "light-content"}
        showHideTransition={"fade" || "slide" || "none"}
        hidden={false}
      />
      <ScrollView>
        <FlatList
          data={files}
          renderItem={({ item }: any) => (
            <View style={GlobalStyles.listConatiner}>
              <View style={GlobalStyles.leftContainer}>
                <Text>Images</Text>
              </View>
              <View style={GlobalStyles.rightContainer}>
                <Text>{item?.name}</Text>
                <Text>{humanizeFileSize(item?.size)} </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
      <View style={GlobalStyles.send}>
        <View style={GlobalStyles.sendCount}>
          <Avatar.Text
            size={38}
            label={files?.length !== 0 ? files?.length + "" : "0"}
          />
        </View>

        <View style={GlobalStyles.sendButton}>
          <Button
            icon="send"
            mode="contained"
            disabled={files?.length < 1 ? true : false}
            onPress={() => navigation.navigate("Scan")}
          >
            Send
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectFiles;
