import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes/scale';
import colors from '../../themes/colors';
import Metrics from '../../themes/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
  },
  content: {
    marginVertical: verticalScale(20),
  },
  inputStyle: {
    height: verticalScale(50),
    width: '100%',
    paddingHorizontal: horizontalScale(15),
    color: colors.textPrimary,
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.textPrimary,
    fontSize: moderateScale(16),
    fontWeight: '700',
    marginVertical: verticalScale(10),
  },
  dropdownStyle: {
    height: verticalScale(50),
    width: '100%',
    marginVertical: verticalScale(10),
    borderColor: colors.textPrimary,
    borderRadius: moderateScale(10),
  },
  dropdownTextStyle: {
    fontSize: moderateScale(16),
    color: colors.textPrimary,
    fontWeight: '700',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerBtn: {
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: colors.textPrimary,
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(5),
    width: '48%',
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  label: {
    fontWeight: '700',
    color: colors.grey,
    fontSize: moderateScale(11),
  },
  dateTimeText: {
    fontWeight: '700',
    color: colors.textPrimary,
    fontSize: moderateScale(18),
  },
  imageBtn: {
    height: verticalScale(100),
    borderWidth: 1,
    borderColor: colors.textPrimary,
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(5),
    width: '48%',
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  iconStyle: {
    height: moderateScale(80),
    width: moderateScale(80),
    resizeMode: 'contain',
    tintColor: colors.textSecondary,
  },
  selectedStyle: {
    height: Metrics.screenHeight * 0.25,
    width: '100%',
    marginVertical: verticalScale(5),
    borderRadius: moderateScale(10),
  },
});
