import { View, Text, SafeAreaView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import { WifiP2P } from "../wifiModule/WifiPeertoPeer";
import LottieView from "lottie-react-native";

const Receiver = () => {
  const [recPlay, setRecPlay] = useState(false);

  useEffect(() => {
    // WifiP2P.discoverDevices();

    WifiP2P.discoverDevices(
      handleNewInfo,
      handleNewPeers,
      handleThisDeviceChanged
    );
  }, []);

  const handleNewInfo = (info: any) => {
    console.log(" receiver OnConnectionInfoUpdated ", info);
    // Handle incoming connections
    if (info.groupFormed && info.isGroupOwner) {
      setRecPlay(true);
      Alert.alert("Connection established with sender device");
      console.log("Connection established with sender device");
      handleReceiveFile();
    }
  };

  const handleNewPeers = ({ devices }: any) => {
    console.log("OnPeersUpdated", devices);
  };

  const handleThisDeviceChanged = (groupInfo: any) => {
    console.log("THIS_DEVICE_CHANGED_ACTION", groupInfo);
  };

  function handleConnectionInfoUpdate(info: {
    groupFormed: any;
    isGroupOwner: any;
  }) {
    // Handle incoming connections
    if (info.groupFormed && info.isGroupOwner) {
      setRecPlay(true);
      Alert.alert("Connection established with sender device");
      console.log("Connection established with sender device");
      handleReceiveFile();
    }
  }

  function handleReceiveFile() {
    // Implement file receiving logic
    // Use receiveFile() to receive files from the sender device
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={[GlobalStyles.actions, { justifyContent: "center" }]}>
        <View style={GlobalStyles.lottieDimension}>
          <LottieView
            source={require("../../assets/ReceiverScanner.json")}
            loop={recPlay}
            autoPlay={recPlay}
            speed={0.5}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Receiver;
