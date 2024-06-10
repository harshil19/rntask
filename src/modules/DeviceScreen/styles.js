import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    margin: moderateScale(20),
    borderWidth: 3,
    borderColor: colors.textSecondary,
    borderRadius: moderateScale(10),
  },
  renderContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
  },
  separatorView: {
    height: verticalScale(3),
    backgroundColor: colors.textSecondary,
  },
  titleText: {
    fontSize: moderateScale(20),
    color: colors.textPrimary,
    fontWeight: '700',
  },
  infoText: {
    fontSize: moderateScale(20),
    color: colors.textSecondary,
    fontWeight: '700',
  },
});
