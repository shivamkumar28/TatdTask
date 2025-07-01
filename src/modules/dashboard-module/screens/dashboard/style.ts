import { StyleSheet } from 'react-native';
import { colors } from '../../../../constant';
import { windowWidth } from '../../../../utilities';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 22,
    backgroundColor: colors.white,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'center',
  },
  logout: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  logoutV: {
    position: 'absolute',
    top: 20,
    right: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: colors.appRed,
  },
  switchV: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: colors.appBlue,
    marginTop: 16,
  },
  switch: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
});
