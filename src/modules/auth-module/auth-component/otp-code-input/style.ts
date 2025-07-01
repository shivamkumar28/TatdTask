import {StyleSheet} from 'react-native';
import {colors} from '../../../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  circleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 50,
  },
  text: {
    position: 'absolute',
    opacity: 0,
    right: 0,
  },
  pinView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 50,
    backgroundColor: colors.white,
    borderWidth: 1.2,
    borderRadius: 5,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    color: colors.black,
    includeFontPadding: false,
  },
});
