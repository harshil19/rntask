import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {imageSelection, requestCameraPermission} from '../../Utils';
import {ICONS} from '../../assets';
import {CustomNavBar} from '../../components';
import {SpecialtyData} from '../../constants/mockdata';
import colors from '../../themes/colors';
import DateTimePicker from './DatePicker';
import styles from './styles';

const AccountScreen = () => {
  const [name, setName] = useState();
  const [date, setDate] = useState(new Date());
  const [isDatePicker, setDatepicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isTimePicker, setTimepicker] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(null);
  const [dropdownItems, setDropdownItems] = useState(SpecialtyData);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraPermission();
    }
  }, []);

  const onGalleryPress = useCallback(() => {
    imageSelection(false).then(res => {
      setSelectedImage(res?.assets[0]?.uri);
    });
  }, []);

  const onCameraPress = useCallback(() => {
    imageSelection(true).then(res => setSelectedImage(res?.assets[0]?.uri));
  }, []);

  const handleChange = useCallback(val => {
    setName(val);
  }, []);

  const onDatePress = useCallback(() => {
    setDatepicker(true);
  }, []);

  const onTimePress = useCallback(() => {
    setTimepicker(true);
  }, []);

  const onDateSelect = useCallback(date => {
    setDatepicker(false);
    setDate(date);
  }, []);

  const onTimeSelectPress = useCallback(time => {
    setTimepicker(false);
    setTime(time);
  }, []);

  return (
    <View style={styles.container}>
      <CustomNavBar title={'Account'} />
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <TextInput
            value={name}
            placeholder={'Enter doctor name'}
            placeholderTextColor={colors.grey}
            onChangeText={handleChange}
            keyboardType={'default'}
            returnKeyType={'done'}
            style={styles.inputStyle}
          />
          <DropDownPicker
            open={isDropdownOpen}
            value={dropdownValue}
            items={dropdownItems}
            setOpen={setDropdownOpen}
            setValue={setDropdownValue}
            setItems={setDropdownItems}
            style={styles.dropdownStyle}
            placeholder="Select specialty"
            placeholderStyle={{color: colors.grey}}
            textStyle={styles.dropdownTextStyle}
          />
          <View style={styles.dateTimeContainer}>
            <TouchableOpacity onPress={onDatePress} style={styles.pickerBtn}>
              <Text style={styles.label}>{'Appointment Date'}</Text>
              <DateTimePicker
                mode={'date'}
                isOpen={isDatePicker}
                setOpen={setDatepicker}
                selectedDateTime={date}
                onConfirm={onDateSelect}
              />
              <Text style={styles.dateTimeText}>
                {moment(date).format('DD-MM-Y')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onTimePress} style={styles.pickerBtn}>
              <Text style={styles.label}>{'Appointment Time'}</Text>
              <DateTimePicker
                mode={'time'}
                isOpen={isTimePicker}
                setOpen={setTimepicker}
                selectedDateTime={time}
                onConfirm={onTimeSelectPress}
              />
              <Text style={styles.dateTimeText}>
                {moment(time).format('HH:mm')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dateTimeContainer}>
            <TouchableOpacity onPress={onCameraPress} style={styles.imageBtn}>
              <Image source={ICONS.camera} style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onGalleryPress} style={styles.imageBtn}>
              <Image source={ICONS.gallery} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
          {selectedImage && (
            <Image source={{uri: selectedImage}} style={styles.selectedStyle} />
          )}
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;
