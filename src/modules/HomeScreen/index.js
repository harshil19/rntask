import React, {useCallback, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {ICONS} from '../../assets';
import {CustomNavBar, MoreMenu} from '../../components';
import {
  MedicalFilesData,
  MoreOptionData,
  UpcomingConsultationsData,
} from '../../constants/mockdata';
import CardComponent from './Component/CardComponent';
import ContactComponent from './Component/ContactComponent';
import styles from './styles';

const HomeScreen = () => {
  const [isMoreOption, setMoreOption] = useState(false);
  const onNotificationPress = useCallback(
    () => Alert.alert('Notification', '🎉'),
    [],
  );
  const onMorePress = useCallback(() => {
    setMoreOption(true);
  }, []);

  return (
    <View style={styles.container}>
      <CustomNavBar
        title={'Dashboard'}
        icons={[ICONS.bell, ICONS.more]}
        onNotification={onNotificationPress}
        onMore={onMorePress}
      />
      <ScrollView>
        <View style={styles.mainContainer}>
          <CardComponent
            title={'Upcoming Consultations'}
            data={UpcomingConsultationsData}
            icon={ICONS.stethoscope}
          />
          <CardComponent
            title={'Medical Files'}
            data={MedicalFilesData}
            icon={ICONS.medicalFile}
          />
          <View style={styles.contactComponentStyle}>
            <ContactComponent icon={ICONS.plus} title={'Schedule'} />
            <ContactComponent icon={ICONS.call} title={'Call'} />
          </View>
          <MoreMenu
            isVisible={isMoreOption}
            setVisible={setMoreOption}
            data={MoreOptionData}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
