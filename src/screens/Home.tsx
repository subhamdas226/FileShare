import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import Receive from "../../assets/receive.json";
import Send from "../../assets/send.json";
import GlobalStyles from "../GlobalStyles";
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/';
import { Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
const Home = () => {
  const [sendPlay, setSendPlay] = useState(false);
  const [recPlay, setRecPlay] = useState(false);
  const [loop, setLoop] = React.useState(false);

  // const [progress, setProgress] = React.useState(false);
  const navigation: NavigationProp<any> = useNavigation();

  useFocusEffect(React.useCallback(() => {}, []));

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.actions}>
      
        <TouchableOpacity
          style={GlobalStyles.lottieDimension}
          onPress={() => {
            setSendPlay(true);
            setTimeout(() => {
              setSendPlay(false);
              navigation.navigate("SelectItems");
            }, 300);
          }}
        >
          <LottieView
            source={require("../../assets/demo.json")}
            loop={false}
            autoPlay={sendPlay}
            speed={2.5}
          />
        </TouchableOpacity>

        <TouchableOpacity style={GlobalStyles.lottieDimension}
         onPress={()=>{
          setRecPlay(true)
          setTimeout(() => {
            setRecPlay(false)
            navigation.navigate('Receiver')
            
          }, 300);
        }}>
          <LottieView source={require("../../assets/receive.json")} loop={false} autoPlay={recPlay} speed={2.5}/>
          
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
