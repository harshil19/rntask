import {StyleSheet} from 'react-native';
import colors from '../../../../themes/colors';
import Metrics from '../../../../themes/metrics';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../themes/scale';

export default StyleSheet.create({
  titleStyle: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: colors.textPrimary,
    marginVertical: verticalScale(10),
  },
  detailView: {
    height: Metrics.screenHeight * 0.2,
    padding: moderateScale(5),
    flexDirection: 'row',
    marginVertical: verticalScale(10),
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    shadowColor: colors.black,
    shadowOffset: {height: 5, width: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  leftView: {
    width: '60%',
    padding: moderateScale(10),
  },
  rightView: {
    alignItems: 'flex-end',
    width: '40%',
    flexDirection: 'row',
  },
  rightSubView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
    resizeMode: 'contain',
    tintColor: colors.primary,
    marginHorizontal: horizontalScale(10),
  },
  descStyle: {
    fontSize: moderateScale(13),
    fontWeight: '500',
    color: colors.textSecondary,
  },
  countStyle: {
    fontSize: moderateScale(60),
    fontWeight: '700',
    color: colors.primary,
    marginHorizontal: horizontalScale(10),
  },
});
