import {StyleSheet} from 'react-native';
import colors from '../../../../themes/colors';
import Metrics from '../../../../themes/metrics';
import {moderateScale, verticalScale} from '../../../../themes/scale';

export default StyleSheet.create({
  detailView: {
    height: Metrics.screenHeight * 0.18,
    width: Metrics.screenWidth * 0.42,
    padding: moderateScale(5),
    marginVertical: verticalScale(10),
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    shadowColor: colors.black,
    shadowOffset: {height: 5, width: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgBg: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(30),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  iconStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  titleStyle: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: colors.primary,
    paddingVertical: verticalScale(5),
  },
});
