import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import GlobalStyles from "../GlobalStyles";
import { useFocusEffect } from "@react-navigation/native";
import { WifiP2P } from "../wifiModule/WifiPeertoPeer";
import { Avatar, Button } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const animalImages: any = {
  cool: require("../../assets/animals/cool.png"),
  dog: require("../../assets/animals/dog.png"),
  dog1: require("../../assets/animals/dog1.png"),
  fox: require("../../assets/animals/fox.png"),
  giraffe: require("../../assets/animals/giraffe.png"),
  meerkat: require("../../assets/animals/meerkat.png"),
  panda: require("../../assets/animals/panda.png"),
  rabbit: require("../../assets/animals/rabbit.png"),
  tiger: require("../../assets/animals/tiger.png"),
  wolf: require("../../assets/animals/wolf.png"),
};

const Scan = () => {
  const [animals, setAnimals] = useState([
    "cool",
    "dog",
    "dog1",
    "fox",
    "giraffe",
    "meerkat",
    "panda",
    "rabbit",
    "tiger",
    "wolf",
  ]);
  const [devicesStatus, setDeviceStatus] = useState<any>([]);
  const [devicesAddress, setDevicesAddress] = useState<any>();
  const [windowStyle, setWindowStyle] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      console.log(windowStyle);


      
        WifiP2P.discoverDevices(
          handleNewInfo,
          handleNewPeers,
          handleThisDeviceChanged
        );
      

    }, [])
  );

  const handleNewInfo = (info: any) => {
    console.log("sender OnConnectionInfoUpdated", info);
  };

  const handleNewPeers = ({ devices }: any) => {
    console.log("OnPeersUpdated", devices);
    
    

    if (devices?.length < 1) {
      Alert.alert("device not conneted");
      setDeviceStatus((prev  :any) => ({ devices: [1, 2, 3, 4] }));
      generateRandomLocations(devices.length);
    } else {
      let device: any[] = [];
      devices?.forEach((item : any)=>{
        console.log("item?.deviceAddress",item?.deviceAddress);
        setDevicesAddress(item?.deviceAddress)
        device.push(item?.deviceAddress)
      })
      // setDevicesAddress(device)
      setDeviceStatus(devices);
      generateRandomLocations(devices.length);
      Alert.alert("device conneted",devices[0]?.deviceAddress );
    }
    setTimeout(() => {
      console.log("devicestatus", devicesStatus , devices[0]?.deviceAddress);
      console.log("devicesAddress", devicesAddress, typeof devices[0]?.deviceAddress);
    }, 2000);
    
  };

  const handleThisDeviceChanged = (groupInfo: any) => {
    console.log("THIS_DEVICE_CHANGED_ACTION", groupInfo);
  };

  function handleConnectToDevice(device: any) {
    WifiP2P.connectDevice(device, handleSendFile);
  }

  function handleSendFile(deviceAddress: any) {
    // Implement file sending logic
    // Use sendFile() to send files to the connected device
    
  }

  const generateRandomLocations = (count: number) => {
    const styles = [];
    for (let i = 0; i < count; i++) {
      const top = Math.floor(Math.random() * (600 - 100 + 1)) + 100;
      const left = Math.floor(Math.random() * (windowWidth - 80 - 50 + 1)) + 50;
      styles.push({ top, left });
    }
    setWindowStyle(styles);
  };

  return (
   
    
    <SafeAreaView style={GlobalStyles.container}>
      <View style={[GlobalStyles.actions, { justifyContent: "center" }]}>
        {devicesStatus?.devices?.length > 0 &&
          devicesStatus?.devices.map((_device: any, index: number) => {
            return (
              <View style={[GlobalStyles.randomIcons, windowStyle[index]]}>
                <Avatar.Image size={50} source={animalImages[animals[index]]} />
              </View>
            );
          })}

        <View style={GlobalStyles.lottieScanner}>
          <LottieView
            source={require("../../assets/Scanning.json")}
            loop={true}
            autoPlay={true}
            speed={0.5}
          />
        </View>
      </View>
      
      <View style={GlobalStyles.send}>
        <View style={GlobalStyles.sendCount}>
          <Avatar.Text size={38} label={"0"} />
        </View>
          
        <View style={GlobalStyles.sendButton}>
         
          <Button
            icon="wifi"
            mode="contained"
            disabled={devicesStatus?.devices?.length < 1}
            onPress={() => {
              // handleConnectToDevice(devicesStatus.devices[0]?.deviceAddress)
              if (devicesStatus && devicesStatus.length > 0 && devicesStatus[0]?.deviceAddress) {
                handleConnectToDevice(devicesStatus[0].deviceAddress);
              } else {
                // Handle the scenario where deviceAddress might be empty or undefined
                console.log("Device address not available or devicesStatus is empty");
              }
            }
            }
          >
            Connect
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Scan;
