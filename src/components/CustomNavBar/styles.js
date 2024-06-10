import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import Metrics from '../../themes/metrics';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes/scale';

export default StyleSheet.create({
  container: {
    height: verticalScale(55),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerTitleView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth - 65,
  },
  headerText: {
    marginLeft: horizontalScale(65),
    fontSize: moderateScale(20),
    fontWeight: '700',
  },
  iconsView: {
    flexDirection: 'row',
    width: Metrics.screenWidth,
    alignItems: 'center',
  },
  iconBtn: {
    marginHorizontal: horizontalScale(20),
  },
  iconStyle: {
    height: moderateScale(20),
    width: moderateScale(20),
    resizeMode: 'contain',
    tintColor: colors.white,
    marginHorizontal: horizontalScale(5),
  },
});
