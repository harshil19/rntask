import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const ContactComponent = ({title, icon}) => {
  return (
    <View style={styles.detailView}>
      <View style={styles.innerView}>
        <View style={styles.imgBg}>
          <Image source={icon} style={styles.iconStyle} />
        </View>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </View>
  );
};
export default ContactComponent;
