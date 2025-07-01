import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

export interface CustomButtonI {
  title: string;
  contentContainerStyle?: StyleProp<ViewStyle> | undefined;
  titleStyle?: StyleProp<TextStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
