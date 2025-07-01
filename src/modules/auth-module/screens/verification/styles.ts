import { StyleSheet } from 'react-native';
import { colors } from '../../../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  topContainer: {
    alignItems: 'flex-start',
    width: '100%',
    rowGap: 24,
    marginTop: 8,
  },
  imgV: {},
  headingContainer: {
    width: '100%',
    rowGap: 10,
  },
  headingText: {
    fontWeight: '600',
    fontSize: 22,
    color: colors.black,
  },
  subHeadingText: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.lightGrey,
  },
  phoneRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  phoneText: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.black,
  },
  editText: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.appBlue,
  },
  otpContainer: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 16,
  },
  pinContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  resendText: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.darkGrey,
  },
  resendLink: {
    color: colors.appBlue,
  },
  bottomContainer: {
    alignItems: 'center',
    rowGap: 20,
  },
});
