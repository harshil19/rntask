import {useCallback} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const MoreMenu = ({data, isVisible, setVisible, onMenuItemPress}) => {
  onItemPress = useCallback(() => {
    setVisible(false);
    onMenuItemPress && onMenuItemPress();
  }, []);

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        {data?.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={onItemPress}
            style={styles.btnStyle}>
            <Text style={styles.menuItmTitle}>{item?.title}</Text>
            <Image source={item?.icon} style={styles.iconStyle} />
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};
export default MoreMenu;
