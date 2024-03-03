import { Alert, Text, View } from "react-native";
import React, { PureComponent } from "react";
import {
  initialize,
  startDiscoveringPeers,
  stopDiscoveringPeers,
  subscribeOnConnectionInfoUpdates,
  subscribeOnThisDeviceChanged,
  subscribeOnPeersUpdates,
  connect,
  cancelConnect,
  createGroup,
  removeGroup,
  getAvailablePeers,
  sendFile,
  receiveFile,
  getConnectionInfo,
  getGroupInfo,
  receiveMessage,
  sendMessage,
  WifiP2pInfo,
} from "react-native-wifi-p2p";
import { PermissionsAndroid } from "react-native";

class WifiPeertoPeer extends PureComponent {

  connectDevice(device: any, handleSendFile: Function) {
    connect(device.deviceAddress)
      .then(() => {
        console.log('Connected to ' + device.deviceName);
        Alert.alert('Connected to ' + device.deviceName);
        handleSendFile(device.deviceAddress);
      })
      .catch((error) => {
        Alert.alert(error);
        console.error('Connection error: ' + error);
      });
  }
  
  peersUpdatesSubscription: any;
  connectionInfoUpdatesSubscription: any;
  thisDeviceChangedSubscription: any;
  state = {
    devices: [],
  };

  constructor(props: any) {
    super(props);
    console.log("super", props);

    // Your constructor logic here
  }

  init = async()=>{
    
  }

  receiverInit(handleConnectionInfoUpdate: { (info: any): void; (data: WifiP2pInfo): void; }) {
    initialize();

    subscribeOnConnectionInfoUpdates(handleConnectionInfoUpdate);
}

  discoverDevices = async(handleNewInfo: (info: any) => void, handleNewPeers: ({ devices }: { devices: any; }) => void, handleThisDeviceChanged: (groupInfo: any) => void) => {
    let allPermissionsGranted = true;
    try {
      await initialize();
      // since it's required in Android >= 6.0

      const coarseLocationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
      );
      const fineLocationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      const wifiDevicesPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.NEARBY_WIFI_DEVICES
      );

      if (
        coarseLocationPermission !== PermissionsAndroid.RESULTS.GRANTED ||
        fineLocationPermission !== PermissionsAndroid.RESULTS.GRANTED ||
        wifiDevicesPermission !== PermissionsAndroid.RESULTS.GRANTED
      ) {
        allPermissionsGranted = false;
      }

      console.log(
        allPermissionsGranted
          ? "You can use the p2p mode"
          : "Permission denied: p2p mode will not work"
      );

      this.peersUpdatesSubscription = subscribeOnPeersUpdates(
        handleNewPeers
      );
      this.connectionInfoUpdatesSubscription = subscribeOnConnectionInfoUpdates(
        handleNewInfo
      );
      this.thisDeviceChangedSubscription = subscribeOnThisDeviceChanged(
        handleThisDeviceChanged
      );
      try {
        if(allPermissionsGranted){
          const status = await startDiscoveringPeers();
          console.log("startDiscoveringPeers status: ", status);
          // console.log(this.state);
          // return this.state;
        }
        else{
          Alert.alert('Permissions are not granted');
          // return {};
        }
        
      } catch (err) {
        console.error(err);
        console.log("startDiscoveringPeers status failed ");
      }
    } catch (e) {
      console.error(e);
    }
  }

  connectionInit = async () => {
    
  };

  componentWillUnmount() {
    this.peersUpdatesSubscription?.remove();
    this.connectionInfoUpdatesSubscription?.remove();
    this.thisDeviceChangedSubscription?.remove();
  }
  // componentDidUpdate(
  //   prevProps: Readonly<{}>,
  //   prevState: Readonly<{}>,
  //   snapshot?: any
  // ): void {
  //   console.log(this.state);
  // }

  // handleNewInfo = (info: any) => {
  //   console.log("OnConnectionInfoUpdated", info);
  // };

  // handleNewPeers = ({ devices }) => {
  //   console.log("OnPeersUpdated", devices);
  //   this.setState({ devices: devices });
  // };

  // handleThisDeviceChanged = (groupInfo: any) => {
  //   console.log("THIS_DEVICE_CHANGED_ACTION", groupInfo);
  // };

  // render() {
  //   return (
  //     <View>
  //       <Text>WifiPeertoPeer</Text>
  //     </View>
  //   );
  // }
}
export const WifiP2P = new WifiPeertoPeer({});
