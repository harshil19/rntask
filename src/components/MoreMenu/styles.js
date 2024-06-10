import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import Metrics from '../../themes/metrics';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes/scale';
export default StyleSheet.create({
  modalContainer: {
    height: Metrics.screenHeight * 0.16,
    width: Metrics.screenWidth * 0.42,
    backgroundColor: colors.white,
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 20,
    shadowColor: colors.black,
    shadowOffset: {height: 5, width: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  btnStyle: {
    flexDirection: 'row',
    marginVertical: verticalScale(15),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
  },
  menuItmTitle: {
    fontSize: moderateScale(16),
    color: colors.darkGray,
    fontWeight: '400',
  },
  iconStyle: {
    height: moderateScale(18),
    width: moderateScale(18),
    resizeMode: 'contain',
    tintColor: colors.darkGray,
  },
});
