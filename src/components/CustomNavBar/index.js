import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const CustomNavBar = ({title, icons, onNotification, onMore}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitleView}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.iconsView}>
        {icons &&
          icons?.map((e, i) => {
            return (
              <TouchableOpacity
                key={i}
                stye={styles.iconBtn}
                onPress={i === 0 ? onNotification : onMore}>
                <Image source={e} style={styles.iconStyle} />
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};
export default CustomNavBar;
