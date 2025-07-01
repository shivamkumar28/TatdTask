import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ActivityOpacity, colors} from '../../constant';
import {memo} from 'react';
import {CustomButtonI} from './interface';

const CustomButton = (props: CustomButtonI) => {
  const {title, contentContainerStyle, titleStyle, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.container, contentContainerStyle]}
      activeOpacity={ActivityOpacity}
      onPress={onPress}>
      <Text style={[styles.txt, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(CustomButton);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appRed,
  },
  txt: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
});
