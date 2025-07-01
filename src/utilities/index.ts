import {Dimensions} from 'react-native';
import Toast from 'react-native-simple-toast';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

/**
 * show toast at the bottom
 * @param message
 */
export const showToast = (message: string) => {
  Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
};
