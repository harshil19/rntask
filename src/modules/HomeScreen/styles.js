import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {horizontalScale} from '../../themes/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
  },
  contactComponentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
