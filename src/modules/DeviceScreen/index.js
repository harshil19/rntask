import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {CustomNavBar} from '../../components';
import styles from './styles';

const DeviceScreen = () => {
  const [appVersion, setAppVersion] = useState();
  const [buildVersion, setBuildVersion] = useState();
  const [bundleId, setBundleId] = useState();
  const [batteryLevel, setBatteryLevel] = useState();
  const [totalDiskSpace, setTotalDiskSpace] = useState();

  useEffect(() => {
    setAppVersion(DeviceInfo.getVersion());
    setBuildVersion(DeviceInfo.getBuildNumber());
    setBundleId(DeviceInfo.getBundleId());
    DeviceInfo.getBatteryLevel().then(batteryLevel =>
      setBatteryLevel(`${parseInt(batteryLevel * 100, 10)}%`),
    );
    DeviceInfo.getTotalDiskCapacity().then(capacity =>
      setTotalDiskSpace(`${(capacity / 1024 ** 3).toFixed(2)} GB`),
    );
  }, []);

  const DeviceInfoData = [
    {
      id: 1,
      title: 'App Version',
      info: appVersion,
    },
    {
      id: 2,
      title: 'Build Version',
      info: buildVersion,
    },
    {
      id: 3,
      title: 'Build Id',
      info: bundleId,
    },
    {
      id: 4,
      title: 'Battery Level',
      info: batteryLevel,
    },

    {
      id: 5,
      title: 'Total Disk Space',
      info: totalDiskSpace,
    },
  ];

  const renderDeviceInfo = useCallback(({item, index}) => {
    return (
      <>
        <View style={styles.renderContent} key={index}>
          <Text style={styles.titleText}>{item?.title}</Text>
          <Text style={styles.infoText}>{item?.info}</Text>
        </View>
        {DeviceInfoData.length !== index + 1 && (
          <View style={styles.separatorView} />
        )}
      </>
    );
  }, []);

  return (
    <View style={styles.container}>
      <CustomNavBar title={'Device'} />
      <View style={styles.mainContainer}>
        <FlatList
          data={DeviceInfoData}
          keyExtractor={(item, index) => item + index}
          renderItem={renderDeviceInfo}
        />
      </View>
    </View>
  );
};
export default DeviceScreen;
