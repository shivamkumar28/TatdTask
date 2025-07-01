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
  imgV: {
    height: 87,
    width: 85,
  },
  topContainer: {
    alignItems: 'center',
    rowGap: 24,
    marginTop: 8,
  },
  headingContainer: {
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
  inputRow: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 16,
  },
  countryCodeContainer: {
    borderWidth: 1,
    borderColor: colors.border1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  countryCodeText: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.darkGrey,
  },
  inputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  input: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.black,
  },
  bottomContainer: {
    alignItems: 'center',
    rowGap: 20,
  },
});
