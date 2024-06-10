import * as React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './styles';

const CardComponent = ({title, data, icon}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.detailView}>
        <View style={styles.leftView}>
          <ScrollView>
            {data?.map((e, i) => {
              return (
                <Text key={i} style={styles.descStyle} numberOfLines={1}>
                  {e?.title}
                </Text>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.rightView}>
          <View style={styles.rightSubView}>
            <Image source={icon} style={styles.iconStyle} />
            <Text style={styles.countStyle}>{data?.length}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardComponent;
