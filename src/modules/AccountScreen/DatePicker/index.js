import React, {useCallback} from 'react';
import DatePicker from 'react-native-date-picker';

const DateTimePicker = ({
  mode,
  isOpen,
  setOpen,
  selectedDateTime,
  onConfirm,
}) => {
  const onCancelPress = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <DatePicker
      modal
      mode={mode}
      open={isOpen}
      date={new Date(selectedDateTime)}
      onConfirm={onConfirm}
      onCancel={onCancelPress}
    />
  );
};
export default DateTimePicker;
